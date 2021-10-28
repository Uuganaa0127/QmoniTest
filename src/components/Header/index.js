import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import Images from "../../constants/Images";
import { useNavigation } from '@react-navigation/native';

export default function index({ title }) {
    const navigation = useNavigation();
    return (
        <View style={styles.header}>
            <TouchableOpacity
                style={styles.buttonSec}
                onPress={() => navigation.goBack()}>
                <Image source={Images.gobackarrow} style={styles.arrowLeft} />
            </TouchableOpacity>
            <Text style={styles.headerText}>{title}</Text>
            <TouchableOpacity style={styles.Notifico} onPress={() => { console.log('A Pressed!') }}>
                <Image
                    style={{ width: 15, height: 15 }}
                    source={Images.notification}
                />
            </TouchableOpacity>

        </View>

    );
}
const styles = StyleSheet.create({
    header: {
        backgroundColor: 'background: #FFFFff ',
        zIndex: 5,
        flexDirection: 'row',
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        left: -20,

    },
    headerText: {
        textAlignVertical: "center",
        textAlign: "center",
        color: '#333',
        fontSize: 15,
        fontWeight: 'bold',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

        // letterSpacing: 1,
    },
    Notifico: {
        // position: 'absolute', top: 0, left: 0, right: -20, bottom: 0,
        // flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'red',
        resizeMode: 'contain',
        color: 'black',
        backgroundColor: 'transparent',
        // paddingStart: 100,
    },
    logo: {
        width: 140,
        height: 40,
    },
    buttonSec: {
        borderColor: '#CED8E7',
        padding: 11,
        paddingEnd: 10,
    },
    helpIcon: {
        width: 18,
        height: 18,
    },
    icon: {
        width: 24,
        height: 24,
    },
    arrowLeft: {
        paddingStart: 20,
        width: 18,
        height: 15,
        resizeMode: 'contain'
    },
    container: {
        width: '100%',
        marginVertical: 10,
        zIndex: 5,
    },
});
