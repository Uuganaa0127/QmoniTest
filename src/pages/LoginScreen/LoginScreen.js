import React, { useState, useEffect } from 'react'
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
    Keyboard,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    Alert,
    Dimensions,
    PermissionsAndroid
} from 'react-native'
import { useIsFocused } from '@react-navigation/native';
import OneSignal from 'react-native-onesignal';
import TouchID from 'react-native-touch-id';
import Images from '/Qmonitest/src/constants/Images'
import MainStyle from '../../components/styles/MainStyle';
import Checkbox from '/Qmonitest/src/components/CheckBox'
import LoaderScreen from '../LoaderScreen';
import AsyncStorage from '@react-native-community/async-storage';
import Button from '/Qmonitest/src/components/ButtonLogin'

const paddingHeight = Platform.OS == 'ios' ? 50 : 0;
const { height } = Dimensions.get('window');
const headerContainerHeight = (height >= 812 && Platform.OS == 'ios') ? 80 : 60;
const headerContainerPadding = (height >= 812 && Platform.OS == 'ios') ? 25 : 15;
const optionalConfigObject = {
    cancelText: 'Болих',
    title: 'Санамж',
    sensorDescription: 'Хуруу мэдрэгч дээр хуруугаа уншуулна уу.',
    sensorErrorDescription: 'Алдаа, Дахин уншуулна уу.',
    color: '#808080',
    imageErrorColor: 'transparent',
    imageColor: 'transparent'
};
const touchIdText = 'Хуруугаа уншуулна уу.';
async function requestLocationPermission() {
    if (Platform.OS === 'ios') {
        return true;
    } else {
        return false;
    }
}
export default function LoginScreen({ navigation }) {
    const isFocused = useIsFocused();
    const [isRememberUser, setisRememberUser] = useState(false);
    const [isLoggedIn, setisLoggedin] = useState(false);
    const [isLoading, setisLoading] = useState(false);
    const [canLogin, setcanLogin] = useState(true);
    const [usernameInput, setusernameInput] = useState(null);
    const [passwordInput, setpasswordInput] = useState(null);
    const [accessToken, setaccessToken] = useState(null);
    const [userId, setuserID] = useState(null);
    const [latitude, setlatitude] = useState('123');
    const [longtitude, setlongtitude] = useState('123');
    const [oneSignalId, setoneSingalId] = useState(null);
    const [userFingerPrint, setuserFingerPrint] = useState(false);
    const [canShowFingerPrint, setcanShowFingerPrint] = useState(false);
    const [fingerPrintSupported, setfingerPrintSupported] = useState(false);
    const [fingerPrintError, setfingerPrintError] = useState('');
    const [fingerPrintType, setfingerPrintType] = useState('');
    const [fingerPrintInput, setfingerPrintInput] = useState('');
    const [fingerPrintPass, setfingerPrintPass] = useState('');
    const [fingerText, setfingerText] = useState('');
    const [biometryType, setbiometryType] = useState(false);
    useEffect(() => {
        const effect = () => {
            TouchID.isSupported()
                .then(res => {
                    console.log('res', res);
                    if (res === 'FaceID') {
                        setfingerPrintType('FaceID');
                        setfingerPrintSupported(true);
                        setfingerText('Цаашид FaceID-р нэвтрэх');
                    } else if (res === 'TouchID') {
                        setfingerPrintType('TouchID');
                        setfingerPrintSupported(true);
                        setfingerText('Цаашид хурууны хээгээр нэвтрэх');
                    } else if (res === true) {
                        setfingerPrintSupported(true);
                    }
                })
                .catch(error => {
                    setfingerPrintSupported(false);
                });
        };
        effect();
        // getFinger();
        // isFingerPrintSaved();
        return () => {
            setfingerPrintSupported(true);
            setisLoading(false);
            setbiometryType(null);
            // setbiometryConfirm(false);
        };
    }, [isFocused]);
    const pressHandler = () => {
        TouchID.authenticate('Хурууны хээгээ уншуулна уу', optionalConfigObject)
            .then(async success => {
                try {
                    Keyboard.dismiss();
                    setisLoading(true);
                    // AsyncStorage.getItem('fp_username').then(username => {
                    //     if (username) {
                    //         AsyncStorage.getItem('fp_password').then(async password => {
                    //             if (password) {
                    //                 try {
                    //                     await login(
                    //                         '/oauth/token',
                    //                         username,
                    //                         password,
                    //                         'second',
                    //                         '',
                    //                     );
                    //                 } catch (e) {
                    //                     setisLoading(false);
                    //                     setalertType('warning');
                    //                     setalertTitle('Анхааруулга');
                    //                     setalertMessage(e);
                    //                     setalertIsShow(true);
                    //                     setpassword(null);
                    //                 }
                    //             }
                    //         });

                    // )};
                } catch (e) {
                    setisLoading(false);
                    setalertType('warning');
                    setalertTitle('Анхааруулга');
                    setalertMessage(e);
                    setalertIsShow(true);
                    setpassword(null);
                }
            })
            .catch(error => {
                console.log(error);
                // alert('Authentication Failed');
            });
    };
    const renderLoginBtn = () => {
        if (canLogin) {
            return (
                <View style={MainStyle.btnContainer, { flexDirection: 'row' }}>
                    <TouchableOpacity style={[formList.buttonPurple, { marginBottom: 0 }]} >
                        <Text style={MainStyle.btnTextLight}>Нэвтрэх</Text>
                        <TouchableOpacity style={MainStyle.btnFinger} onPress={() => showFingerprint()}>
                            {renderTouchIdBtn()}
                        </TouchableOpacity>
                    </TouchableOpacity>
                    <View style={MainStyle.rightCenter}>
                        <Button
                            image={Images.finger}
                            imageStyle={formList.imageStyle}
                            onPress={() => {
                                pressHandler();
                            }}
                        />
                    </View>
                </View>
            );
        } else {
            return (
                <TouchableOpacity style={[MainStyle.buttonPurple, { marginBottom: 30 }]} disabled={true}>
                    <Text style={MainStyle.btnTextLight}>Нэвтрэх</Text>
                </TouchableOpacity>
            );
        }
    }
    const showFingerprint = () => {
        TouchID.authenticate(touchIdText, touchIdConfig)
            .then(() => {
                setlogin(true);
            })
            .catch((error) => {
                setfingerPrintError('exception' + error),
                    setfingerPrintCancelled(true)
            })
    }
    const renderTouchIdBtn = () => {
        if (fingerPrintType == 'TouchID') {
            return (
                <Image style={login.logoImage} source={Images.finger} />
            );
        } else if (fingerPrintType == 'FaceID') {
            return (
                <Image style={login.logoImage} source={Images.faceid} />
            );
        }
        return null;
    }

    return (
        <View style={formList.Mainconatiner}>
            <LoaderScreen isLoading={isLoading} />
            <View style={{ width: 30, height: 30 }}>
                <TouchableOpacity
                    style={login.backbutn}
                    onPress={() => navigation.navigate('HomeScreen')}>
                    <Image
                        source={Images.gobackarrow}
                        style={[formList.headerText,]} />
                </TouchableOpacity>
            </View>
            <KeyboardAvoidingView style={login.container} behavior="padding" keyboardVerticalOffset={paddingHeight} enabled>
                <View style={formList.logoright} >
                    <Image
                        style={{ height: '100%', width: '100%', resizeMode: 'contain' }}
                        source={Images.logoright}
                    />
                </View>
                <View style={formList.container}>
                    <View style={MainStyle.formItem}>
                        <Text style={MainStyle.txtFormItemTitle}>Утасны дугаар</Text>
                        <View>
                            <TextInput
                                keyboardType="numeric"
                                maxLength={8}
                                style={MainStyle.inputbox}
                                value={usernameInput}
                                onChangeText={(text) => setusernameInput(text), () => { }}
                            />
                            <View style={formList.inputiconCon}>
                                <Image source={Images.loginusericon}
                                    style={formList.inputicon} /></View>
                        </View>
                    </View>
                    <View style={MainStyle.formItem}>
                        <Text style={MainStyle.txtFormItemTitle}>Нууц үг</Text>
                        <View>
                            <TextInput
                                secureTextEntry={true}
                                style={MainStyle.inputbox}
                                value={passwordInput}
                                onChangeText={(text) => setpasswordInput(text)}
                                onTouchStart={() => passwordInputClicked()}
                            // ref={(ref) => setpasswordRef = ref}
                            />
                            <View style={MainStyle.inputiconCon}>
                                <Image source={Images.loginpassico}
                                    style={formList.inputicon} />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={formList.checkboxBetween}>
                    <View>
                        <Checkbox
                            title={'Намайг сана'}
                            onPress={() => {
                                setisRememberUser(!isRememberUser)
                            }}
                            source={isRememberUser ? Images.checked : Images.unchecked}
                        />
                    </View>
                    <View>
                        <TouchableOpacity style={{ marginBottom: 5 }} onPress={() => navigation.navigate('forgotPassword')}>
                            <Text style={MainStyle.txtFormItemTitle}>Нууц үгээ мартсан?</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* {
                    (fingerPrintSupported) ? */}
                <View style={{ flexDirection: 'row', width: '100%', marginBottom: 30, }}>
                    <Checkbox
                        onPress={() => {
                            setuserFingerPrint(!userFingerPrint)
                        }}
                        source={userFingerPrint ? Images.checked : Images.unchecked}
                    />
                </View>

                {/* : null */}
                {/* } */}
                {renderLoginBtn()}
            </KeyboardAvoidingView>
        </View>
    );
}

