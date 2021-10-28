import React, { useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { BASE_URL, AUTH_URL, USERNAME, PASSWORD } from '../constants/Service';
import { createAction } from '../utils/createAction';
import { sleep } from '../utils/sleep';
// import base64 from 'base-64';

export function Rest() {
  const [state, dispatch] = React.useReducer(
    (state, action) => {
      // console.log(action);
      switch (action.type) {
        case 'SET_USER':
          return {
            ...state,
            user: { ...action.payload },
          };
        case 'REMOVE_USER':
          return {
            ...state,
            user: undefined,
          };
        case 'SET_LOADING':
          return {
            ...state,
            loading: action.payload,
          };
        default:
          return state;
      }
    },
    {
      user: undefined,
      loading: true,
    },
  );
  const auth = React.useMemo(
    () => ({
      login: async (url, username, password, useBioMetry, oneSignalId) => {
        // console.warn(JSON.stringify(username + password));
        // dispatch(createAction('SET_LOADING', true));
        const data = await fetch(
          `${AUTH_URL}${url}?username=${username}&password=${password}&grant_type=password`,
          {
            method: 'POST',
            headers: {
              Authorization: `Basic ${base64.encode(
                `${USERNAME}:${PASSWORD}`,
              )}`,
            },
          },
        )
          .then(response => response.json())
          .then(responseJson => {
            return responseJson;
          })
          .catch(error => {
            return Promise.reject('Нэвтрэх нэр нууц үг буруу байна.');
          });
        // console.log(data);
        if (data.access_token) {
          const checkToken = await fetch(
            `${BASE_URL}/token/info?onesignal=${oneSignalId}`,
            {
              method: 'GET',
              headers: {
                Accept: 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8',
                Authorization: 'Bearer ' + data.access_token,
              },
            },
          )
            .then(response => response.json())
            .then(responseJson => {
              return responseJson;
            })
            .catch(error => {
              return Promise.reject(
                'Нэвтрэхэд алдаа гарлаа. Та дахин оролдоно уу.',
              );
            });
          // console.log(checkToken);
          const user = {
            token: data.access_token,
            user_id: checkToken.id,
            firstName: checkToken.firstName,
            lastName: checkToken.lastName,
            username: checkToken.mobileNumber,
            registerNumber: checkToken.registerNumber,
            useBioMetry: useBioMetry,
            isPassedBankAccount: checkToken.isPassedBankAccount,
            userBankId: checkToken.userBankId,
          };
          // console.log(user);
          if (useBioMetry == 'first') {
            AsyncStorage.setItem('fp_username', username);
            AsyncStorage.setItem('fp_password', password);
          }
          await AsyncStorage.setItem('user', JSON.stringify(user));
          dispatch(createAction('SET_LOADING', false));
          dispatch(createAction('SET_USER', user));
        } else if (
          data.error == 'invalid_grant' ||
          data.error == 'unauthorized'
        ) {
          dispatch(createAction('SET_LOADING', false));
          return Promise.reject(data.error_description);
        } else {
          dispatch(createAction('SET_LOADING', true));
          return Promise.reject(data);
        }
      },
      logout: async () => {
        await AsyncStorage.removeItem('user');
        dispatch(createAction('REMOVE_USER'));
      },
      post: async (url, params, requiredToken = true, method = 'POST') => {
        const user = await AsyncStorage.getItem('user');
        const userParse = user ? JSON.parse(user) : null;
        const response = await fetch(
          `${BASE_URL}${url}`,
          method == 'POST'
            ? {
              method: method,
              headers: requiredToken
                ? {
                  Accept: 'application/json, text/plain',
                  'Content-Type': 'application/json;charset=UTF-8',
                  Authorization: 'Bearer ' + userParse.token,
                }
                : {
                  Accept: 'application/json, text/plain',
                  'Content-Type': 'application/json;charset=UTF-8',
                },
              body: JSON.stringify(params),
            }
            : {
              method: method,
              headers: requiredToken
                ? {
                  Accept: 'application/json, text/plain',
                  'Content-Type': 'application/json;charset=UTF-8',
                  Authorization: 'Bearer ' + userParse.token,
                }
                : {
                  Accept: 'application/json, text/plain',
                  'Content-Type': 'application/json;charset=UTF-8',
                },
            },
        );
        if (response.status == 401) {
          await AsyncStorage.removeItem('user');
          dispatch(createAction('REMOVE_USER'));
        }
        const result = await response.json();
        if (response.ok) {
          if (result.status == 'Success') {
            return result;
          } else if (result.status == 'Failed') {
            let res = {
              status: result.status,
              msg: result.msgList[0].text,
            };
            return res;
          } else {
            return result;
          }
        } else {
          return result;
        }
      },
    }),
    [],
  );
  React.useEffect(() => {
    sleep(2000).then(() => {
      AsyncStorage.getItem('user').then(user => {
        if (user) {
          dispatch(createAction('SET_USER', JSON.parse(user)));
        }
        dispatch(createAction('SET_LOADING', false));
      });
    });
  }, []);
  return { auth, state };
}
