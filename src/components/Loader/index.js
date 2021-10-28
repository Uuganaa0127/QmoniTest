import React, { Component } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
// import mainStyle from '../assets/style/style';
import MainStyle from '../styles/MainStyle';

export default function Loader({ isLoading, loadingText }) {

    if (isLoading) {
        return (
            <View style={MainStyle.loadingScreen}>
                <ActivityIndicator size="small" color="#f95e00" />
                {/* <Text style={mainStyle.loadingText}>Түр хүлээнэ үү...</Text> */}
                <Text style={MainStyle.loadingText}>{loadingText ? loadingText : 'Түр хүлээнэ үү...'}</Text>
            </View>
        );
    } else {
        return (null);
    }
}