const formList = StyleSheet.create({
    imageStyle: {
        height: 45,
        width: 45,
        resizeMode: 'contain'
    },
    buttonPurple: {
        width: 250,
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
        backgroundColor: '#f95e00',
        borderRadius: 20,
        color: '#fff',
        borderWidth: 0
    },
    inputicon: {
        width: 15,
        height: 15,
        alignItems: 'center',
        top: 3
    },
    headerText: {
        marginTop: 5,
        width: 20,
        height: 20
    },
    inputiconCon: {
        display: 'flex',
        position: 'absolute',
        right: 20,
        bottom: 16,
    },
    Mainconatiner: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start',
    },
    container: {
        width: '100%',
    },
    checkboxBetween: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    logoright: {
        display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 50, flex: 3, width: '60%'
    }
});

const login = StyleSheet.create({

    container: {
        paddingHorizontal: 20,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        // height: height - 60
        height: height - headerContainerHeight - 20
        // flex: 1
    },
    btnp: {
        textAlign: 'center',
        marginBottom: 30,
        marginTop: 30,
    },
    logoImage: {
        height: 30,
        width: 30,
        resizeMode: 'contain'
    },
    backbutn: {
        padding: 20, paddingRight: 30, position: 'absolute', top: headerContainerPadding, left: 0
    }
});
//     async componentWillMount() {
//     OneSignal.getPermissionSubscriptionState((status) => {
//         this.setState({ oneSignalId: status.userId });
//     });
//     this.getUsername();
//     this.isFingerPrintSaved();
//     await requestLocationPermission();
//     // navigator.geolocation.getCurrentPosition(
//     geolocation.getCurrentPosition(
//         (position) => {
//             this.setState({ latitude: position.coords.latitude, longitude: position.coords.longitude, canLogin: true });
//         },
//         (error) => {
//             Helper.req
//             // navigator.geolocation.requestAuthorization();
//             geolocation.requestAuthorization();
//             // Helper.showSimpleAlert('Алдаа', 'Хэрэглэгчийн байршил авахад алдаа гарлаа. Та байршил авах сонголтыг идэвхижүүлнэ үү.');
//         },
//     );
//     TouchID.isSupported()
//         .then((biometryType) => {
//             if (biometryType === 'FaceID') {
//                 this.setState({ fingerPrintType: 'FaceID', fingerPrintSupported: true, fingerText: 'Цаашид FaceID-р нэвтрэх' });
//             } else {
//                 this.setState({ fingerPrintType: 'TouchID', fingerPrintSupported: true, fingerText: 'Цаашид хурууны хээгээр нэвтрэх' });
//             }
//         })
//         .catch((error) => {
//             this.setState({ fingerPrintSupported: false });
//         });
// }

