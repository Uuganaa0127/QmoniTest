import React from 'react'
import { Text, View, ActivityIndicator, StyleSheet, StatusBar, Image, Dimensions } from 'react-native'
import MainStyle from '/qmonitest/src/components/styles/MainStyle';
// import Images from '/qmonitest/src/constants/images';
import Images from '../constants/Images';
// import mainStyle from './assets/style/style';
const ScreenHeight = Dimensions.get("window").height - 170;
export default function LoaderScreen({ isLoading, loadingText }) {
    if (isLoading) {
        return (
            <View style={MainStyle.loadingScreen}>
                <ActivityIndicator size="small" color="#f95e00" />
                <Text style={MainStyle.loadingText}>{loadingText ? loadingText : 'Түр хүлээнэ үү...'}</Text>
            </View>
        );
    } else {
        return (null);
    }
}
const index = StyleSheet.create({
    conBottom: {
        position: 'absolute',
        display: 'flex',
        bottom: 0,
        justifyContent: 'center',
        height: 170,
        alignItems: 'center',
    },
    conMiddle: {
        display: 'flex',
        height: ScreenHeight,
        justifyContent: 'center',
    }
});