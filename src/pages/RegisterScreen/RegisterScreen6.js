import React, { useState, useRef } from 'react'
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
    ScrollView, Platform, KeyboardAvoidingView, Dimensions, Modal,
    ActivityIndicator
} from 'react-native';
import CameraScreen from './CameraScreen';
import Texinputreg from '/Qmonitest/src/components/TextinputReg'
import Textinputnum from '/Qmonitest/src/components/TextinputRegNum'
import MainStyle from '../../components/styles/MainStyle';
import Images from '../../constants/Images';
import RegPicker from '/Qmonitest/src/components/RegPicker'
import Icon from 'react-native-vector-icons/FontAwesome5';

const paddingHeight = Platform.OS == 'ios' ? 20 : -200;
const ScreenWidth = Dimensions.get("window").width;
const CB_ENABLED_IMAGE = Images.checked;
const CB_DISABLED_IMAGE = Images.unchecked;

export default function RegisterScreen6({ navigation }) {
    const [ChooseFamename, setChooseFamname] = useState('');
    const [ChooseFamenameerr, setChooseFamnameerr] = useState('');
    const [ChooseFamenameValidation, setChooseFamnameValidation] = useState(false);
    const [Famname, setFamname] = useState('');
    const [Famnameerr, setFamnameerr] = useState('');
    const [FamnameValidation, setFamnameValidation] = useState(false)
    const [FamPhoneNumber, setFamPhoneNumber] = useState('');
    const [FamPhoneNumbererr, setFamPhoneNumbereerr] = useState('');
    const [FamPhoneNumberValidation, setFamPhoneNumberValidation] = useState(false);
    const [isLoading, setisLoading] = useState(false);
    const [iduploadfront, setiduploadfront] = useState('');
    const [iduploadback, setidupliadback] = useState('');
    const [imageFront, setimageFront] = useState(null);
    const [imageBack, setimageBack] = useState(null);
    const [imageFrontLoading, setimageFrontLoading] = useState(false);
    const [imageBackLoading, setimageBackLoading] = useState(false);
    const [showCamera, setshowCamera] = useState(false);
    const [imageType, setimageType] = useState(null);
    const [mainValidation, setmainValidation] = useState(false)
    const jumpToNext = () => {
        if (FamnameValidation == true &&
            ChooseFamenameValidation == true &&
            FamPhoneNumberValidation == true) {
            showAlert();
        } else {
            let errors = '';
            errors += imageFront ? '' : `Нүүр зураг оруулна уу.\n`;
            errors += imageBack ? '' : `Арын зураг оруулна уу.\n`;
            errors += FamPhoneNumberValidation ? '' : setFamPhoneNumbereerr('Та утасны дугараа оруулна уу')
            errors += FamnameValidation ? '' : setFamnameerr(`Та заавал бөглөнө үү.`);
            errors += ChooseFamenameValidation ? '' : setChooseFamnameerr(`Та заавал бөглөнө үү`);
        }
    }
    const showAlert = () => {
        Alert.alert(
            'Санамж',
            `\nТаны оруулсан мэдээллийг гэрээ байгуулах үед дахин баталгаажуулах бөгөөд санаатайгаар буруу мэдээлэл оруулсан тохиолдолд гэрээ байгуулахгүй болохыг анхаарна уу.`,
            [
                { text: 'Буцах', style: 'cancel' },
                {
                    text: 'Үргэлжлүүлэх', onPress: () => {
                        navigation.navigate('SuccessScreen');
                    }, style: 'default'
                },
            ],
            { cancelable: false }
        )
    }
    const _cameraHandler = ({ data }) => {
        setshowCamera(false);
        switch (imageType) {
            case 'front':
                if (data != null) {
                    setimageFront(data)
                    setimageFrontLoading(false)
                    setisLoading(false)
                } else {
                    setimageFrontLoading(false)
                    setimageBack(null),
                        setisLoading(false)
                }
                break;
            case 'back':
                if (data != null) {
                    setimageBack(data),
                        setimageBackLoading(false)
                    setisLoading(false)
                } else {
                    setimageBackLoading(false),
                        setimageBack(null)
                    setisLoading(false)
                }
                break;
            default:
                break;
        }
    }
    const showCamera1 = (type) => {
        switch (type) {
            case 'front':
                setimageFrontLoading(true)
                setimageFront(null)
                setisLoading(true),
                    setshowCamera(true)
                setimageType(type);
                break;
            case 'back':
                setimageBackLoading(true)
                setimageBack(null);
                setisLoading(true),
                    setshowCamera(true)
                setimageType(type);
                break;
            default:
                break;
        };
    }
    const renderImagePickerBack = () => {
        if (imageBackLoading) {
            return (
                <TouchableOpacity style={MainStyle.uploading} >
                    <ActivityIndicator size="small" color="#f95e00" />
                    <Text style={[MainStyle.txtFormItemTitle, { marginTop: 5, fontSize: 12 }]}>Уншиж байна...</Text>
                </TouchableOpacity>
            );
        }
        if (imageBack) {
            return (
                <TouchableOpacity style={MainStyle.uploading} >
                    <View style={[successContent.iconBackground, { position: 'relative', }]}>
                        <Icon style={[successContent.icon, { position: 'absolute', zIndex: 999 }]} name="check" />
                    </View>
                </TouchableOpacity>
            );
        } else {
            return (
                <TouchableOpacity style={formList.uploadInput} onPress={() => showCamera1('back')}>
                    <Image source={Images.pictureloader}
                        style={formList.imageloader}
                    />
                    <Text style={MainStyle.txtFormItemTitle}>Ар тал</Text>
                </TouchableOpacity>
            );
        }
    }
    const renderImagePickerFront = () => {
        if (imageFrontLoading) {
            return (
                <TouchableOpacity style={[MainStyle.uploading, { marginRight: 15 }]} >
                    <ActivityIndicator size="small" color="#f95e00" />
                    <Text style={[MainStyle.txtFormItemTitle, { marginTop: 5, fontSize: 12 }]}>Уншиж байна...</Text>
                </TouchableOpacity>
            );
        }
        if (imageFront) {
            return (
                <TouchableOpacity style={[MainStyle.uploading, { marginRight: 15 }]} >
                    <View style={[formList.iconBackground, { position: 'relative', }]}>
                        <Icon style={[formList.icon, { position: 'absolute', zIndex: 999 }]} name="check" />
                    </View>
                </TouchableOpacity>
            );
        } else {
            return (
                <TouchableOpacity style={[formList.uploadInput, { marginRight: 15 }]} onPress={() => showCamera1('front')}>
                    <Image source={Images.pictureloader}
                        style={formList.imageloader}
                    />
                    <Text style={MainStyle.txtFormItemTitle}>Нүүр тал</Text>
                </TouchableOpacity>
            );
        }
    }
    return (
        <KeyboardAvoidingView style={MainStyle.mainContainerCenter} behavior="padding" keyboardVerticalOffset={paddingHeight} enabled>
            <View style={MainStyle.mainContainer}>
                <View style={[MainStyle.scrollContainer, { paddingTop: 20 }]}>
                    <ScrollView>
                        <Text style={MainStyle.headerText, { paddingStart: 25, marginBottom: 20 }}>Яаралтай үед холбоо барих хүн</Text>
                        <Texinputreg
                            title={'Таны юу болох?'}
                            onChangeText={text => {
                                let characterMn = /^[А-Я|Ё|Ө|Ү|а-я|ё|ө|ү|\- ]+$/;
                                text = text.trim();
                                if (text.length >= 2) {
                                    setChooseFamnameerr(null)
                                    setChooseFamnameValidation(true);
                                    setChooseFamname(text)
                                }
                                else {
                                    setChooseFamnameValidation(false);
                                    setChooseFamnameerr('Та заавал бөглнө үү')
                                }
                                if (text.length == 0) {
                                    setChooseFamnameValidation(false);
                                    setChooseFamnameerr(null)
                                }
                                setChooseFamname(text)
                            }
                            }
                            errortext={ChooseFamenameerr}
                        />
                        <Texinputreg
                            title={'Нэр'}
                            onChangeText={text => {
                                let characterMn = /^[А-Я|Ё|Ө|Ү|а-я|ё|ө|ү|\- ]+$/;
                                text = text.trim();
                                if (text.length >= 2) {

                                    setFamnameValidation(true);
                                    setFamnameerr(null)
                                }
                                else {
                                    setFamnameValidation(false);
                                    setFamnameerr('Та заавал бөглнө үү')
                                }
                                if (text.length == 0) {
                                    setFamnameValidation(false);
                                    setChooseFamnameerr(null)
                                }
                                setFamname(text)
                            }
                            }
                            errortext={Famnameerr}
                        />
                        <Textinputnum
                            title={'Утасны дугаар'}
                            onChangeText={text => {
                                if (text.length >= 2) {
                                    setFamPhoneNumberValidation(true);
                                    setFamPhoneNumbereerr(null)
                                } else {
                                    setFamPhoneNumberValidation(false);
                                    setFamPhoneNumbereerr('Та заавал бөглнө үү')
                                }
                                if (text.length == 0) {
                                    setFamPhoneNumberValidation(false);
                                    setFamPhoneNumbereerr(null)
                                }
                                setFamname(text)
                            }}
                            errortext={FamPhoneNumbererr}
                        />
                        <Text style={MainStyle.txtFormItemTitle, { paddingStart: 20, marginBottom: 10 }}>ИРГЭНИЙ ҮНЭМЛЭХНИЙ ЗУРАГ</Text>
                        <View style={[MainStyle.btnWidth50, MainStyle.formItem]}>
                            {renderImagePickerFront()}
                            {renderImagePickerBack()}
                        </View>
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
            <CameraScreen showCamera={showCamera} cameraHandler={_cameraHandler} imageType={imageType} cattype={null} />
        </KeyboardAvoidingView >
    );
}
const formList = StyleSheet.create({
    imageloader: {
        height: '50%',
        width: '50%',
    },
    uploadInput: {
        borderColor: '#ccc',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 50,
        paddingVertical: 20,
        height: 100,
        width: '50%'
    },
    touchable: {
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
        width: 22,
        height: 22,
        resizeMode: "contain"
    },
    toucText: {
        color: '#444444',
        fontWeight: '700',
        fontSize: 14,
    },
    iconBackground: {
        backgroundColor: '#1877b3',
        height: 40,
        width: 40,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
    },
    icon: {
        color: '#ffffff',
        fontSize: 16,
    },
});