// const changeIsRememberUser = (value) => {
//     setisRememberUser(value)
//     if (value) { saveUsername(); }
//     else { removeUsername(); }
// }
// const saveUsername = () => {
//     // SAVE TO KEYCHAIN
//     if (usernameInput()) { SInfo.setItem('login_userName', this.state.usernameInput, {}); }
// }
// const removeUsername = () => {
//     // REMOVE FROM KEYCHAIN
//     SInfo.deleteItem('login_userName', {});
// }
// const getUsername = () => {
//     // FETCH FROM KEYCHAIN
//     SInfo.getItem('login_userName', {}).then(value => {
//         if (value) {
//             this.setState({ usernameInput: value, isRememberUser: true });
//         }
//     });
// }

// const changeUseFinger = (value) => {
//     setuserFingerPrint(value)
//     if (!value) { removeFingerPrint() }
// }
// const saveFingerPrint = () => {
//     // SAVE TO KEYCHAIN
//     if (usernameInput && passwordInput && useFingerPrint) {
//         SInfo.setItem('fp_userName', this.state.usernameInput, {});
//         SInfo.setItem('fp_password', this.state.passwordInput, {});
//     }
// }
// const removeFingerPrint = () => {
//     // REMOVE FROM KEYCHAIN
//     SInfo.deleteItem('fp_userName', {});
//     SInfo.deleteItem('fp_password', {});
// }
// const isFingerPrintSaved = () => {
//     // FETCH FROM KEYCHAIN
//     SInfo.getItem('fp_userName', {}).then(value => {
//         if (value) {
//             SInfo.getItem('fp_password', {}).then(value1 => {
//                 if (value1) {
//                     this.setState({ canShowFingerPrint: true, useFingerPrint: true, fingerPrintInput: value, fingerPrintPass: value1 });
//                 }
//             });
//         }
//     });
// }
// const showFingerprint = () => {
//     TouchID.authenticate(touchIdText, touchIdConfig)
//         .then(() => {
//             login(true);
//         })
//         .catch((error) => {
//             setfingerPrintError('exception: ') + error
//             fingerPrintCancelled(true)
//         })
// }
// const passwordInputClicked = () => {
//     if (canShowFingerPrint && fingerPrintCancelled) {
//         showFingerprint();
//     }
// }
// const cleanValues = () => {
//     setpasswordInput(null)
//     setfingerPrintInput('')
//     setfingerPrintPass('')
//     setcanShowFingerPrint(false)
// }

// const sendUserLocation = () => {
//     let data = {
//         'latitude': this.state.latitude,
//         'longitude': this.state.longitude,
//         'playerId': this.state.oneSignalId
//     };
// }
// const login = (isFinger) => {
//     Keyboard.dismiss();
//     setisLoading(true)
//     let username = usernameInput;
//     let password = passwordInput;
//     if (isFinger) {
//         username = fingerPrintInput;
//         password = fingerPrintPass;
//     } else {
//         cleanValues();
//         setisLoading(false)
//         Helper.showSimpleAlert('Алдаа', responseJson);
//     }
// }

//
