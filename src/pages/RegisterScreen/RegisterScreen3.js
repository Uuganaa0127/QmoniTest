import React, { useState } from 'react'
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Alert,
    // Picker,
    TouchableOpacity,
    ScrollView, Platform, KeyboardAvoidingView, Dimensions
} from 'react-native';
import Texinputreg from '/Qmonitest/src/components/TextinputReg'
import Textinputnum from '/Qmonitest/src/components/TextinputRegNum'
import Icon from 'react-native-vector-icons/FontAwesome5';
import MainStyle from '../../components/styles/MainStyle';
import Images from '../../constants/Images';


const paddingHeight = Platform.OS == 'ios' ? 20 : -200;
const ScreenWidth = Dimensions.get("window").width;
const CB_ENABLED_IMAGE = Images.checked;
const CB_DISABLED_IMAGE = Images.unchecked;

export default function RegisterScreen3({ navigation, route }) {
    // const { mobileNumbercheck } = route.params;
    const [familyName, setfamilyName] = useState('');
    const [lastName, setlastName] = useState('');
    const [firstName, setfirstName] = useState('');
    const [familyNameValidation, setfamilyNameValidation] = useState(false);
    const [lastNameValidation, setlastNameValidation] = useState(false);
    const [firstNameValidation, setfirstNameValidation] = useState(false);
    const [mainValidation, setmainValidation] = useState(false);
    const [mobilenumber, setmobileNumber] = useState('');
    const [mobilenumbervalidation, setmobileNumbervalidation] = useState(false);
    const [errorReg, seterrorReg] = useState('')
    const [errorFam, seterrorFam] = useState('');
    const [errorLas, seterrorLas] = useState('');
    const [errorFir, seterrorFir] = useState('');
    const [Registernum, setRegisternum] = useState('');
    const [RegisternumValidation, setRegisternumValidation] = useState(false);
    const [errormob, seterrormob] = useState('');
    const jumpToNext = () => {
        if (familyNameValidation == true &&
            lastNameValidation == true &&
            firstNameValidation == true &&
            mobilenumbervalidation == true
            && RegisternumValidation == true) {
            navigation.navigate('RegisterScreen4')
            //     setmainValidation(true)
            // }
            // else { setmainValidation(false) }
            // if (!mainValidation) {

            // Alert.alert('Алдаа', errors, [{ text: 'ХААХ' }]
            // );
            // seterrortext(errors);
            // changeborder;
        } else {
            let errors = '';
            errors = mobilenumbervalidation ? '' : seterrormob('Та утасны дугараа оруулна уу')
            errors = familyNameValidation ? '' : seterrorFam(`Ургын овгоо оруулна уу.`);
            errors = lastNameValidation ? '' : seterrorLas(`Овгоо оруулна уу.`);
            errors = firstNameValidation ? '' : seterrorFir(`Нэрээ оруулна уу.`);

            //Check if user is in valid age
            // let reg = reg1 + reg2 + register;
            // BaseService.checkRD(reg)
            //     .then((responseJson) => {
            //         console.warn(responseJson);
            //         if (responseJson.status && responseJson.status == 'Success') {
            //             let age = responseJson.value;
            //             if (age >= 21 && age <= 55) {
            //                 this.props.page3Handler(this.state.familyName, this.state.lastName, this.state.firstName,
            //                     this.state.password, this.state.cpassword, this.state.reg1, this.state.reg2, this.state.register,
            //                     this.state.email, this.state.famMemberCount, this.state.famMemberIncomeCount, this.state.isMarried);
            //             } else {
            //                 Helper.showSimpleAlert('Уучлаарай', 'Таныг бүртгэх боломжгүй байна.');
            //             }
            //         } else {
            //             Helper.showSimpleAlert('Алдаа', 'Регистрийн дугаар алдаатай.');
            //         }
            //     })
            //     .catch((error) => {
            //         Helper.showSimpleAlert('Уучлаарай', 'Таныг бүртгэх боломжгүй байна. Та дахин оролдоно уу.');
            //     });
        }
    }
    return (
        <KeyboardAvoidingView style={MainStyle.mainContainerCenter} behavior="padding" keyboardVerticalOffset={paddingHeight} enabled>
            <View style={MainStyle.mainContainer}>
                <View style={[MainStyle.scrollContainer]}>
                    <ScrollView>
                        <Textinputnum
                            title={'Утасны дугаар'}
                            onChangeText={text => {
                                if (text.trim.length !== null && text.length >= 8) {
                                    seterrormob(''),
                                        setmobileNumbervalidation(true);
                                } else {
                                    setmobileNumbervalidation(false),
                                        seterrormob('Та утасны дугаараа оруулна уу');
                                }
                                setmobileNumber(text)
                            }
                            }
                            mobileNumbervalidation={mobilenumbervalidation}
                            errortext={errormob}
                            keyboardType='number-pad'
                        />
                        <Texinputreg
                            title={'Ургийн овог'}
                            onChangeText={text => {
                                let characterMn = /^[А-Я|Ё|Ө|Ү|а-я|ё|ө|ү|\- ]+$/;
                                text = text.trim();
                                if (text.length >= 2) {
                                    setfamilyNameValidation(true),
                                        seterrorFam(null);
                                }
                                else {
                                    setfamilyNameValidation(false);
                                    seterrorFam('Ургын овгоо оруулна у');
                                }
                                if (!characterMn.test(text)) {
                                    setfamilyNameValidation(false);
                                    seterrorFam('Та криллэр бичнэ үү');
                                }
                                setfamilyName(text)
                            }}

                            errortext={errorFam}
                        />
                        <Texinputreg
                            title={'Овог'}
                            onChangeText={text => {
                                let characterMn = /^[А-Я|Ё|Ө|Ү|а-я|ё|ө|ү|\- ]+$/;
                                text = text.trim();
                                if (text.length >= 2) {
                                    setlastNameValidation(true),
                                        seterrorLas(null);
                                }
                                else {
                                    setlastNameValidation(false);
                                    seterrorLas('Та нэрээ оруулна уу');
                                }
                                if (!characterMn.test(text)) {
                                    setlastNameValidation(false);
                                    seterrorLas('Та криллэр бичнэ үү');
                                }
                                setlastName(text)
                            }}
                            errortext={errorLas}
                        />
                        <Texinputreg
                            title={'Нэр'}
                            onChangeText={text => {
                                let characterMn = /^[А-Я|Ё|Ө|Ү|а-я|ё|ө|ү|\- ]+$/;
                                text = text.trim();
                                if (text.length >= 2) {
                                    setfirstNameValidation(true),
                                        // setfamilyName(text),
                                        seterrorFir(null);
                                    // () => { validateMain(); };
                                }
                                else {
                                    setfirstNameValidation(false);
                                    // setfamilyName(text);
                                    seterrorFir('овгоо оруулна у');
                                }
                                if (!characterMn.test(text)) {
                                    setfirstNameValidation(false);
                                    seterrorFir('Та криллэр бичнэ үү');
                                }
                                setfirstName(text)
                            }}
                            errortext={errorFir}
                        />
                        <Texinputreg
                            title={'Регистрийн дугаар'}
                            onChangeText={text => {
                                let characterMn = /^[А-Я|Ё|Ө|Ү|а-я|ё|ө|ү|\- ]+$/;
                                text = text.trim();
                                if (text.length >= 2 && characterMn.test(text)) {
                                    setRegisternumValidation(true),
                                        seterrorReg(null);
                                }
                                else {
                                    setRegisternumValidation(false);
                                    seterrorReg('Регистрийн дугаараа оруулна уу');
                                }
                                setRegisternum(text)
                            }}
                            errortext={errorReg}
                        />

                        <View style={MainStyle.bottomContainer}>
                            <View style={MainStyle.btnContainer}>
                                <TouchableOpacity style={MainStyle.buttonPurple} onPress={() => jumpToNext()}>
                                    <Text style={MainStyle.btnTextLight} >Дараах</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </ScrollView>
                </View>
            </View >
        </KeyboardAvoidingView >
    );
}
const formList = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        width: '100%'
    },
    errorTextStyle: {
        color: 'red',
        textAlign: 'center',
        fontSize: 14,
    },
    bordervalid: {
        borderWidth: 0,
        borderColor: 'grey'
    },
    borderinvalid: {
        borderWidth: 1,
        borderColor: 'red'
    }
});