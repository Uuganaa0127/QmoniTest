import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Keyboard, KeyboardAvoidingView, Platform, TextInput, Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';

import MainStyle from '../../components/styles/MainStyle';
import helper from '/qmonitest/src/help/index';


const offsetHeight = Platform.OS == 'ios' ? 10 : -200;
const { width, height } = Dimensions.get('window');
export default function LoanConfirm() {
    const [code, setcode] = useState('');
    const [password, setpassword] = useState('');
    const [isShowImage, setisShowImage] = useState(true)
    const pinInput = React.createRef();

    const _checkCode = (code) => {
        // if (code != '1234') {
        //   this.pinInput.current.shake()
        //     .then(() => this.setState({ code: '' }));
        // }
        Keyboard.dismiss();
    }
    const onConfirm = () => {
        if (code != null && code != '') {
            confirmModalHandler(code);
        } else {
            helper.showSimpleAlert('Алдаа', 'Та нууц үг оруулна уу.')
        }
    }
    return (
        <KeyboardAvoidingView style={[MainStyle.mainContainerCenter, styles.mainContainer]} behavior="padding" keyboardVerticalOffset={offsetHeight} enabled>
            <View style={styles.container}>
                <View style={[MainStyle.iconBack, styles.iconBack]}>
                    <View style={MainStyle.iconBackground}>
                        <Icon style={MainStyle.icon} name="unlock-alt" />
                    </View>
                </View>
                <View style={styles.inputContainer}>
                    <View style={[MainStyle.formItem, { width: '80%' }]}>
                        <Text style={MainStyle.txtFormItemTitle}>Нууц үг</Text>
                        <View>
                            <TextInput
                                secureTextEntry={true}
                                style={MainStyle.inputbox}
                                value={code}
                                onChangeText={(text) => setcode(text)} />
                            <View style={MainStyle.inputiconCon}><Icon name="lock" style={MainStyle.inputicon} /></View>
                        </View>
                    </View>
                </View>
                <View style={MainStyle.btnContainer}>
                    <TouchableOpacity style={MainStyle.buttonPurple} onPress={() => { onConfirm() }}>
                        <Text style={MainStyle.btnTextLight}>Баталгаажуулах</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}


const styles = StyleSheet.create({
    mainContainer: {
        // paddingTop: 100
    },
    iconBack: {
        // height: '40%'
        marginTop: 100
    },
    container: {
        flex: 1,
        // justifyContent: 'space-between',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
        // paddingTop: 100,
        paddingBottom: 10,
    },
    inputContainer: {
        // width: 190,
        // display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        // flex: 6
    },
    conditionContainer: {
        paddingVertical: 35,
        alignItems: 'center',
    }
});