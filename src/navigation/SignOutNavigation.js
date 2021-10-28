import React from 'react';
import Introduction from '../pages/IntroductionScreen';
import HomeScreen from '../pages/HomeScreen';
import RegisterHeader from '/Qmonitest/src/components/RegisterHeader'
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import RegisterScreen1 from '../pages/RegisterScreen/RegisterScreen1';
import RegisterScreen2 from '../pages/RegisterScreen/RegisterScreen2';
import RegisterScreen3 from '../pages/RegisterScreen/RegisterScreen3';
import RegisterScreen4 from '../pages/RegisterScreen/RegisterScreen4';
import RegisterScreen5 from '../pages/RegisterScreen/RegisterScreen5';
import RegisterScreen6 from '../pages/RegisterScreen/RegisterScreen6';
import SuccessScreen from '../pages/SuccessScreen';
import LoginScreen from '/Qmonitest/src/pages/LoginScreen/LoginScreen';
import ForgotPasswordScreen from '../pages/LoginScreen/ForgotPassword';

import Header from '/Qmonitest/src/components/Header';

const AuthStack = createStackNavigator();
const LoginStack = createStackNavigator();
const HomeStack = createStackNavigator();
const IntroductionStack = createStackNavigator();
const bottomTab = createBottomTabNavigator();
export function SignOutNavigation(navigation) {
    return (
        <AuthStack.Navigator
            mode={'modal'}
            screenOptions={{
                headerShown: false,
                //   cardStyleInterpolator:
                //     Platform.OS == 'ios'
                //       ? CardStyleInterpolators.forNoAnimation
                //       : CardStyleInterpolators.forNoAnimation,
            }}>
            <AuthStack.Screen name={'Introduction'}>
                {() => (
                    <LoginStack.Navigator
                        mode={'card'}
                        screenOptions={{
                            headerShown: false,
                        }}>
                        <AuthStack.Screen name={'Introduction'} component={Introduction} />
                    </LoginStack.Navigator>
                )}
            </AuthStack.Screen>
            <AuthStack.Screen
                name={'HomeScreen'}
                component={HomeScreen}
            />
            <AuthStack.Screen
                name={'LoginScreen'}
                component={LoginScreen}
            />
            <AuthStack.Screen
                name={'ForgotPasswordScreen'}
                component={ForgotPasswordScreen}
            />
            <AuthStack.Screen
                screenOptions={{ headerShown: true }}
                name={'RegisterScreen1'}
                component={RegisterScreen1}
                options={{
                    headerShown: true,
                    headerTitle: () => <RegisterHeader title="БҮРТГҮҮЛЭХ" />
                }}
            />
            <AuthStack.Screen
                name={'RegisterScreen2'}
                component={RegisterScreen2}
                options={{
                    headerShown: true,
                    headerTitle: () => <RegisterHeader title="БҮРТГҮҮЛЭХ" />
                }}
            />
            <AuthStack.Screen
                name={'RegisterScreen3'}
                component={RegisterScreen3}
                options={{
                    headerShown: true,
                    headerTitle: () => <Header title="БҮРТГҮҮЛЭХ" />
                }}
            />
            <AuthStack.Screen
                name={'RegisterScreen4'}
                component={RegisterScreen4}
                options={{
                    headerShown: true,
                    headerTitle: () => <Header title="НЭМЭЛТ МЭДЭЭЛЭЛ" />
                }}
            />
            <AuthStack.Screen
                name={'RegisterScreen5'}
                component={RegisterScreen5}
                options={{
                    headerShown: true,
                    headerTitle: () => <Header title="ГЭРИЙН ХАЯГ" />
                }}
            />
            <AuthStack.Screen
                name={'RegisterScreen6'}
                component={RegisterScreen6}
                options={{
                    headerShown: true,
                    headerTitle: () => <Header title="БУСАД МЭДЭЭЛЭЛ" />
                }}
            />
            <AuthStack.Screen
                name={'SuccessScreen'}
                component={SuccessScreen}
                options={{
                    headerShown: false,

                }}
            />
        </AuthStack.Navigator>
    );
}
    // function register(params) {
    //     return (
    //         <bottomTab.Navigator>
    //             <bottomTab.Screen
    //                 name={'RegisterScreen2'}
    //                 component={RegisterScreen2} />


    //         </bottomTab.Navigator>
