import React, { Component } from 'react';
import { Text, View, StatusBar, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MainStyle from '/Qmonitest/src/components/styles/MainStyle';

export default function UnSuccessScreen({ responseModalHandler, unsuccesfulText }) {

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
                        // source={require('./assets/image/success.png')}
                        />
                        <Icon style={[successContent.icon, { position: 'absolute', zIndex: 999 }]} name="times" />
                    </View>
                </View>
                <Text style={successContent.h1}>Амжилтгүй!</Text>
                <Text style={successContent.text}>{unsuccesfulText ? unsuccesfulText : 'Таны хүсэлт амжилтгүй боллоо'}</Text>
                <View style={successContent.btnContainer}>
                    <TouchableOpacity style={MainStyle.buttonPurple} onPress={() => responseModalHandler()}>
                        <Text style={MainStyle.btnTextLight} >Хаах</Text>
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
        color: '#999999',
        width: '80%',
        textAlign: 'center'
    },
    btnContainer: {
        width: 150
    },
});
