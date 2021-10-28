import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Introduction from '../pages/IntroductionScreen';
import HomeScreen from '../pages/HomeScreen';
import RegisterHeader from '/Qmonitest/src/components/RegisterHeader'
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Images from '/Qmonitest/src/constants/Images';
import Header from '/Qmonitest/src/components/Header';

import Bonus from '/Qmonitest/src/pages/AfterLoginSreen/Bonus'
import ControlScreen from '../pages/AfterLoginSreen/ContolScreen';
import LoanScreen from '../pages/AfterLoginSreen/LoanScreen';
import LoanList from '../pages/AfterLoginSreen/LoanList';
import LoanDetails from '../pages/AfterLoginSreen/LoanDetails';
import { NavigationContainer } from '@react-navigation/native';
import accountScreen from '../pages/Account/accountScreen';
import accountList from '../pages/Account/accountList';
import UserInfo from '../pages/Information/userinfo';
import InfoListScreen from '../pages/Information/infoListScreen';


const AuthStack = createStackNavigator();
const LoginStack = createStackNavigator();
const HomeStack = createStackNavigator();
const IntroductionStack = createStackNavigator();
const bottomTab = createBottomTabNavigator();
const LoanScreens = (route) => {
    return (
        <HomeStack.Navigator >
            <HomeStack.Screen name={'LoanScreen'} component={LoanScreen}
                options={{
                    headerTitle: () => <Header title="ЗЭЭЛ АВАХ" />
                }}
            />
            <HomeStack.Screen name={'LoanDetails'} component={LoanDetails}
                options={{
                    headerLeft: null,
                    headerTitle: () => <Header title="ЗЭЭЛИЙН ДЭЛГЭРЭНГҮЙ" />
                }} />
            <HomeStack.Screen name={'LoanList'} component={LoanList}

                options={{
                    headerLeft: null,
                    headerTitle: () => <Header title="ЗЭЭЛИЙН ЖАГСААЛТ" />
                }} />
            <HomeStack.Screen name={'Bonus'} component={Bonus}
                options={{
                    headerLeft: null,
                    headerTitle: () => <Header title="ЗЭЭЛ АВАХ" />
                }} />
        </HomeStack.Navigator>
    )
}
const Home = (route) => {
    return (
        <HomeStack.Navigator >
            <HomeStack.Screen name={'ControlScreen'} component={ControlScreen}
                options={{
                    title: "УДИРЛАГЫН ХЭСЭГ",
                    headerTitle: () => <Header title="УДИРЛАГЫН ХЭСЭГ" />
                }}
            />
        </HomeStack.Navigator>

    )
}
export function SignInNavigation(navigation, route) {
    return (
        <bottomTab.Navigator
            mode={'modal'}>
            <bottomTab.Screen name={'Home'} component={Home}
                mode={'card'}
                options={{
                    tabBarIcon: ({ focused }) => {
                        let iconName;
                        iconName = !focused ? Images.main : Images.mainiactive; //for icon or image
                        return (
                            <View style={styles.container}>
                                <Image
                                    source={iconName}
                                    style={{ width: 22, height: 22 }}
                                    resizeMode="contain"
                                />
                            </View>
                        )
                    },
                }}
            />
            < bottomTab.Screen
                name={'LoanScreens'}
                component={LoanScreens}
                options={{
                    tabBarIcon: ({ focused }) => {
                        let iconName;
                        iconName = !focused ? Images.loan : Images.loanianctive; //for icon or image
                        return (
                            <View style={styles.container}>
                                <Image
                                    source={iconName}
                                    style={{ width: 22, height: 22 }}
                                    resizeMode="contain"
                                />
                            </View>
                        )
                    },
                    headerTitle: () => <RegisterHeader title="БҮРТГҮҮЛЭХ" />
                }}
            />
            < bottomTab.Screen
                name={'accountScreen'}
                component={accountScreen}
                options={{
                    tabBarIcon: ({ focused }) => {
                        let iconName;
                        iconName = !focused ? Images.walletactive : Images.walletinactive; //for icon or image
                        return (
                            <View style={styles.container}>
                                <Image
                                    source={iconName}
                                    style={{ width: 22, height: 22 }}
                                    resizeMode="contain"
                                />
                            </View>
                        )
                    },
                    headerTitle: () => <RegisterHeader title="БҮРТГҮҮЛЭХ" />
                }}
            />

            < bottomTab.Screen
                name={'accountList'}
                component={accountList}
                options={{
                    tabBarIcon: ({ focused }) => {
                        let iconName;
                        iconName = !focused ? Images.loan : Images.loanianctive; //for icon or image
                        return (
                            <View style={styles.container}>
                                <Image
                                    source={iconName}
                                    style={{ width: 22, height: 22 }}
                                    resizeMode="contain"
                                />
                            </View>
                        )
                    },
                    headerShown: true,
                    headerTitle: () => <RegisterHeader title="БҮРТГҮҮЛЭХ" />
                }}
            />
            < bottomTab.Screen
                name={'UserInfo'}
                component={UserInfo}
                options={{
                    tabBarIcon: ({ focused }) => {
                        let iconName;
                        iconName = !focused ? Images.loan : Images.loanianctive; //for icon or image
                        return (
                            <View style={styles.container}>
                                <Image
                                    source={iconName}
                                    style={{ width: 22, height: 22 }}
                                    resizeMode="contain"
                                />
                            </View>
                        )
                    },
                    headerShown: true,
                    headerTitle: () => <RegisterHeader title="БҮРТГҮҮЛЭХ" />
                }}
            />
            < bottomTab.Screen
                name={'InfoListScreen'}
                component={InfoListScreen}
                options={{
                    tabBarIcon: ({ focused }) => {
                        let iconName;
                        iconName = !focused ? Images.loan : Images.loanianctive; //for icon or image
                        return (
                            <View style={styles.container}>
                                <Image
                                    source={iconName}
                                    style={{ width: 22, height: 22 }}
                                    resizeMode="contain"
                                />
                            </View>
                        )
                    },
                    headerShown: true,
                    headerTitle: () => <RegisterHeader title="БҮРТГҮҮЛЭХ" />
                }}
            />

        </bottomTab.Navigator >

    );
}
const styles = StyleSheet.create({
    container: {

        borderTopColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
    qrMenu: {
        width: 18,
        height: 18,
    },
    activeInt: {
        marginTop: 7,
        width: 4,
        height: 4,
    },
});
