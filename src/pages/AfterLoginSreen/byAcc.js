import React, { useState } from 'react';
import { Text, View, StatusBar, StyleSheet, TouchableOpacity, ScrollView, Image, Clipboard, Picker, Platform, Dimensions } from 'react-native';

import MainStyle from '../../components/styles/MainStyle';
import helper from '/Qmonitest/src/help/index';
import Images from '/Qmonitest/src/constants/Images';

const Screenwidth = Dimensions.get("window").width;

const banks = [
    { value: null, label: "Сонгох" },
    { value: 'TDB', label: "Худалдаа хөгжлийн банк" },
    { value: 'GLMT', label: "Голомт банк" }
];
export default function FirstPage({ isExtend, accountId, amount }) {
    const [accessToken, setaccessToken] = useState(null);
    const [userId, setuserId] = useState(null);
    const [bankId, setbankId] = useState(null);
    const [bankLabel, setbankLabel] = useState('Худалдаа хөгжлийн банк')
    const [bankAccName, setbankAccName] = useState('МОНГОЛИА ИМПАКТ ФИНАНС ББСБ ХХК')
    const [bankAccNum, setbankAccNum] = useState('409048726');
    const [userRegNum, setuserRegNum] = useState(null);

    // componentDidMount() {
    //     SInfo.getItem('access_token', {}).then(value => {
    //         if (value) {
    //             SInfo.getItem('user_id', {}).then(value1 => {
    //                 if (value1 != '' && value1 != null) {
    //                     this.setState({ accessToken: value, userId: value1 });
    //                     this.fetchUserInfo();
    //                 } else {
    //                     SInfo.deleteItem('access_token', {});
    //                     Actions.IndexMain();
    //                 }
    //             });
    //         } else {
    //             Actions.IndexMain();
    //         }
    //     });
    // }
    // fetchUserInfo() {
    //     BaseService.getUserInfoBank(this.state.userId)
    //         .then((responseJson) => {
    //             if (responseJson && responseJson.person) {
    //                 this.setState({ userRegNum: responseJson.person.registerNumber });
    //             }
    //         })
    //         .catch((error) => { Helper.showSimpleAlert('Алдаа', error); });
    // }
    const copyToClipboard = (value) => {
        Clipboard.setString(String(value));
        _getFromClipboard();
    }
    const _getFromClipboard = async () => {
        await Clipboard.getString()
            .then((content) => {
                helper.showSimpleAlert('Амжилттай', 'Хуулагдлаа');
            }
            ).catch((error) => {
                console.log(error);
            });
    }
    return (
        <View style={MainStyle.mainContainer}>
            <ScrollView>
                <View >
                    <View style={MainStyle.listContainer}>
                        <View style={[MainStyle.listItemBr, { borderTopColor: '#e6e6e6', borderTopWidth: 1, }]}>
                            <View style={[MainStyle.listItem, { height: 60 }]}>
                                <View style={MainStyle.listItemContainer}>
                                    <View >
                                        <Text style={[MainStyle.txtWarnGray, { lineHeight: 22 }]}>Төлөлт хийх банк</Text>
                                        <View style={{ flexDirection: 'row', }}>
                                            <Image
                                                style={MainStyle.bankLogo}
                                                source={Images.Bankstdb}
                                            />
                                            <Text style={MainStyle.txtTitle}>{bankLabel}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={MainStyle.listItemBr}>
                            <View style={[MainStyle.listItem, { height: 60 }]}>
                                <View style={[MainStyle.listItemContainer, styles.listItem]}>
                                    <View>
                                        <Text style={[MainStyle.txtWarnGray, { lineHeight: 22 }]}>Төлөх дүн</Text>
                                        <Text style={MainStyle.txtTitle}>{helper.formatValue(amount)}₮</Text>
                                    </View>
                                    <TouchableOpacity
                                        style={MainStyle.copyBtn}
                                        onPress={() => copyToClipboard(amount)}>
                                        <Text style={MainStyle.copyBtnText}>Хуулах</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={MainStyle.listItemBr}>
                            <View style={[MainStyle.listItem, { height: 60 }]}>
                                <View style={[MainStyle.listItemContainer, styles.listItem]}>
                                    <View>
                                        <Text style={[MainStyle.txtWarnGray, { lineHeight: 22 }]}>Дансны дугаар</Text>
                                        <Text style={MainStyle.txtTitle}>{bankAccNum}</Text>
                                    </View>
                                    <TouchableOpacity
                                        style={MainStyle.copyBtn}
                                        onPress={() => copyToClipboard(bankAccNum)}>
                                        <Text style={MainStyle.copyBtnText}>Хуулах</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={MainStyle.listItemBr}>
                            <View style={[MainStyle.listItem, { height: 60 }]}>
                                <View style={[MainStyle.listItemContainer, styles.listItem]}>
                                    <View style={{ width: '70%' }}>
                                        <Text style={[MainStyle.txtWarnGray, { lineHeight: 22 }]}>Хүлээн авагч</Text>
                                        <Text style={MainStyle.txtTitle}>{bankAccName}</Text>
                                    </View>
                                    <TouchableOpacity
                                        style={MainStyle.copyBtn}
                                        onPress={() => copyToClipboard(bankAccName)}>
                                        <Text style={MainStyle.copyBtnText}>Хуулах</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={MainStyle.listItemBr}>
                            <View style={[MainStyle.listItem, { height: 60 }]}>
                                <View style={[MainStyle.listItemContainer, styles.listItem]}>
                                    <View>
                                        <Text style={[MainStyle.txtWarnGray, { lineHeight: 22 }]}>Гүйлгээний утга</Text>
                                        <Text style={MainStyle.txtTitle}>{userRegNum}{isExtend ? (':' + accountId) : ''}</Text>
                                    </View>
                                    <TouchableOpacity
                                        style={MainStyle.copyBtn}
                                        onPress={() => copyToClipboard(userRegNum + (isExtend ? (':' + accountId) : ''))}>
                                        <Text style={MainStyle.copyBtnText}>Хуулах</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>

        </View >
    );
}


const styles = StyleSheet.create({
    listItem: {
        width: '100%',
        justifyContent: 'space-between'
    },
});