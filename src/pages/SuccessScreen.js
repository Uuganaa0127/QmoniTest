import React, { useState } from 'react';
import { Text, View, StatusBar, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
// import mainStyle from './assets/style/style';
import MainStyle from '../components/styles/MainStyle';
import Images from '../constants/Images';

export default function SuccessScreen() {

    return (
        <View style={[MainStyle.bgBlueContainer, { justifyContent: 'center', }]}>
            <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
            <View style={MainStyle.bottomContainer}>
                <View style={successContent.iconBack}>
                    <View style={[successContent.iconBackground, { position: 'relative', }]}>
                        <Image
                            style={{
                                position: 'absolute', zIndex: 1,
                                top: -70,
                            }}
                            source={Images.success}
                        />
                        <Image
                            style={successContent.sucessimage}
                            source={Images.successcheck} />
                    </View>
                </View>
                <Text style={successContent.h1}>Амжилттай!</Text>
                <Text style={successContent.text}>Таны хүсэлт бүртгэгдлээ</Text>
                {/* <Text style={successContent.text}>{succesfulText ? succesfulText : 'Таны хүсэлт бүртгэгдлээ'}</Text> */}
                {/* <View style={mainStyle.btnContainer}> */}
                <View style={successContent.btnContainer}>
                    <TouchableOpacity style={MainStyle.buttonPurple} onPress={() => responseModalHandler()}>
                        <Text style={MainStyle.btnTextLight}>Нэвтрэх</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}


const successContent = StyleSheet.create({
    iconBack: {
        backgroundColor: '#ddebf4',
        height: 130,
        width: 130,
        borderRadius: 65,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40,
    },
    iconBackground: {
        backgroundColor: '#1877b3',
        height: 100,
        width: 100,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
    },
    icon: {
        color: '#ffffff',
        fontSize: 36,
    },
    h1: {
        fontSize: 20,
        color: '#444444'
    },
    text: {
        fontSize: 13,
        lineHeight: 18,
        marginTop: 10,
        marginBottom: 20,
        color: '#999999'
    },
    btnContainer: {
        // marginTop: 300,
        // paddingTop: 300,
        // resizeMode: 'stretch',
        // alignContent: 'bottom',
        width: 220
    },
    sucessimage: {
        width: 70,
        height: 70,
        resizeMode: 'stretch',
        position: 'absolute',
        zIndex: 999
    }
});
