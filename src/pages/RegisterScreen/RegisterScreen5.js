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
import MainStyle from '../../components/styles/MainStyle';
import Images from '../../constants/Images';
import RegPicker from '/Qmonitest/src/components/RegPicker'
import Modalpicker from '/Qmonitest/src/components/Modalpicker'
const paddingHeight = Platform.OS == 'ios' ? 20 : -200;
const ScreenWidth = Dimensions.get("window").width;
const CB_ENABLED_IMAGE = Images.checked;
const CB_DISABLED_IMAGE = Images.unchecked;

export default function RegisterScreen5({ navigation }) {
    const [City, setCity] = useState('Улаанбаатар');
    const [CityVisible, setCityVisible] = useState(false);
    const [CityValidation, setCityValidation] = useState(false);
    const [CityError, setCityError] = useState('');
    const [District, setDistrict] = useState('Хан-Уул дүүрэг');
    const [DistrictVisible, setDistrictVisible] = useState(false);
    const [DistrictValidation, setDistrictValidation] = useState(false);
    const [DistrictError, setDistrictError] = useState('')
    const [Street, setStreet] = useState('15');
    const [StreetValidation, setStreetValidation] = useState(false);
    const [StreetError, setStreetError] = useState('');
    const [StreetVisible, setStreetVisible] = useState(false);
    const [Address, setAddress] = useState('');
    const [AdressError, setAddressError] = useState('')
    const [AddressValidation, setAddressValidation] = useState(false);
    const [mainValidation, setmainValidation] = useState(false);
    const jumpToNext = () => {
        if (CityValidation == true &&
            DistrictValidation == true &&
            StreetValidation == true &&
            AddressValidation == true) {
            navigation.navigate('RegisterScreen6');
        } else {

            let errors = '';
            errors += CityValidation ? '' : setCityError(`Та заавал сонгоно уу.`);
            errors += StreetValidation ? '' : setStreetError(`Та заавал сонгоно уу.`);
            errors += AddressValidation ? '' : setAddressError(`Та бөглөнө үү.`);
            errors += DistrictValidation ? '' : setDistrictError(`Та заавал сонгоно уу.`);
        }
    }

    return (
        <KeyboardAvoidingView style={MainStyle.mainContainerCenter} behavior="padding" keyboardVerticalOffset={paddingHeight} enabled>
            <View style={MainStyle.mainContainer}>
                <View style={[MainStyle.scrollContainer, { paddingTop: 20 }]}>
                    <ScrollView>
                        <Modalpicker
                            modaltitle={City}
                            title={'Айман/Хот'}
                            onPress={() => {
                                setCityVisible(true)
                            }}
                            errortext={CityError}
                        />
                        <RegPicker
                            isShow={CityVisible}
                            onPress={item => {
                                setCityVisible(false)
                                setCity(item)
                                setCityValidation(true)
                            }} />
                        <Modalpicker
                            modaltitle={District}
                            title={'Сум /Дүүрэг'}
                            onPress={() => {
                                setDistrictVisible(true)
                            }}
                            errortext={DistrictError}
                        />
                        <RegPicker
                            cancelOnPress={() => {
                                setDistrictVisible(false)
                            }}
                            isShow={DistrictVisible}
                            onPress={item => {
                                setDistrictVisible(false);
                                setDistrict(item);
                                setDistrictValidation(true);
                            }} />
                        <Modalpicker
                            modaltitle={Street}
                            title={'Баг /Хороо'}
                            onPress={() => {
                                setStreetVisible(true)
                            }}
                            errortext={StreetError}
                        />
                        <RegPicker
                            cancelOnPress={() => {
                                setStreetVisible(false)
                            }}
                            isShow={StreetVisible}
                            onPress={item => {
                                setStreetVisible(false)
                                setStreet(item);
                                setStreetValidation(true);
                            }} />
                        <Texinputreg
                            title={'Байр тоот'}
                            onChangeText={text => {
                                let characterMn = /^[А-Я|Ё|Ө|Ү|а-я|ё|ө|ү|\- ]+$/;
                                text = text.trim();
                                if (text.length >= 2) {
                                    setAddressValidation(true),
                                        setAddressError(null);
                                }
                                else {
                                    setAddressValidation(false);
                                    setAddressError('Та хаягаа оруулна уу');
                                }
                                if (text.length == 0) {

                                }
                                setAddress(text)
                            }
                            }
                            errortext={AdressError}
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
        paddingStart: 10,
        paddingRight: 10,
        justifyContent: 'flex-start',
        height: 40,
        backgroundColor: '#fafafa',
        marginBottom: 10
    },
    container: {
        alignItems: 'center',
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
        width: 17,
        height: 17,
        resizeMode: "contain"
    },
    toucText: {
        color: '#444444',
        fontWeight: '700',
        fontSize: 14,
    },
    // option: {
    //     alignItems: 'flex-start'
    // },
    // text: {
    //     margin: 20,
    //     fontSize: 20,
    //     fontWeight: "bold"
    // },
});