import React, { useState } from 'react';
import { Text, View, KeyboardAvoidingView, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView, Modal, Platform, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
// import { Actions } from 'react-native-router-flux';
// import SInfo from 'react-native-sensitive-info';
// import SocketIOCLient from 'socket.io-client';
// import Dialog from 'react-native-dialog';
// import BaseService from '../../baseService';

// import mainStyle from '../assets/style/style';
// import MainHeader from '../components/header';
import Loader from '/Qmonitest/src/components/Loader/index';
import Helper from '/qmonitest/src/help';
import UnSuccessScreen from '../UnsuccessScreen';
import SuccessScreen from '../SuccessScreen';
import Images from '/qmonitest/src/constants/Images';
import MainStyle from '../../components/styles/MainStyle';

const paddingHeight = Platform.OS == 'ios' ? 50 : -200;

export default function accountScreen({ isAfterRegister, isConfirmed }) {
    const [userBank, setuserBank] = useState(
        { bankCode: 'GLMT', bankName: 'GLMT ', accountNumber: 21323123, isConfirmed: false }
    );
    const [socket, setsocket] = useState(null);
    const [timerHandle, settimerHandle] = useState(0);
    const [timerHandle1, settimerHandle1] = useState(0);
    const [accessToken, setaccessToken] = useState(null);
    const [userId, setuserId] = useState(null);
    // Банкны данс баталгаажуулах үед ашиглагдах
    const [bankLoginName, setbankLoginName] = useState(null);
    const [bankLoginPass, setbankLoginPass] = useState(null);
    // const [bankCode, setbankCode] = useState(null);
    const [secretAnswer, setsecretAnswer] = useState('');
    const [isLoading, setisLoading] = useState(true);
    const [isConnected, setisConnected] = useState(false);
    const [clearTimer, setclearTimer] = useState(false);
    const [secretDialogVisible, setsecretDialogVisible] = useState(false);
    const [secretDialogMessage, setsecretDialogMessage] = useState(null);
    const [isLoadingText, setisLoadingText] = useState('')
    // Responsec
    const [responseModalVisible, setresponseModalVisible] = useState(false);
    const [isSuccess, setisSuccess] = useState(false);
    const [succesfulText, setsuccessfulText] = useState(null);
    const [unsuccesfulText, setunsuccesfulText] = useState(null)
    const getBankIcon = (bankCode) => {
        switch (bankCode) {
            case 'GLMT':
                return Images.Banksgolomt;
            case 'KHAN':
                return Images.Bankskhan;
            case 'TDBM':
                return Images.Banksgolomt;
            case 'STATE':
                return Images.Bankstdb;
            case 'CK':
                return Images.Bankschingis;
            default:
                return Images.pointer;
        }
    }
    // componentWillMount() {
    //     SInfo.getItem('access_token', {}).then(value => {
    //         if (value) {
    //             SInfo.getItem('user_id', {}).then(value1 => {
    //                 if (value1 != '' && value1 != null) {
    //                     this.setState({ accessToken: value, userId: value1 }, () => { this.fetchBankInfo(); });
    //                     this.createSocket();
    //                     this.connectToSocket();
    //                     this.getBankInfoFromSocket();
    //                 } else {
    //                     SInfo.deleteItem('access_token', {});
    //                     Actions.IndexMain();
    //                 }
    //             });
    //         } else {
    //             SInfo.deleteItem('access_token', {});
    //             Actions.IndexMain();
    //         }
    //     });
    // }
    // componentWillUnmount() {
    //     if (this.timerHandle) {
    //         clearTimeout(this.timerHandle);
    //         this.timerHandle = 0;
    //     }
    //     if (this.timerHandle1) {
    //         clearTimeout(this.timerHandle1);
    //         this.timerHandle1 = 0;
    //     }
    // }
    // createSocket() {
    //     this.socket = new SocketIOCLient('https://qmoni.mn');
    // }
    // connectToSocket() {
    //     this.socket.on('connect', (data) => {
    //         this.setState({ isConnected: true });
    //     });
    // }
    const setResponseModalVisible = (visible, success) => {
        setresponseModalVisible(visible);
        isSuccess(success)
    }
    const responseModalHandler = () => {
        setresponseModalVisible(false);
        if (isSuccess) {
            setisLoading(true);
            setbankLoginName(null);
            setbankLoginPass(null);
            fetchBankInfo();
        }
    }
    // const getBankInfoFromSocket = () => {
    //     this.socket.on('response', (status, message) => {
    //         console.log('_______');
    //         console.log(status);
    //         console.log(message);
    //         this.setState({ isLoading: false });
    //         clearTimeout(this.timerHandle);
    //         this.timerHandle = 0;

    //         switch (status) {
    //             case 'SECRET_QUESTION':
    //                 this.setState({ secretDialogVisible: true, secretDialogMessage: message });
    //                 break;
    //             case 'INCORRECT_EBANK':
    //             case 'INCORRECT_ACCOUNT':
    //             case 'INCORRECT_NAME':
    //             case 'EMPTY_TRANSACTION':
    //             case 'UNKNOWN_ERROR':
    //                 this.setState({ unsuccesfulText: message }, () => this.setResponseModalVisible(true, false));
    //                 break;
    //             case 'SUCCESS':
    //                 this.setState({ succesfulText: 'Данс амжилттай баталгаажууллаа.' }, () => this.setResponseModalVisible(true, true));
    //                 break;
    //             default:
    //                 break;
    //         }
    //     });
    // }
    const showSecretDialog = (visible) => {
        setsecretDialogVisible(visible);
        setsecretAnswer(null);
    }
    const sendSecretInput = () => {
        setsecretDialogVisible(false);
        if (isConnected) {
            setisLoading(true);

            timerHandle1 = setTimeout(() => {
                setunsuccesfulText('Холболтын алдаа гарлаа.'), () => setResponseModalVisible(true, false);
                setisLoading(false);
                timerHandle1 = 0;
            }, 120000);

            // this.socket.emit('secretAnswer', this.state.secretAnswer);
        } else {
            setunsuccesfulText('Холболтын алдаа гарлаа.'), () => setResponseModalVisible(true, false);
        }
    }
    const saveBankAccount = () => {
        Keyboard.dismiss();
        if (bankLoginName == null || bankLoginPass == null || userBank.bankCode == null) {
            Helper.showSimpleAlert('Алдаа', 'Нэвтрэх нэр болон нууц үг оруулна уу.');
        } else {
            if (isConnected) {
                setisLoadingText('Таны дансыг баталгаажуулж байна...');
                setisLoading(true);
                settimerHandle = setTimeout(() => {
                    setunsuccesfulText('Холболтын алдаа гарлаа.'), () => setResponseModalVisible(true, false);
                    setisLoadingText('Түр хүлээнэ үү...'), isLoading(false);
                    timerHandle = 0;
                    // }, 5000);
                }, 120000);

                // this.socket.emit('checkBank', {
                //     id: this.state.userBank.id,
                //     bankName: this.state.userBank.bankCode,
                //     accountNumber: this.state.userBank.accountNumber,
                //     username: this.state.bankLoginName,
                //     password: this.state.bankLoginPass,
                // });
            } else {
                unsuccesfulText('Холболтын алдаа гарлаа.'), () => setResponseModalVisible(true, false);
            }
        }
    }
    // const fetchBankInfo = () => {
    //     BaseService.getUserBank(this.state.userId)
    //         .then((responseJson) => {
    //             if (responseJson[0]) {
    //                 this.setState({ userBank: responseJson[0], isLoading: false });
    //             } else {
    //                 // Хэрэглэгч банкны дансаа устгасан эвсэл үүсгээгүй
    //                 this.setState({ isLoading: false });
    //             }
    //         })
    //         .catch((error) => {
    //             this.setState({ isLoading: false });
    //             Helper.showSimpleAlert('Алдаа', error);
    //         });
    // }

    const renderResponseModal = () => {
        return (
            <Modal
                animationType='slide'
                transparent={true}
                visible={responseModalVisible}
                onRequestClose={() => { console.log('Modal closed'); }}>
                {(isSuccess) ?
                    <SuccessScreen responseModalHandler={responseModalHandler} succesfulText={succesfulText} />
                    : <UnSuccessScreen responseModalHandler={responseModalHandler} unsuccesfulText={unsuccesfulText} />}
            </Modal>
        );
    }
    const renderSecretDialog = () => {
        let dialogMsg = secretDialogMessage != null ? secretDialogMessage : 'Таны утсанд ирсэн идэвхижүүлэх код оруулна уу.';
        return (
            <Dialog.Container
                visible={this.state.secretDialogVisible} >
                <Dialog.Title> </Dialog.Title>
                <Dialog.Description>{dialogMsg}</Dialog.Description>
                <Dialog.Input
                    underlineColorAndroid='transparent'
                    style={accountContent.secretInput}
                    numberOfLines={1}
                    value={secretAnswer}
                    ref={ref => this.secretAnswerRef = ref}
                    onChangeText={(text) =>
                        setsecretAnswer(text)}
                />
                <Dialog.Button label="Хаах" onPress={() => { showSecretDialog(false) }} />
                <Dialog.Button label="Батлах" onPress={() => { sendSecretInput() }} />
            </Dialog.Container >
        );
    }
    const renderBankAccConfirm = () => {
        if (isConfirmed) { return (null); }
        else {
            return (
                <KeyboardAvoidingView style={accountContent.accContainer} behavior="padding" keyboardVerticalOffset={paddingHeight} enabled>
                    {/* <View style={accountContent.accContainer}> */}
                    <View style={accountContent.accWarn}>
                        <Text style={accountContent.accWarnText}>Таны интернэт банкны нууц үгийг бид хадгалж авахгүй бөгөөд, таны дансыг баталгаажуулах зорилгоор ганц удаа ашиглана.</Text>
                    </View>
                    <View style={formList.container}>
                        <View style={MainStyle.formItem}>
                            <Text style={MainStyle.txtFormItemTitle}>Нэвтрэх нэр</Text>
                            <View>
                                <TextInput
                                    onChangeText={(text) => setbankLoginName(text)}
                                    style={MainStyle.inputbox}
                                />
                                <View style={MainStyle.inputiconCon}>
                                    <Icon name="user-alt" style={MainStyle.inputicon} />
                                </View>
                            </View>
                        </View>
                        <View style={MainStyle.formItem}>
                            <Text style={MainStyle.txtFormItemTitle}>Нууц үг</Text>
                            <View>
                                <TextInput
                                    secureTextEntry={true}
                                    onChangeText={(text) => setbankLoginPass(text)}
                                    style={MainStyle.inputbox}
                                />
                                <View style={MainStyle.inputiconCon}>
                                    <Icon name="lock" style={MainStyle.inputicon} />
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={[MainStyle.btnContainer, { marginBottom: 40 }]}>
                        <TouchableOpacity style={MainStyle.buttonPurple} onPress={() => saveBankAccount()} >
                            <Text style={MainStyle.btnTextLight} >Нэвтрэх</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            );
        }
    }
    const renderBankStatusIcon = (isConfirmed) => {
        if (isConfirmed) {
            return (<Image source={Images.bankconfirmed} style={MainStyle.accStatusApproved} />);
        } else {
            return (<Image source={Images.bankunconfirmed} style={MainStyle.accStatusNotApproved} />);
        }
    }


    return (
        <View style={MainStyle.mainContainer}>
            {/* <Loader isLoading={isLoading} loadingText={isLoadingText} /> */}
            {/* {
                (isAfterRegister != 'true') ?
                    // <MainHeader headerLabel={'Данс баталгаажуулах'} showNotification={true} isGoBack={true} />
                    // <MainHeader headerLabel={'Данс баталгаажуулах' + this.state.isConnected} showNotification={true} {...this.props} isGoBack={true} />
                    // : null
            } */}
            <View style={[MainStyle.scrollContainer, (isAfterRegister == 'true') ? { marginTop: 0 } : {}]}>
                <ScrollView>
                    <View style={accountContent.container}>
                        <View style={MainStyle.tblHead}>
                            <Text style={MainStyle.tblHead2Col1}>Банк</Text>
                            <Text style={MainStyle.tblHead2Col2}>Дансны дугаар</Text>
                            <Text style={MainStyle.tblHead2Col3}>Төлөв</Text>
                        </View>
                        <View style={[MainStyle.tblRowCon, { marginBottom: 0 }]}>
                            <View style={MainStyle.accountRow}>
                                <View style={MainStyle.tblContent2Col1}>
                                    <Image
                                        style={MainStyle.bankLogo}
                                        source={getBankIcon(userBank.bankCode)}
                                    />
                                    <Text style={[MainStyle.txtTitle, { width: '80%' }]}>{userBank.bankName}</Text>
                                </View>
                                <Text style={MainStyle.tblContent2Col2}>{userBank.accountNumber}</Text>
                                <View style={MainStyle.tblContent2Col3, { paddingStart: 10, }}>
                                    {renderBankStatusIcon(userBank.isConfirmed)}
                                </View>
                            </View>
                        </View>
                        {renderBankAccConfirm()}
                    </View>
                </ScrollView>
            </View>
            {/* {renderSecretDialog()} */}
            {renderResponseModal()}
        </View >
    );

}

const formList = StyleSheet.create({
    container: {
        width: '100%',
    },
    checkboxBetween: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
    },
});

const accountContent = StyleSheet.create({
    container: {
        width: '100%',
    },
    accContainer: {
        width: '100%',
        paddingHorizontal: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    accWarn: {
        backgroundColor: '#fdeeee',
        padding: 20,
        marginVertical: 20,
    },
    accWarnText: {
        color: '#f08181'
    },
    secretInput: {
        borderWidth: 0,
        // borderBottomColor: '#c5ddec',
        // borderBottomWidth: 2,
        width: 190,
        color: '#444444',
        fontSize: 20,
        textAlign: 'center'
    },
    inputContainer: {
        //   width: '70%',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 15
    },
});