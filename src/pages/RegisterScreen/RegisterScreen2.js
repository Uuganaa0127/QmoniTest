import React, { useState, useRef } from 'react';
import {
    Image,
    Alert,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Platform, Keyboard, KeyboardAvoidingView
} from 'react-native';
import Images from '/Qmonitest/src/constants/Images';
import MainStyle from '../../components/styles/MainStyle';
import Loader from '../../components/Loader';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
const paddingHeight = Platform.OS == 'ios' ? 50 : -200;

export default function RegisterScreen2({ props, navigation, route }) {
    const { mobileNumbercheck } = route.params;
    const [code, setcode] = useState('');
    const [confirmcode, setconfirmcode] = useState('');
    const [confirmcodeValidate, setconfirmcodeValidate] = useState(false);
    const [isLoading, setisLoading] = useState(false);
    const [mobileNumber, setmobileNumber] = useState(mobileNumber)
    const pinInput = useRef(null);
    const _checkCode = (confirmcode) => {
        Keyboard.dismiss();
        if (confirmcode.length < 4) {
            pinInput.current.shake()
                .then(() =>
                    setconfirmcode('')
                );
        }
    }
    const validate = async (text) => {
        setconfirmcodeValidate(text.length) == 4 ? true : false,
            setconfirmcode(text)
    }
    const confirm = () => {
        Keyboard.dismiss();
        navigation.navigate('RegisterScreen3', { mobileNumber: mobileNumbercheck })
        let data = {
            'mobileNumber': mobileNumbercheck,
            'confirmationCode': confirmcode,
        };
    }
    // BaseService.verifyMobile(data)
    //   .then((responseJson) => {
    //     if (responseJson.status && responseJson.status == 'Failed') {
    //       let errors = '';
    //       for (let i = 0; i < Object.keys(responseJson.msgList).length; i++) {
    //         errors += responseJson.msgList[i].text ? responseJson.msgList[i].text : responseJson.msgList[i].code;
    //       }
    //       Helper.showSimpleAlert('Алдаа', errors);
    //     } else if (responseJson.status == 'Success') {
    //       this.props.indexHandler(2);
    //     }
    //   })
    //   .catch((error) => {
    //     Helper.showSimpleAlert('Алдаа', 'Алдаа гарлаа та дахин оролдоно уу.')
    //   });
    // }
    const resendCode = () => {
        setisLoading(true);
        let data = {
            'mobileNumber': mobileNumbercheck,
            'confirmationType': '1'
        };
        //   BaseService.sendConfCode(data)
        //     .then((responseJson) => {
        //       this.setState({ isLoading: false });
        //       if (responseJson.status) {
        //         if (responseJson.status == 'Failed') {
        //           let errors = '';
        //           for (let i = 0; i < Object.keys(responseJson.msgList).length; i++) {
        //             errors += responseJson.msgList[i].text ? responseJson.msgList[i].text : responseJson.msgList[i].code;
        //           }
        //           Helper.showSimpleAlert('Алдаа', errors);
        //         } else if (responseJson.status == 'Success') {
        //           Helper.showSimpleAlert('Амжилттай', 'Амжилттай илгээлээ');
        //         }
        //       }
        //     })
        //     .catch((error) => {
        //       setisLoading(false);
        //       // this.setState({ isLoading: false });
        //       // Helper.showSimpleAlert('Алдаа', 'Бүртгүүлэхэд алдаа гарлаа та дахин оролдоно уу.')
        //       Helper.showSimpleAlert('Алдаа', error);
        //     });
    }
    const jumpToNext = () => {
        if (!confirmcodeValidate) {
            Alert.alert('Алдаа', 'Баталгаажуулах дугаараа оруулна уу.', [
                {
                    text: 'Хаах'
                }
            ]);
        }
        else {
            confirm();
        };
    }

    return (
        <KeyboardAvoidingView style={MainStyle.mainContainerCenter} behavior="padding" keyboardVerticalOffset={paddingHeight} enabled>
            {/* <Loader isLoading={isLoading} /> */}
            <View style={registerContent.container}>
                <View style={MainStyle.iconBack}>
                    <View style={MainStyle.iconBackground}>
                        <Image source={Images.registercodeico}
                            style={registerContent.images}
                        />
                    </View>
                </View>
                <View style={registerContent.inputContainer}>
                    <SmoothPinCodeInput
                        cellStyle={{
                            borderBottomWidth: 2,
                            borderColor: '#c5ddec',
                        }}
                        cellStyleFocused={{
                            borderColor: '#1877b3',
                        }}
                        codeLength={4}
                        ref={pinInput}
                        value={confirmcode}
                        onTextChange={confirmcode => validate(confirmcode)}
                        onFulfill={_checkCode}
                    />
                </View>
                <View style={registerContent.conditionContainer}>
                    <Text style={MainStyle.txtWarnGray}>Баталгаажуулах код ирсэнгүй?</Text>
                    <TouchableOpacity onPress={() => resendCode()}><Text style={MainStyle.txtPurple} >Дахин илгээх</Text></TouchableOpacity>
                </View>
                <View style={MainStyle.btnContainer}>
                    <TouchableOpacity style={MainStyle.buttonPurple} onPress={() => jumpToNext()}>
                        <Text style={MainStyle.btnTextLight} >Баталгаажуулах</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}


const registerContent = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    inputContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    conditionContainer: {
        paddingVertical: 35,
        alignItems: 'center',
    },
    images: {
        height: 100,
        width: 100,
        resizeMode: "contain",
    }
});