import React, { useState } from 'react';
import Images from '/Qmonitest/src/constants/Images'
import {

    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    StatusBar,
    Dimensions,
    TouchableOpacity,
    ImageBackground
} from 'react-native';
import index from '../components/Button/Index';
import Swiper from 'react-native-swiper';
import MainStyle from '../components/styles/MainStyle';
import AppIntroSlider from 'react-native-app-intro-slider';
import Home from './HomeScreen';
import { isTemplateElement } from '@babel/types';

const Screenwidth = Dimensions.get("window").width;
const Screenheight = Dimensions.get("window").height;
const slides = [
    {
        key: 1,
        text: 'Хэзээ ч, хаанаас ч',
        image: Images.intro1,
        backgroundColor: 'white',
    },
    {
        key: 2,
        text: 'Найдвартай',
        image: Images.intro2,
        backgroundColor: 'white',
    },
    {
        key: 3,
        text: 'Хурдан',
        image: Images.intro3,
        backgroundColor: 'white',
    }
];
const renderItem = ({ item }) => {
    return (
        < View style={{
            flex: 1,
            backgroundColor: item.backgroundColor,
            alignItems: 'center',
            justifyContent: 'center',
            paddingBottom: 200
        }} >
            <ImageBackground
                style={{
                    height: 300,
                    width: 300,
                    borderRadius: 300,
                }}>
                <Image
                    style={styles.introImg}
                    source={item.image} />
            </ImageBackground>
            <Text style={styles.text}>
                {item.text}
            </Text>

        </View>
    )
}
const NextButton = () => {
    return (
        <View style={styles.render}>
            <View style={MainStyle.btnContainer}>
                <View style={MainStyle.buttonPurple} >
                    <Text style={MainStyle.btnTextLight} >Дараах</Text>
                </View>
            </View>
        </View>

    )
}

const onDone = () => {
    return (
        <View style={styles.render}>
            <View style={MainStyle.btnContainer}>
                <View style={MainStyle.buttonPurple} >
                    <Text style={MainStyle.btnTextLight} >Бүртгүүлэх</Text>
                </View>
            </View>
        </View>
    )
}
export default function Introduction({ navigation }) {
    const [showLogin, setshowLogin] = useState(false)

    return (
        //         <View>
        // <Text>hello</Text>
        //         </View>
        <AppIntroSlider
            data={slides}
            onDone={() => navigation.navigate('HomeScreen')}
            renderItem={renderItem}
            renderNextButton={NextButton}
            bottomButton={MainStyle.buttonPurple}
            renderDoneButton={onDone}
        />
    )
    { MainStyle.bottomContainer }
}
const styles = StyleSheet.create({
    wrapper: {
        // flex: 1,
        // display:'flex',
        // marginTop: 35,
        // marginBottom: 20
    },
    render: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginBottom: 10
    },
    slide: {
        padding: 20,
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        // marginTop: 35,
        // marginBottom: 20        
    },
    text: {
        fontFamily: 'Roboto',
        color: '#444444',
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 35,
        marginTop: 50,
    },
    introImg: {
        width: 300,
        height: 300,
        // borderTopEndRadius: 300,
        resizeMode: 'stretch',
        // margin: 100,
        // width: Screenwidth,
        // height: Screenwidth,
        // marginHorizontal: 50,
        // padding: 100,
        // justifyContent: 'flex-start',
        // alignItems: 'center',
        // paddingBottom: 10,
        // marginBottom: 10,
    }

})