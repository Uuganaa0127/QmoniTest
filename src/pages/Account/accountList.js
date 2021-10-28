import React, { useState } from 'react';
import { Text, View, Dimensions, StyleSheet, TouchableOpacity, Image, Alert, ScrollView, Platform, Modal, TextInput, RefreshControl } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IonIcon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import MainStyle from '../../components/styles/MainStyle';
import Loader from '/Qmonitest/src/components/Loader/index';
import helper from '/qmonitest/src/help';
import Picker from '/Qmonitest/src/components/Picker/index'
import Images from '/qmonitest/src/constants/Images';

import Firstpicker from '/Qmonitest/src/components/accountListModalPicker/index'

const { width, height } = Dimensions.get('window');
const headerContainerHeight = (height >= 812 && Platform.OS == 'ios') ? 80 : 60;

export default function accountList({ navigation, firstName }) {
    const [accessToken, setaccessToken] = useState(null);
    const [userId, setuserId] = useState(null);
    const [userBank, setuserBank] = useState(null);
    const [isSocialInsuranceValid, setisSocialInsureanceValid] = useState(false);
    const [isLoading, setisLoading] = useState(true);
    const [isShowAccModal, setisShowAccModal] = useState(false);
    const [isShowAccModal2, setisShowAccModal2] = useState(false);
    const [banks, setbanks] = useState([]);
    const [bankId, setbankId] = useState(null);
    const [bankLabel, setbankLabel] = useState('Банк сонгоно уу');
    const [bankNumber, setbankNumber] = useState(null);
    const [bankAccountName, setbankAccountName] = useState(null);
    const [bankNumberValidation, setbankNumberValidation] = useState(false);
    const [bankUserValidation, setbankUserValidation] = useState(false);
    const [mainValidation, setmainValidation] = useState(false);
    const [userNameError, setuserNameError] = useState('');
    const [refreshing, setrefreshing] = useState(false);
    const [bankValidation, setbankValidation] = useState(false);
    const [bankUser, setbankUser] = useState('');
    // const [userId, setuserId] = useState('')
    // componentWillMount() {
    //     SInfo.getItem('access_token', {}).then(value => {
    //         if (value) {
    //             SInfo.getItem('user_id', {}).then(value1 => {
    //                 if (value1 != '' && value1 != null) {
    //                     this.setState({ accessToken: value, userId: value1 }, () => {
    //                         this.fetchUserInfo();
    //                     });
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
    const onSubRefresh = () => {
        setisLoading(true)
        fetchUserInfo();
    }
    // const fetchUserInfo = () => {
    //     BaseService.getUserInfo(this.state.userId)
    //         .then((responseJson) => {
    //             if (responseJson && responseJson.person) {
    //                 this.setState({ isSocialInsuranceValid: responseJson.person.isSocialInsuranceValid }, () => {
    //                     this.fetchBankInfo();
    //                 });
    //             }
    //             else {
    //                 this.setState({ isLoading: false });
    //             }
    //         })
    //         .catch((error) => {
    //             this.setState({ isLoading: false });
    //             console.log('Account list get user info: ' + error);
    //         });
    // }
    // fetchBankInfo() {
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
    // fetchBanks() {
    //     this.setState({ isLoading: true });
    //     BaseService.getBanksRegister()
    //         .then((responseJson) => {
    //             if (responseJson) {
    //                 if (responseJson) this.setState({ banks: responseJson }, () => { this.setState({ isLoading: false }) });
    //                 else {
    //                     this.setState({ isLoading: false });
    //                     Helper.showSimpleAlert('Алдаа', 'Банкны мэдээлэл татхад алдаа гарлаа');
    //                 }
    //             }
    //             else {
    //                 this.setState({ isLoading: false });
    //                 Helper.showSimpleAlert('Алдаа', 'Банкны мэдээлэл татаж чадсангүй');
    //             }
    //         })
    //         .catch((error) => { Helper.showSimpleAlert('Алдаа', error); });
    // }
    const setAccountAlert = (visible) => {
        if (visible) {    // fetchBanks()
        }
        isShowAccModal1(visible)
    }
    const validate = (text, type) => {
        number = /^[0-9]+$/
        character = /^[a-zA-Z ]+$/
        characterMn = /^[А-Я|Ё|Ө|Ү|а-я|ё|ө|ү|\- ]+$/
        if (type == 'bank') {
            let validation = false;
            let textValue = '';
            if (text != null) { validation = true; textValue = text; }

            setbankValidation(validation),
                bankId(textValue), () => { validateMain(); };
        }
        if (type == 'bankNumber') {
            let validation = false;
            let textValue = '';
            if (number.test(text)) { validation = true; textValue = text; }
            setbankNumberValidation(validation), setbankNumber(textValue), () => { validateMain(); };
        }
        if (type == 'bankUser') {
            let validation = false;
            let textValue = '';
            if (text != '' && text != null && text.length > 2) { validation = true; textValue = text; }
            else
                setuserNameError('Зөвхөн Монгол үсэгээр бичнэ үү')
            setbankUserValidation(validation), setbankUser(textValue), () => { validateMain(); };
        }

        const validateMain = () => {
            if (bankValidation == true && bankNumberValidation == true && bankUserValidation == true) {
                setmainValidation(true);
            } else {
                setmainValidation(false)

            }
        }
    }
    const addAccount = () => {
        setisLoading(true)
        setisShowAccModal(false)
        const data = {
            accountName: bankUser,
            accountNumber: bankNumber,
            bankId: bankId,
            userId: userId,
        }
        // BaseService.addUserBank(data)
        //     .then((responseJson) => {
        //         console.warn(responseJson);
        //         if (responseJson.status == "Success") {
        //             this.setState({ isLoading: false });
        //             Helper.showSimpleAlert('Амжилттай', 'Таны данс амжилттай нэмэгдлээ');
        //             this.fetchUserInfo();
        //         }
        //         else {
        //             this.setState({ isLoading: false });
        //             Helper.showSimpleAlert('Алдаа', 'Данс нэмж чадсангүй дахин оролдоно уу')
        //         }
        //     })
        //     .catch((error) => {
        //         this.setState({ isLoading: false });
        //         Helper.showSimpleAlert('Алдаа', error)
        //     })
    }
    const isShowAccModal1 = (visible) => {
        setisShowAccModal(!visible)
        setisShowAccModal2(visible)
    }
    const showSimpleAlert = (title, body) => {
        Alert.alert(
            title,
            body,
            [{ text: 'Хаах' }],
            { cancelable: false }
        )
    }
    const renderBankStatusIcon = (isConfirmed) => {
        if (isConfirmed) {
            return (<Icon style={MainStyle.accStatusApproved} name="check-circle" />);
        } else {
            return (<Icon style={MainStyle.accStatusNotApproved} name="exclamation-circle" />);
        }
    }
    const renderAccModal = () => {
        return (
            <View>
                <Firstpicker
                    isShowAccModal={isShowAccModal}
                    onpressicon={setAccountAlert}
                    disabled={!mainValidation}
                    addacc={addAccount}
                    onchageaccountnum={(text) => validate(text, 'bankNumber')}
                    onchangebankuser={(text) => validate(text, 'bankUser')}
                    firstName={firstName}
                />
                {
                    <Picker
                        isShow={isShowAccModal2}
                        data={'Сонгоно уу'}
                        style={MainStyle.pickerbox}
                        selectedValue={setbankId}
                        cancelOnPress={isShowAccModal1}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={() => onPress(item.value)}
                                style={styles.item}>
                                <View style={styles.itemContainer}>
                                    <Text style={[MainStyle.fontSemiBold17]}>{item.label}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                        onValueChange={(itemValue, itemIndex) => {
                            validate(itemValue, 'bank');
                        }}>
                        {banks.map((item, index) =>
                            <Picker label={item.description} value={item.id} key={'bs_' + index} />)}
                    </Picker>
                }
            </View>



        )
    }
    const renderBody = () => {
        // НДШ 6 болон түүнээс доош сар төлж байгаа
        if (isSocialInsuranceValid) {
            return (
                <View style={styles.container}>
                    <Text style={styles.warningText}>Та 90 хоногийн дараа дахин оролдоно уу.</Text>
                </View>
            );
        }
        return (
            <View style={MainStyle.scrollContainer}>
                <View style={MainStyle.tblHead}>
                    <Text style={MainStyle.tblHead2Col1}>Банк</Text>
                    <Text style={MainStyle.tblHead2Col2}>Дансны дугаар</Text>
                    <Text style={MainStyle.tblHead2Col3}>Төлөв</Text>
                </View>
                {
                    (userBank != null) ?
                        <ScrollView
                            refreshControl={
                                <RefreshControl
                                    tintColor="transparent"
                                    colors={['transparent']}
                                    refreshing={refreshing}
                                    onRefresh={() => {
                                        onSubRefresh();
                                    }} />
                            }>
                            <View style={MainStyle.tblRowCon}>
                                <TouchableOpacity style={MainStyle.accountRow} onPress={() => navigation.navigate('account')}>
                                    <View style={MainStyle.tblContent2Col1}>
                                        <Image
                                            style={MainStyle.bankLogo}
                                            source={helper.getBankIcon(userBank.bankCode)}
                                        />
                                        <Text style={[MainStyle.txtTitle, { width: '80%' }]}>{userBank.bankName}</Text>
                                    </View>
                                    <Text style={MainStyle.tblContent2Col2}>{userBank.accountNumber}</Text>
                                    <View style={MainStyle.tblContent2Col3}>
                                        {renderBankStatusIcon(userBank.isConfirmed)}
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                        :
                        <View style={[styles.addAccContainer]}>
                            <View style={[MainStyle.btnContainer, { marginBottom: 40 }]}>
                                <TouchableOpacity style={MainStyle.buttonPurple} onPress={() => setAccountAlert(true)} >
                                    <Text style={MainStyle.btnTextLight} >Данс нэмэх</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                }
            </View>
        );
    }

    return (
        <View style={MainStyle.mainContainer}>
            {/* <Loader isLoading={isLoading} /> */}
            {/* <MainHeader headerLabel={'Дансны жагсаалт'} showNotification={true} isGoBack={false} /> */}
            {renderBody()}
            {renderAccModal()}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: 30,
        flex: 1,
        height: height - headerContainerHeight,
        width: width
    },
    warningText: {
        fontSize: 16,
        color: '#555',
        textAlign: 'center'
    },
    addAccContainer: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: '15%'
    },
    addButton: {
        height: 60,
        width: 60,
        borderRadius: 30,
        backgroundColor: '#f95e00',
        marginHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalContainer: {
        // flex: 1,
        width: width,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
        backgroundColor: 'rgba(117,117,117,0.4)'
    },
    modalBody: {
        width: '100%',
        alignItems: 'center',
        borderRadius: 8,
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 30,
        backgroundColor: '#fff'
    },
    modalTitle: {
        fontSize: 16,
        lineHeight: 20,
        fontWeight: '500',
        color: '#555',
        textAlign: 'center'
    },
    exitButton: {
        height: 50,
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginVertical: 20
    },
    modalButton: {
        width: '100%',
        backgroundColor: '#f95e00',
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    modalButtonText: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
        fontWeight: '400'
    }
});