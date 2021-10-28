import React, { useState } from 'react';
import {
    Dimensions, StyleSheet, Text, View, TouchableOpacity, Modal,
    StatusBar, ScrollView, Slider, ActivityIndicator, TouchableWithoutFeedback
} from 'react-native';
import LoanPaymentScreen from './LoanPaymentScreen';

import Icon from 'react-native-vector-icons/FontAwesome5';

import MainStyle from '../../components/styles/MainStyle';
import Loader from '/Qmonitest/src/components/Loader/index';
import helper from '/Qmonitest/src/help/index';

const { width, height } = Dimensions.get('window');
export default function LoanExtendScreen() {

    const [accessToken, setaccessToken] = useState(null);
    const [userId, setuserId] = useState(null);
    const [isLoading, setisLoading] = useState(true);
    const daysMap = [];
    const [loanInfo, setloanInfo] = useState([]);
    const [loanDuration, setloanDuration] = useState(15);
    const [loanInterestPercent, setloanInterestPercent] = useState(0);
    const [loanInterestAmount, setloanInterestAmount] = useState(0);
    const [modalVisiblePayment, setModalVisiblePayment] = useState(false)

    // componentDidMount() {
    //     SInfo.getItem('access_token', {}).then(value => {
    //         if (value) {
    //             SInfo.getItem('user_id', {}).then(value1 => {
    //                 if (value1 != '' && value1 != null) {
    //                     this.setState({ accessToken: value, userId: value1 });
    //                     this.fetchLoanInfo();
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

    const changeLoanDuration = (value) => {
        setloanDuration(value), () => calculateLoanInterest();
    }

    //   fetchLoanInfo() {
    //         const { loanId } = this.props;
    //         BaseService.getAccountLoan(loanId)
    //             .then((responseJson) => {
    //                 console.log(responseJson);
    //                 if (responseJson.content[0]) {
    //                     let dMap = [30];
    //                     // let daysDiff = this.calculateDays(responseJson.content[0].loanDate, responseJson.content[0].endDate);
    //                     // if (daysDiff >= 30) { dMap.push(30); }
    //                     this.setState({ loanInfo: responseJson.content[0], daysMap: dMap }, () => this.changeLoanDuration(this.state.daysMap[0]));
    //                 } else {
    //                     this.setState({ isLoading: false });
    //                 }
    //             })
    //             .catch((error) => { console.log('Loan Info: ' + error); this.setState({ isLoading: false }); });
    //     }
    const calculateLoanInterest = () => {
        if (accessToken) {
            let data = {
                'amount': loanInfo.pBal,
                'duration': loanDuration
            };
            //     BaseService.calculateLoanInterest(data)
            //         .then((responseJson) => {
            //             if (responseJson.value) {
            //                 this.setState({
            //                     loanInterestPercent: responseJson.value.interestPercent,
            //                     loanInterestAmount: responseJson.value.interestAmount,
            //                     isLoading: false
            //                 });
            //             }
            //         })
            //         .catch((error) => {
            //             this.setState({ isLoading: false });
            //             console.log(error);
            //         });
            // }
        }
    }
    const extendLoan = () => {
        // Helper.showSimpleAlert('Confirm window might show');
        let data = {
            'accountId': loanInfo.accountId,
            'duration': loanDuration
        };
        // BaseService.extendLoan(data)
        //     .then((responseJson) => {
        //         this.setModalVisiblePayment(true);
        //     })
        //     .catch((error) => {
        //         this.setState({ isLoading: false });
        //         console.log(error);
        //         Helper.showSimpleAlert('Алдаа', error);
        //     });
    }
    const calculateDueDate = () => {
        let today = new Date();
        today.setDate(today.getDate() + loanDuration);
        return today.getTime();
    }
    const calculateDays = (startDate, endDate) => {
        let start = new Date(startDate);
        let end = new Date(endDate);
        let diff = Math.abs(end.getTime() - start.getTime());
        return Math.ceil(diff / (1000 * 3600 * 24));
    }
    const renderModalPayment = () => {
        return (
            <Modal
                animationType="none"
                transparent={false}
                visible={modalVisiblePayment}
                onRequestClose={() => {
                    Console.log('Modal has been closed.');
                }}>
                <View style={{ padding: 30, backgroundColor: 'rgba(0,0,0,0.4)', height: '100%', width: '100%' }}>
                    <View style={styles.modalDivider} />
                    <TouchableOpacity style={styles.modalBtn} onPress={() => setModalVisiblePayment(false)} >
                        <Icon name="times" style={styles.modalBtnIcon} />
                    </TouchableOpacity>
                    <LoanPaymentScreen amount={loanInfo.iBal + loanInfo.lBal} accountId={loanInfo.accountId} isExtend={true} />
                </View>
            </Modal>
        );
    }
    const renderLoanDuration = (item) => {
        if (loanDuration == item) {
            return (
                <TouchableOpacity
                    key={'duration_' + item} style={[loan.btn, loan.btnActive]}
                    onPress={() => { changeLoanDuration(item) }}>
                    <Text style={MainStyle.h2White}>{item}</Text>
                    <Text style={loan.durItemBottom}>хоног</Text>
                </TouchableOpacity>
            );
        } else {
            return (
                <TouchableOpacity
                    key={'duration_' + item} style={[loan.btn, loan.btnSimple]}
                    onPress={() => { this.changeLoanDuration(item) }}>
                    <Text style={MainStyle.h2}>{item}</Text>
                    <Text>хоног</Text>
                </TouchableOpacity>
            );
        }
    }
    return (
        <View style={{ flex: 1 }}>
            <Loader isLoading={isLoading} />
            {renderModalPayment()}
            <View style={styles.container}>
                <View>
                    <Text style={MainStyle.h6}>Зээлийн хугацаа</Text>
                    <View style={loan.btnContainer} >
                        {daysMap.map((item) => renderLoanDuration(item))}
                    </View>
                </View>
                <View>
                    <View style={[MainStyle.infoMid, { marginTop: 0, }]}>
                        <View style={MainStyle.infoMidCon}>
                            <Text style={MainStyle.infoLeftItem}>Үндсэн төлбөр</Text>
                            <Text style={MainStyle.infoRightItem}>{helper.formatValue(loanInfo.pBal)}₮</Text>
                        </View>
                    </View>
                    <View style={MainStyle.infoMid}>
                        <View style={MainStyle.infoMidCon}>
                            <Text style={MainStyle.infoLeftItem}>Үндсэн шимтгэл</Text>
                            <Text style={MainStyle.infoRightItem}>{helper.formatValue(loanInfo.iBal)}₮</Text>
                        </View>
                    </View>
                    <View style={MainStyle.infoMid}>
                        <View style={MainStyle.infoMidCon}>
                            <Text style={MainStyle.infoLeftItem}>Зээлийн хүү</Text>
                            <Text style={MainStyle.infoRightItem}>{helper.formatValue(loanInfo.lBal)}₮</Text>
                        </View>
                    </View>
                    <View style={MainStyle.infoMid}>
                        <View style={MainStyle.infoMidCon}>
                            {/* <Text style={MainStyle.infoLeftItem}>Хугацааны дараа төлөх шимтгэл</Text> */}
                            {/* <Text style={MainStyle.infoRightItem}>{Helper.formatValue(loanInterestAmount)}₮</Text> */}
                            <Text style={[MainStyle.infoLeftItem, { maxWidth: '70%' }]}>Хугацааны дараа төлөх шимтгэл</Text>
                            <Text style={[MainStyle.infoRightItem, { justifyContent: 'flex-end', alignItems: 'flex-end' }]}>
                                {helper.formatValue(loanInterestAmount)}₮</Text>
                        </View>
                    </View>
                    <View style={[MainStyle.infoMid, { marginBottom: 20, }]}>
                        <View style={MainStyle.infoMidCon}>
                            <Text style={MainStyle.infoLeftItem}>Төлөх хугацаа</Text>
                            <Text style={MainStyle.infoRightItem}>{helper.formatDatetime(calculateDueDate())}</Text>
                        </View>
                    </View>
                </View>
                <View style={row3.container}>
                    <View style={MainStyle.btnContainer}>
                        <TouchableOpacity
                            style={MainStyle.buttonPurple}
                            onPress={() => extendLoan()}>
                            <Text style={MainStyle.btnTextLight}>Зээл сунгах</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );


}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: height,
        backgroundColor: '#fff',
        paddingHorizontal: 20
    },
    modalDivider: {
        width: '100%',
        backgroundColor: '#fff',
        height: 15
    },
    modalBtn: {
        position: 'absolute',
        top: 30, right: 30,
        zIndex: 10000,
        padding: 10,
    },
    modalBtnIcon: {
        color: '#333',
        fontSize: 18
    },
});

const loan = StyleSheet.create({
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '100%',
        paddingTop: 20,
        paddingBottom: 30,
    },
    btn: {
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
    btnActive: {
        backgroundColor: '#f95e00',
        color: '#ffffff'
    },
    btnSimple: {
        borderWidth: 1,
        borderColor: '#e6e6e6',
    },
    btnDisabled: {
        borderWidth: 1,
        borderColor: '#f6f6f6',
    },
    durItemBottom: {
        color: '#ffffff',
    },
    emptyContainer: {
        width: '100%',
        height: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    emptyText: {
        color: '#333',
        fontSize: 16,
        textAlign: 'center'
    },
});
const row3 = StyleSheet.create({
    container: {
        paddingTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    }
});