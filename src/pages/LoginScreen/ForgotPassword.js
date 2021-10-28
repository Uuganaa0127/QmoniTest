import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, Text, View, TouchableOpacity, Modal, TextInput, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
// import { Actions } from 'react-native-router-flux';

import MainStyle from '/Qmonitest/src/components/styles/MainStyle';
// import MainHeader from '../components/header';
import Loader from '/qmonitest/src/components/Loader/index';
import Helper from '/qmonitest/src/help';
// import Helper from '../components/helper';
import SuccessScreen from '../SuccessScreen';
import UnSuccessScreen from '../UnsuccessScreen';
const paddingHeight = Platform.OS == 'ios' ? 0 : -200;

export default function ForgotPassword({ navigation }) {
    const [accessToken, setaccessToken] = useState(null);
    const [userId, setuserId] = useState(null);
    const [mobileNumber, setmobileNumber] = useState(null);
    const [confCode, setconfCode] = useState(null);
    const [password, setpassword] = useState(null);
    const [matchPassword, setmatchPassword] = useState(null);
    const [isConfCodeSent, setisConfCodeSent] = useState(false);
    const [phoneValidate, setphonValidate] = useState(false);
    const [isLoading, setisLoading] = useState(false);
    const [responseModalVisible, setresponseModalVisible] = useState(false);
    const [isSuccess, setisSuccess] = useState(false);
    const [succesfulText, setsuccessfulText] = useState(null);
    const [unsuccesfulText, setunsuccesfulText] = useState(null);

    const setResponseModalVisible = (visible, success) => {
        setResponseModalVisible(visible)
        setisSuccess(success)
    }
    const responseModalHandler = () => {
        setResponseModalVisible(false);
        if (isSuccess) {
            // this.props.navigation.state.params.onGoBack();
            navigation.goBack();
        }
    }
    const validate = (text) => {
        if (text.length == 8) {
            setphonValidate(true)
            setmobileNumber(text)
        } else {
            setphonValidate(false)
        }
    }
    const sendConfirmationCode = () => {
        setisLoading(true);
        let data = {
            'mobileNumber': mobileNumber,
            'confirmationType': 0
        };
        //     BaseService.sendPasswordConfCode(data)
        //         .then((responseJson) => {
        //             if (responseJson.status && responseJson.status == 'Failed') {
        //                 let errors = '';
        //                 for (let i = 0; i < Object.keys(responseJson.msgList).length; i++) {
        //                     errors += responseJson.msgList[i].text ? responseJson.msgList[i].text : responseJson.msgList[i].code;
        //                 }
        //                 this.setState({ isLoading: false });
        //                 this.setState({ unsuccesfulText: errors }, () => this.setResponseModalVisible(true, false));
        //             } else if (responseJson.status == 'Success') {
        //                 this.setState({ isConfCodeSent: true, isLoading: false });
        //             }
        //         })
        //         .catch((error) => {
        //             this.setState({ isLoading: false });
        //             this.setState({ unsuccesfulText: 'Баталгаажуулах код илгээхэд алдаа гарлаа та дахин оролдоно уу.' }, () => this.setResponseModalVisible(true, false))
        //         });
    }
    const checkCanChangePassword = () => {
        if (password != matchPassword) {
            Helper.showSimpleAlert('Алдаа', 'Нууц үг хоорондоо таарахгүй байна.');
        } else if (mobileNumber != null | confCode != null ||
            password != null || matchPassword != null) {
            if (password != null && password.length < 8) {
                Helper.showSimpleAlert('Алдаа', 'Нууц үгийн урт 8-с багагүй байх шаардлагатай.');
            } else {
                changePassword();
            }
        } else {
            Helper.showSimpleAlert('Алдаа', 'Мэдээллээ бүрэн оруулна уу.');
        }
    }
    const changePassword = () => {
        setisLoading(true)
        let data = {
            'mobileNumber': mobileNumber,
            'confCode': confCode,
            'password': password,
            'matchPassword': matchPassword,
        };
        //     BaseService.forgotPassword(data)
        //         .then((responseJson) => {
        //             if (responseJson.status && responseJson.status == 'Failed') {
        //                 let errors = '';
        //                 for (let i = 0; i < Object.keys(responseJson.msgList).length; i++) {
        //                     errors += responseJson.msgList[i].text ? responseJson.msgList[i].text : responseJson.msgList[i].code;
        //                 }
        //                 this.setState({ isLoading: false });
        //                 this.setState({ unsuccesfulText: errors }, () => this.setResponseModalVisible(true, false));
        //             } else if (responseJson.status == 'Success') {
        //                 this.setState({ isLoading: false });
        //                 this.setState({ succesfulText: 'Таны нууц үг солигдлоо' }, () => this.setResponseModalVisible(true, true));
        //             }
        //         })
        //         .catch((error) => {
        //             this.setState({ isLoading: false });
        //             this.setState({ unsuccesfulText: error }, () => this.setResponseModalVisible(true, false));
        //         });
    }

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
    const renderBody = () => {
        if (isConfCodeSent) {
            return (
                <KeyboardAvoidingView style={MainStyle.contentContainer} behavior="padding" keyboardVerticalOffset={paddingHeight} enabled>
                    <View style={[MainStyle.scrollContainer, { paddingTop: 20 }]}>
                        <ScrollView>
                            <View style={MainStyle.formItem}>
                                <Text style={MainStyle.txtFormItemTitle}>Утасны дугаар</Text>
                                <View >
                                    <TextInput
                                        editable={false}
                                        underlineColorAndroid='transparent'
                                        style={MainStyle.inputbox}
                                        value={mobileNumber}
                                    />
                                </View>
                            </View>
                            <View style={MainStyle.formItem}>
                                <Text style={MainStyle.txtFormItemTitle}>Баталгаажуулах код</Text>
                                <View >
                                    <TextInput
                                        underlineColorAndroid='transparent'
                                        style={MainStyle.inputbox}
                                        onChangeText={(text) => setconfCode(text)}
                                    />
                                </View>
                            </View>
                            <View style={MainStyle.formItem}>
                                <Text style={MainStyle.txtFormItemTitle}>Шинэ нууц үг</Text>
                                <View >
                                    <TextInput
                                        secureTextEntry={true}
                                        textContentType="password"
                                        underlineColorAndroid='transparent'
                                        style={MainStyle.inputbox}
                                        onChangeText={(text) => setpassword(text)}
                                    />
                                    <View style={MainStyle.inputiconCon}>
                                        <Icon name="lock" style={MainStyle.inputicon} />
                                    </View>
                                </View>
                            </View>
                            <View style={MainStyle.formItem}>
                                <Text style={MainStyle.txtFormItemTitle}>Шинэ нууц үг давтах</Text>
                                <View >
                                    <TextInput
                                        secureTextEntry={true}
                                        textContentType="password"
                                        underlineColorAndroid='transparent'
                                        style={MainStyle.inputbox}
                                        onChangeText={(text) => setmatchPassword(text)}
                                    />
                                    <View style={MainStyle.inputiconCon}>
                                        <Icon name="lock" style={MainStyle.inputicon} />
                                    </View>
                                </View>
                            </View>
                            <View style={MainStyle.bottomContainer}>
                                <View style={MainStyle.btnContainer}>
                                    <TouchableOpacity style={[MainStyle.buttonPurple, { marginBottom: 30 }]} onPress={() => checkCanChangePassword()}>
                                        <Text style={MainStyle.btnTextLight} >Баталгаажуулах</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </KeyboardAvoidingView>
            );
        } else {
            return (
                <KeyboardAvoidingView style={MainStyle.mainContainerCenter} behavior="padding" keyboardVerticalOffset={paddingHeight} enabled>
                    <View style={registerContent.container}>
                        <View style={MainStyle.iconBack}>
                            <View style={MainStyle.iconBackground}>
                                <Icon style={MainStyle.icon} name="mobile-alt" />
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
                        </View>
                        <View style={MainStyle.btnContainer}>
                            <TouchableOpacity style={MainStyle.buttonPurple} onPress={() => sendConfirmationCode()}>
                                <Text style={MainStyle.btnTextLight} >Нууц үг сэргээх</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAvoidingView>);
        }

    }

    return (
        <View style={MainStyle.mainContainer} >
            <Loader isLoading={this.state.isLoading} />
            <MainHeader headerLabel={'Нууц үг солих'} showNotification={false} isGoBack={true} />
            {renderBody()}
            {renderResponseModal()}
        </View >
    );
}

const registerContent = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
});