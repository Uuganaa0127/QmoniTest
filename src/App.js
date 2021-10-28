import React, { useState } from 'react';
import { AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar, ImageBackground } from 'react-native';
import { SignOutNavigation } from './navigation/SignOutNavigation';
import { SignInNavigation } from './navigation/SignInNavigation';
// import LoaderScreen from './pages/LoaderScreen';
import { Rest } from './hooks/rest';
// import OneSignal from 'react-native-onesignal';
import Introduction from './pages/IntroductionScreen';
import Dashboard from './pages/HomeScreen';
import Home from './pages/HomeScreen';
import { AuthContext } from './contexts/authContext';
import { UserContext } from './contexts/userContext';
import { ThemeContext } from './contexts/themeContext';
import { useAsyncStorage } from '@react-native-community/async-storage';
const RootStack = createStackNavigator();
export default function App() {
  const { auth, state } = Rest();
  const [hasAcessToken, sethasAcessToken] = useState(false);
  const [isLoading, setisLoading] = useState(true);
  const [isWelcome, setisWelcome] = useState(true);
  const [kOSSettingsKeyAutoPrompt, setkOSSettingsKeyAutoPrompt] = useState(true);
  function renderScreens() {
    // if (state.loading) {
    //   return <RootStack.Screen name={'Loader'} component={LoaderScreen} />;
    // }
    // return <RootStack.Screen name={'AuthStack'} component={AuthStackNavigator} />
    // console.log(state)
    return state.user ? (
      <RootStack.Screen name={'MainStack'}>
        {() => (
          <UserContext.Provider value={state.user} >
            <NavigationContainer independent={true}>
              <SignOutNavigation />
            </NavigationContainer>
          </UserContext.Provider>
        )}
      </RootStack.Screen>
    )
      : (
        <RootStack.Screen name={'AuthStack'} component={SignInNavigation} />
      );
  }

  return (
    <ThemeContext.Provider
      value={''}>
      <StatusBar barStyle={'light-content'} />
      <AuthContext.Provider
        value={''}>
        <NavigationContainer>
          <RootStack.Navigator
            screenOptions={{
              headerShown: false,
              animationEnabled: false,
            }}>
            {renderScreens()}
          </RootStack.Navigator>
        </NavigationContainer>
      </AuthContext.Provider>
    </ThemeContext.Provider>
  );
}



  // _storeData = async () => {
  //   useEffect(() => {
  //     await OneSignal.init('d5dd7b29-0a0f-4355-938e-bcf4a95da89f', {
  //       kOSSettingsKeyAutoPrompt
  //     })
  //   }, []);
  // }
  // const _retrieveData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem('is_welcome').then(isWelcome => {
  //       if (value !== '0') {
  //         setisWelcome(true);
  //         setisLoading(false);
  //       } else {
  //         setisWelcome(false)
  //       }
  //       async.getItem("acess_token", {}).then(value => {
  //         if (value != '' && value != null) {
  //           async.getItem('user_id', {}).then(value1 => {
  //             let token = (value1 != '' && value1 != null) ? true : false;
  //             useState
  //           })
  //         }
  //       })
  // if (state.isLoading) {
  //   return (
  //     <IndexLoad />
  //   )
  // }
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home"
//           component={Home}
//           hideNavBar={true}
//           initial={false}
//         />
//         <Stack.Screen name="Introduction" component={Introduction}
//           hideNavBar={true}
//           initial={false}
//           key='Introduction'
//           title='Introduction' />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

        // const styles = StyleSheet.create({
        //   sectionContainer: {
        //     marginTop: 32,
        //     paddingHorizontal: 24,
        //   },
        //   sectionTitle: {
        //     fontSize: 24,
        //     fontWeight: '600',
        //   },
        //   sectionDescription: {
        //     marginTop: 8,
        //     fontSize: 18,
        //     fontWeight: '400',
        //   },
        //   highlight: {
        //     fontWeight: '700',
        //   },
        // });
