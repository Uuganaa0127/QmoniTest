import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Modal } from 'react-native';
import Images from '/qmonitest/src/constants/Images';
import MainStyle from '../../components/styles/MainStyle';
import Loader from '/Qmonitest/src/components/Loader/index';
import Helper from '/qmonitest/src/help/index';
import Icon from 'react-native-vector-icons/FontAwesome5';

import LoanExtendScreen from './LoanExtendScreen';
import LoanPaymentScreen from './LoanPaymentScreen';
import Checkboxbonus from '/Qmonitest/src/components/CheckboxBonus/index'
export default function LoanDetails({ loanId }) {
    const [userId, setuserID] = useState(null);
    const [isLoading, setisLoading] = useState(false);
    const [modalVisible, setmodalVisible] = useState(false);
    const [loanInfo, setloanInfo] = useState([]);
    const [modalVisiblePayment, setmodalVisiblePayment] = useState(false);
    const [modalVisibleExtend, setmodalVisibleExtend] = useState(false);
    const [accountId, setaccountID] = useState(0);
    const [test1, settest1] = useState(false);
    const [test2, settest2] = useState(false);
    const setModalVisiblePayment = (visible) => {
        setmodalVisiblePayment(visible);
    }
    const setModalVisibleExtend = (visible) => {
        setmodalVisibleExtend(visible);
    }
    const renderModalPayment = () => {
        return (
            <Modal
                animationType="none"
                transparent={false}
                visible={modalVisiblePayment}
                onRequestClose={() => {
                    console.log('Modal has been closed.');
                }}>
                <View style={{ padding: 30, backgroundColor: 'rgba(0,0,0,0.4)', height: '100%', width: '100%' }}>
                    <View style={cashbackOfCredit.modalDivider} />
                    <TouchableOpacity style={cashbackOfCredit.modalBtn} onPress={() => setModalVisiblePayment(false)} >
                        <Icon name="times" style={cashbackOfCredit.modalBtnIcon} />
                    </TouchableOpacity>
                    <LoanPaymentScreen amount={loanInfo.pBal + loanInfo.iBal + loanInfo.lBal} accountId={accountId} />
                </View>
            </Modal>
        );
    }
    const renderModalExtend = () => {
        return (
            <Modal
                animationType="none"
                transparent={false}
                visible={modalVisibleExtend}
                onRequestClose={() => {
                    console.log('Modal has been closed.');
                }}>
                <View style={{ padding: 30, backgroundColor: 'rgba(0,0,0,0.4)', height: '100%', width: '100%' }}>
                    <View style={cashbackOfCredit.modalDivider} />
                    <TouchableOpacity style={cashbackOfCredit.modalBtn} onPress={() => setModalVisibleExtend(false)} >
                        <Icon name="times" style={cashbackOfCredit.modalBtnIcon} />
                    </TouchableOpacity>
                    <LoanExtendScreen amount={loanInfo.pBal + loanInfo.iBal + loanInfo.lBal} loanId={loanId} />
                </View>
            </Modal>
        );
    }
    return (
        <View style={MainStyle.mainContainer}>
            <Loader isLoading={isLoading} />
            <View style={MainStyle.scrollContainer}>
                <ScrollView>
                    <View style={{ paddingHorizontal: 20 }}>
                        <Text style={MainStyle.h6}>Зээлийн хуваарь</Text>
                        <View style={cashbackOfCredit.bodyContainer}>
                            <Checkboxbonus
                                onPress={() => {
                                    settest1(!test1)
                                }}
                                onPress2={() => {
                                    settest2(!test2)
                                }}
                                isEnable={test1}
                                isEnable2={test2}
                                source={test1 ? Images.checked : Images.unchecked}
                                source2={test2 ? Images.checked : Images.unchecked}
                                source2={test2 ? Images.checked : Images.unchecked}
                            />
                        </View>
                    </View>
                    <View style={[MainStyle.contentContainer, { paddingTop: 20 }]}>
                        <View style={cashbackOfCredit.container}>
                            <Text style={MainStyle.h6}>Эргэн төлөлт</Text>
                            <View style={cashbackOfCredit.bodyContainer}>
                                <View style={[MainStyle.infoMid, { marginTop: 0, }]}>
                                    <View style={MainStyle.infoMidCon}>
                                        <Text style={[MainStyle.infoLeftItem, cashbackOfCredit.bgWhite]}>Зээлийн дугаар</Text>
                                        <Text style={[MainStyle.infoRightItem, cashbackOfCredit.bgWhite]}>#{loanId}</Text>
                                    </View>
                                </View>
                                <View style={MainStyle.infoMid}>
                                    <View style={MainStyle.infoMidCon}>
                                        <Text style={[MainStyle.infoLeftItem, cashbackOfCredit.bgWhite]}>Нийт эээлийн хэмжээ</Text>
                                        <Text style={[MainStyle.infoRightItem, cashbackOfCredit.bgWhite]}>{Helper.formatValue(loanInfo.amount)}₮</Text>
                                    </View>
                                </View>
                                <View style={MainStyle.infoMid}>
                                    <View style={MainStyle.infoMidCon}>
                                        <Text style={[MainStyle.infoLeftItem, cashbackOfCredit.bgWhite]}>Төлөх хугацаа</Text>
                                        <Text style={[MainStyle.infoRightItem, cashbackOfCredit.bgWhite]}>{Helper.formatDatetime(loanInfo.endDate)}</Text>
                                    </View>
                                </View>
                                <View style={MainStyle.infoMid}>
                                    <View style={MainStyle.infoMidCon}>
                                        <Text style={[MainStyle.infoLeftItem, cashbackOfCredit.bgWhite]}>Шимтгэл</Text>
                                        <Text style={[MainStyle.infoRightItem, cashbackOfCredit.bgWhite]}>{Helper.formatValue(loanInfo.interest)}₮</Text>
                                    </View>
                                </View>
                                <View style={MainStyle.infoMid}>
                                    <View style={MainStyle.infoMidCon}>
                                        <Text style={[MainStyle.infoLeftItem, cashbackOfCredit.bgWhite]}>Зээлийн хүү</Text>
                                        <Text style={[MainStyle.infoRightItem, cashbackOfCredit.bgWhite]}>{Helper.formatValue(loanInfo.lBal)}₮</Text>
                                    </View>
                                </View>
                                <View style={[MainStyle.infoMid, { marginBottom: 20, }]}>
                                    <View style={MainStyle.infoMidCon}>
                                        <Text style={[MainStyle.infoLeftItem, cashbackOfCredit.bgWhite]}>Төлөх төлбөр</Text>
                                        <Text style={[MainStyle.infoRightItem, cashbackOfCredit.bgWhite]}>{Helper.formatValue(loanInfo.pBal + loanInfo.iBal + loanInfo.lBal)}₮</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={MainStyle.btnWidth50}>
                            <View style={{ width: '50%' }}>
                                <TouchableOpacity style={[MainStyle.buttonBorder, { marginRight: 5 }]} onPress={() => setModalVisibleExtend(true)}>
                                    <Text style={MainStyle.btnTextGray}>Сунгах</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ width: '50%' }}>
                                <TouchableOpacity style={[MainStyle.buttonPurple, { marginLeft: 5 }]} onPress={() => setModalVisiblePayment(true)} >
                                    <Text style={MainStyle.btnTextLight}>Зээл төлөх</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View >
            {renderModalPayment()}
            {renderModalExtend()}
        </View >
    );
}
const cashbackOfCredit = StyleSheet.create({
    bodyContainer: {
        // width: '100%',
        padding: 20,
        marginVertical: 20,
        backgroundColor: '#fafafa'
    },
    bgWhite: {
        backgroundColor: '#fafafa'
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