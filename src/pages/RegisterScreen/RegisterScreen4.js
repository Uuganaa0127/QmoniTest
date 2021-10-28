import React, { useState } from 'react'
import {
    StyleSheet,
    Text,
    CheckBox,
    TextInput,
    View,
    Alert,
    Image,
    // Picker,
    TouchableOpacity,
    ScrollView, Platform, KeyboardAvoidingView, Dimensions, Modal
} from 'react-native';
import Texinputreg from '/Qmonitest/src/components/TextinputReg'
import Textinputnum from '/Qmonitest/src/components/TextinputRegNum'
import Icon from 'react-native-vector-icons/FontAwesome5';
import MainStyle from '../../components/styles/MainStyle';
import Images from '../../constants/Images';
import RegPicker from '/Qmonitest/src/components/RegPicker'
import Modalpicker from '/Qmonitest/src/components/Modalpicker'
import CheckboxReg from '/Qmonitest/src/components/CheckboxReg'

const paddingHeight = Platform.OS == 'ios' ? 20 : -200;
const ScreenWidth = Dimensions.get("window").width;
const CB_ENABLED_IMAGE = Images.checked;
const CB_DISABLED_IMAGE = Images.unchecked;

export default function RegisterScreen4({ navigation }) {

    const [housedetails, sethousedetails] = useState('Орон сууц');
    const [housedetailserror, sethousedetailserror] = useState('');
    const [housedetailsvalidation, sethousedetailsvalidation] = useState(false);
    const [checkifyourhouse, setcheckifyourhouse] = useState('Өөрийн');
    const [checkifyourhouseerror, setcheckifyourhouseerror] = useState('');
    const [checkifyourhousevalidation, setcheckifyourhousevalidation] = useState('');
    const [checkifyourhousevisibility, setcheckifyourhousevisibility] = useState(false)
    const [isMarried, setismerried] = useState(false);
    const [isemarriederror, setisMarriederror] = useState('');
    const [isMarriedvalidation, setisMarriedvalidation] = useState(false);
    const [iseCheckedTax, setisCheckedTax] = useState(false);
    const [iseCheckedTaxerror, setisCheckedTaxerror] = useState('');
    const [iseCheckedTaxValidation, setisCheckedTaxValidation] = useState(false)
    const [companyname, setcompanyname] = useState('');
    const [companynamevalidation, setcompanynamevalidation] = useState(false);
    const [companynameerror, setcompanynameerror] = useState('');
    const [companynumber, setcompanynumber] = useState('');
    const [companynumbererror, setcompanynumbererror] = useState('');
    const [companynumbervalidation, setcompanynumbervalidation] = useState(false);
    const [ModalVisibilityapartdata, setModalVisibilityapartdata] = useState("Орон Сууц");
    const [ModalVisibilityapart, setModalVisibilityapart] = useState(false);
    // Дараагийн хуудас руу шилэжих
    const jumpToNext = () => {
        if (companynamevalidation == true &&
            companynumbervalidation == true &&
            iseCheckedTaxValidation == true &&
            isMarriedvalidation == true) {
            navigation.navigate('RegisterScreen5');
        } else {
            let errors = '';
            errors += companynamevalidation ? '' : setcompanynameerror(`Та байгуллагын нэрээ оруулна уу`);
            errors += companynumbervalidation ? '' : setcompanynumbererror(`Та байгуллагын дугаараа оруулна уу.`);
            errors += iseCheckedTaxValidation ? '' : setisCheckedTaxerror(`Та заавал сонгоно уу.`);
            errors += isMarriedvalidation ? '' : setisMarriederror(`Та заавал сонгоно уу.`);
            errors = housedetailsvalidation ? '' : sethousedetailserror('Та заавал сонгоно уу.');
            errors = checkifyourhousevalidation ? '' : setcheckifyourhouseerror('Та заавал сонгоно уу.');
        }
    }
    return (
        <KeyboardAvoidingView style={MainStyle.mainContainerCenter} behavior="padding" keyboardVerticalOffset={paddingHeight} enabled>
            <View style={MainStyle.mainContainer}>
                <View style={[MainStyle.scrollContainer, { paddingTop: 20 }]}>
                    <ScrollView>
                        <Modalpicker
                            modaltitle={housedetails}
                            title={'Өөрийн амьдарч буй сууц '}
                            onPress={() => {
                                setModalVisibilityapart(true)
                            }}
                            errortext={housedetailserror}
                        >
                        </Modalpicker>
                        <RegPicker
                            cancelOnPress={() => {
                                setModalVisibilityapart(false)
                            }}
                            isShow={ModalVisibilityapart}
                            onPress={item => {
                                setModalVisibilityapart(false);
                                sethousedetails(item);
                                sethousedetailsvalidation(true);
                            }}
                        />
                        <Modalpicker
                            modaltitle={checkifyourhouse}
                            title={'Сууц өөрийн эсэх?'}
                            onPress={() => {
                                setcheckifyourhousevisibility(true)
                            }}
                            errortext={checkifyourhouseerror}
                        >
                        </Modalpicker>
                        <RegPicker
                            cancelOnPress={() => {
                                setcheckifyourhousevisibility(false)
                            }}
                            isShow={checkifyourhousevisibility}
                            onPress={item => {
                                setcheckifyourhousevisibility(false);
                                setcheckifyourhouse(item);
                                setcheckifyourhousevalidation(true);
                            }}
                        />
                        <View style={MainStyle.inputSection}>
                            <CheckboxReg
                                title={'Гэрлэсэн эсэх?'}
                                errortext={isemarriederror}
                                onPress={() => {
                                    setismerried(!isMarried);
                                    if (!isMarried) {
                                        setisMarriedvalidation(!isMarried);
                                        setisMarriederror(null)
                                    } else {
                                        setisMarriederror('Та заавал сонгоно уу')
                                    }
                                }}
                                source={isMarried ? Images.checked : Images.unchecked}
                            />

                            <CheckboxReg
                                title={'НДШ төлдөг эсэх?'}
                                errortext={iseCheckedTaxerror}
                                onPress={() => {
                                    setisCheckedTax(!iseCheckedTax);
                                    if (!iseCheckedTax) {
                                        setisCheckedTaxValidation(!iseCheckedTax)
                                        setisCheckedTaxerror(null)
                                    } else {
                                        setisCheckedTaxerror('Та заавал сонгоно уу')
                                    }
                                }}
                                source={
                                    iseCheckedTax ? Images.checked : Images.unchecked
                                }
                            />
                        </View>
                        <Texinputreg
                            title={'Байгууллагын нэр'}
                            onChangeText={text => {
                                let characterMn = /^[А-Я|Ё|Ө|Ү|а-я|ё|ө|ү|\- ]+$/;
                                text = text.trim();
                                if (text.length >= 2) {
                                    setcompanynamevalidation(true),
                                        setcompanynameerror(null);
                                }
                                else {
                                    setcompanynamevalidation(false);
                                    setcompanynameerror('Та байгууллагын нэрээ оруулна уу');
                                }
                                if (!characterMn.test(text)) {
                                    setcompanynamevalidation(false);
                                    setcompanynameerror('Та байгууллагын нэрээ криллэр оруулна уу');
                                }
                                setcompanyname(text)
                            }
                            }
                            errortext={companynameerror}
                        />
                        <Texinputreg
                            title={'Байгууллагын дугаар'}
                            onChangeText={text => {
                                let characterMn = /^[А-Я|Ё|Ө|Ү|а-я|ё|ө|ү|\- ]+$/;
                                text = text.trim();
                                if (text.length >= 2) {
                                    setcompanynumbervalidation(true),
                                        setcompanynumbererror(null);
                                }
                                else {
                                    setcompanynumbervalidation(false),
                                        setcompanynumbererror('Та байгууллагын дугаараа оруулна уу');
                                }
                                setcompanynumber(text)
                            }
                            }
                            errortext={companynumbererror}
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
    touchable: {
        // marginRight: 20,
        marginLeft: 20,
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'center',
        paddingStart: 10,
        // paddingEnd: 50,
        paddingRight: 10,
        justifyContent: 'flex-start',
        height: 40,
        backgroundColor: '#fafafa',
        // borderRadius: 20,
        // color: '#999999',
        // borderColor: '#912',
        marginBottom: 10
    },
    txtFormItemTitle: {
        justifyContent: 'center',
        paddingStart: 20,
        marginBottom: 10
    },

    container: {
        paddingHorizontal: 20,
        width: '100%'
    },
    errorTextStyle: {
        color: 'red',
        textAlign: 'center',
        fontSize: 14,
    },
    image: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        position: 'absolute', top: 10, left: 350, right: 0, bottom: 0, alignItems: 'center',
        width: 22,
        height: 22,
        resizeMode: "contain"
    },
    toucText: {
        color: '#444444',
        fontWeight: '700',
        fontSize: 14,
    },
});