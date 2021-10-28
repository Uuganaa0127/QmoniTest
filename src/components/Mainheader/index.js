import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import Images from "../../constants/Images";
import { useNavigation } from '@react-navigation/native';

export default function index({ title }) {
    const navigation = useNavigation();
    return (

        <View style={styles.header}>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
            >
                <Image source={Images.gobackarrow} />
            </TouchableOpacity>
            <Text style={styles.headerText}>{title}</Text>
            <TouchableOpacity style={styles.Notifico} onPress={() => { console.log('A Pressed!') }}>
                <Image source={Images.notification} />
            </TouchableOpacity>

        </View>

    );
}
const styles = StyleSheet.create({
    header: {
        backgroundColor: 'background: #FFFFff ',
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        left: -20,
    },
    headerText: {
        color: '#333',
        fontSize: 15,
        fontWeight: 'bold',
        // flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent: 'center',
        // letterSpacing: 1,
    },
    Notifico: {
        position: 'absolute', top: 0, left: 0, right: -20, bottom: 0, justifyContent: 'center', alignItems: 'center',
        // width: '100%',
        // height: '100%',
        // height: undefined,
        // aspectRatio: 1,
        // position: "absolute",
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'red',
        resizeMode: 'contain',
        color: 'black',
        backgroundColor: 'transparent',
    }

});