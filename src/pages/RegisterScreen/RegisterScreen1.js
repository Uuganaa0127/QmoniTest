import React, { useState } from 'react';
import Images from '../../constants/Images';
import {
    Image,
    Alert,
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Modal,
    TextInput,
    Platform
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Condition, { tocHandler } from '../ConditionModal';
import MainStyle from '../../components/styles/MainStyle';
import Loader from '../LoaderScreen';
import App from '../../App';
import AsyncStorage from '@react-native-community/async-storage';

const paddingHeight = Platform.OS == 'ios' ? 50 : 0;

export default function RegisterScreen1({ navigation, props }) {
    const [mobileNumbercheck, setmobileNumbercheck] = useState('');
    const [phoneValidate, setphoneValidate] = useState(false);
    const [textLength, settextLength] = useState(0);
    const [tocModalVisible, settocModalVisible] = useState(false);
    const [isTocValid, setisTocValid] = useState(false);
    const [isFocused, setisFocused] = useState(false);
    const [isLoading, setisLoading] = useState(false);
    const [tocHandler1, settocHandler1] = useState(false)
    const onFocusChange = () => {
        setisFocused(true);
    }
    const setModalVisible = (visible) => {
        settocModalVisible(visible);
    }
    const validate = async (text) => {
        settextLength(text.length);
        if (text.length == 8) {
            {
                setphoneValidate(true),
                    setmobileNumbercheck(text)
            }
        } else {
            (setphoneValidate(false))
        }
    }
    const sendConfirmationCode = () => {
        setisLoading(true)
        let data = {
            mobileNumbercheck: mobileNumbercheck,
            confirmationType: 1
        };
        // const BaseService.sendConfCode = (data)
        //     .then((responseJson) => {
        //         setisLoading(true);
        //         if (responseJson.status) {
        //             if (responseJson.status == 'Failed') {
        //                 let errors = '';
        //                 for (let i = 0; i < Object.keys(responseJson.msgList).length; i++) {
        //                     errors += responseJson.msgList[i].text ? responseJson.msgList[i].text : responseJson.msgList[i].code;
        //                 }
        //                 Helper.showSimpleAlert('Алдаа', errors);
        //             } else if (responseJson.status == 'Success') {
        //                 mobileNumHandler(mobileNumHandler);
        //                 indexHandler(1);
        //             }
        //         }
        //     })
        //     .catch((error) => {
        //         setisLoading(false);
        //         // Helper.showSimpleAlert('Алдаа', 'Бүртгүүлэхэд алдаа гарлаа та дахин оролдоно уу.')
        //         Helper.showSimpleAlert('Алдаа', error);
        //     });
    }
    /**
     * 
     */
    const tocHandler = (value) => {
        setModalVisible(false)
        setisTocValid(value)
        // settocHandler1(value)
    }
    const jumpToNext = () => {
        if (!phoneValidate) {
            Alert.alert('Алдаа', 'Утасны дугаар оруулна уу', [
                {
                    text: 'Хаах'
                }
            ]);
        }
        else {
            if (isTocValid) {
                sendConfirmationCode()
                navigation.navigate('RegisterScreen2', { mobileNumber: mobileNumbercheck })
            } else {
                Alert.alert('Анхааруулга', 'Үйлчилгээний нөхцөл зөвшөөрнө үү', [{ text: 'Хаах' }]);
            }

        }
    }
    return (
        <KeyboardAvoidingView style={MainStyle.mainContainerCenter} behavior="padding" keyboardVerticalOffset={paddingHeight} enabled>
            <View style={registerContent.container}>
                <View style={MainStyle.iconBack}>
                    <View style={MainStyle.iconBackground}>
                        <Image
                            resizeMode={'contain'}
                            style={registerContent.introImg}
                            source={Images.registericon}
                        ></Image>
                    </View>
                </View>
                <TextInput
                    onFocus={onFocusChange}
                    onChangeText={(text) => validate(text)}
                    keyboardType="numeric"
                    placeholder="Утасны дугаар"
                    maxLength={8}
                    style={(isFocused) ? MainStyle.inputBrBotFocused : MainStyle.inputBrBot}
                />
                <View style={{ paddingVertical: 35, alignItems: 'center', }}>
                    <Text style={MainStyle.txtWarnGray}>Энэ нь таны нэвтрэх нэр болно.</Text>
                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                        <Text style={MainStyle.txtPurple} >Үйлчилгээний нөхцөл</Text>
                    </TouchableOpacity>
                </View>
                <View style={MainStyle.btnContainer}>
                    <TouchableOpacity style={MainStyle.buttonPurple} onPress={() => jumpToNext()}>
                        <Text style={MainStyle.btnTextLight} >Дараах</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Modal
                animationType='slide'
                transparent={true}
                visible={tocModalVisible}
                onRequestClose={() => { console.log('Modal closed'); }}>
                <View style={{ height: '100%', width: '100%' }}>
                    <View style={[MainStyle.headerContainer, (Platform.OS == 'ios') ? { height: 70, paddingTop: 20 } : {}]}>
                        <TouchableOpacity
                            style={MainStyle.headerLeft}
                            onPress={() => settocModalVisible(false)}>
                            <Image style={registerContent.gobackarrow} source={Images.gobackarrow} />
                            {/* < Icon name="arrow-left" style={MainStyle.headerText} /> */}
                        </TouchableOpacity>
                        <View style={MainStyle.headerCenter}>
                            <Text style={MainStyle.headerText}>{'ҮЙЛЧИЛГЭЭНИЙ НӨХЦӨЛ'}</Text>
                        </View>
                        <View style={MainStyle.headerRight}>
                        </View>
                    </View>
                    <Condition
                        tocHandler={tocHandler}
                    />
                </View>
            </Modal >
            {/* </View> */}
        </KeyboardAvoidingView >
    );
}

const registerContent = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    introImg: {
        alignItems: 'center',
        height: 100,
        width: 100
    },
    gobackarrow: {
        height: 20,
        width: 20,
        margin: 5,
        // marginBottom: 10
        // paddingBottom: 10,
        // padding: 10
        // color: '#444444',
        // fontWeight: '700',
        // fontSize: 14,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});