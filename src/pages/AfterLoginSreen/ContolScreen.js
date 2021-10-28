import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView, RefreshControl } from 'react-native';
import Container from '/Qmonitest/src/components/Container/Index';
import Button from '/Qmonitest/src/components/Button/Index';
import Images from '/Qmonitest/src/constants/Images';
import MainStyle from "/Qmonitest/src/components/styles/MainStyle";
import Helper from '/Qmonitest/src/help/index'
import LoanList from "./LoanList";
import Mainheader from '/Qmonitest/src/components/Mainheader/index'
export default function ControlScreen({ navigation }) {
    const [LoanBalance, setLoanBalance] = useState('1000000');
    const [isShowScore, setisShowScore] = useState(false);
    const [userMaxLoanAmount, setuserMaxLoanAmount] = useState('');
    const [userPossibleLoanAmount, setuserPossibleLoanAmount] = useState(0);
    const [refreshing, setrefreshing] = useState(false);
    const [isLoading, setisLoading] = useState(false)
    const [loans, setloans] = useState([
        { loanAmount: 1150000, startDate: 11202021, classCode: 'NORMAL' },
        { loanAmount: 120000, startDate: 20210212, classCode: 'OVERDUE' },
        { loanAmount: 1150000, startDate: 11202021, classCode: 'NORMAL' },
        { loanAmount: 120000, startDate: 20210212, classCode: 'OVERDUE' },
        { loanAmount: 1150000, startDate: 11202021, classCode: 'NORMAL' },
        { loanAmount: 120000, startDate: 20210212, classCode: 'OVERDUE' }]);

    const renderRow = ({ item }) => {
        return (
            <View style={MainStyle.tblRow} key={'row_' + item.loanId}>
                <View style={MainStyle.tblContentCol1}>
                    <Text style={MainStyle.text}>{Helper.formatValue(item.loanAmount)}₮</Text>
                </View>
                <Text style={MainStyle.tblContentCol2}>{Helper.formatDatetime(item.startDate)}</Text>
                <View style={MainStyle.tblContentCol3}>
                    {renderItemInfo(item.classCode)}
                </View>
                <View style={MainStyle.tblContentCol4}>
                    <TouchableOpacity style={MainStyle.loanMoreBtn} onPress={() => navigation.navigate('LoanDetails',
                        { loanId: item.loanId, accountId: item.accountId })}>
                        {/* {
                            (item.statusId == 1001) ?
                                <Icon name="check" style={[MainStyle.btnTextLight, MainStyle.loanMoreText]}></Icon>
                                :
                                <Icon name="ellipsis-h" style={[MainStyle.btnTextLight, MainStyle.loanMoreText]}></Icon>
                        } */}
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
    const flathead = () => {
        return (
            <View style={MainStyle.scrollContainer}>
                <View style={row1.container}>
                    <View style={row1.leftIcon}>
                        <Image
                            style={loadstyles.imageStyle}
                            source={Images.LoanIcon}
                        />
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={MainStyle.h1}>0</Text>
                            <Text style={MainStyle.currencyBig}>₮</Text>
                        </View>
                        <Text style={MainStyle.txtSubTitle}>Нийт зээлийн эрх</Text>
                    </View>
                    <View style={row1.rightIcon}></View>
                </View>
                <View style={row2.container}>
                    <View style={row2.col}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={MainStyle.h2}>{Helper.formatValue(userMaxLoanAmount - userPossibleLoanAmount)}</Text>
                            <Text style={MainStyle.currencySmall}>₮</Text>
                        </View>
                        <Text style={MainStyle.txtSubTitle}>Авсан зээлийн хэмжээ</Text>
                    </View>
                    <View style={[row2.col, { borderLeftWidth: 1, borderLeftColor: '#e6e6e6', }]}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={MainStyle.h2}>{Helper.formatValue(userPossibleLoanAmount > 0 ? userPossibleLoanAmount : 0)}</Text>
                            <Text style={MainStyle.currencySmall}>₮</Text>
                        </View>
                        <Text style={MainStyle.txtSubTitle}>Боломжит зээлийн эрх</Text>
                    </View>
                </View>
                <View style={row3.container}>
                    <View style={MainStyle.btnContainer}>
                        <TouchableOpacity style={[MainStyle.buttonPurple]}
                            //  disabled={true}
                            onPress={() => navigation.navigate('LoanScreen')}>
                            {/*  {backgroundColor:'#cc6c23'} */}
                            <Text style={MainStyle.btnTextLight}>Зээл авах</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={MainStyle.tblHead} >
                    <Text style={[MainStyle.tblHeadCol1]}>Авсан зээл</Text>
                    <Text style={[MainStyle.tblHeadCol2]}>Авсан</Text>
                    <Text style={MainStyle.tblHeadCol3}>Төлөв</Text>
                    <Text style={MainStyle.tblHeadCol4}></Text>
                </View>
            </View>

        )
    }
    const _onRefresh = () => {
        setrefreshing(true);
        setisLoading(true);
        setpage(0),
            () => { fetchLoans('1'); }
    }
    const _onEndReached = () => {
        navigation.navigate('LoanList');
    }
    const renderItemInfo = (classCode) => {
        let classInfo = classCode;
        let isApproved = false;
        switch (classCode) {
            case 'NORMAL':
                classInfo = 'Хэвийн';
                isApproved = true;
                break;
            case 'OVERDUE':
                classInfo = 'Хугацаа хэтэрсэн';
                break;
            case 'BLACKLISTED':
                classInfo = 'Хар жагсаалт';
                break;
            case 'INACTIVE':
                classInfo = 'Идэвхигүй';
                break;
            default:
                break;
        }
        return (
            <View style={(isApproved) ? MainStyle.loanStatusApproved : MainStyle.loanStatusNotApproved}>
                <Text style={(isApproved) ? MainStyle.loanStatusApprovedText : MainStyle.loanStatusNotApprovedText}>{classInfo}</Text>
            </View>
        );
    }
    return (
        <View style={MainStyle.tblRowCon}>
            {/* <Mainheader headerLabel={'ҮнэдсэнЦэс'} showNotification={true} isGoBack={false} /> */}
            {/* <ScrollView contentContainerStyle={{ height: '100%' }}
                        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={_onRefresh} />}> */}
            <FlatList
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                ListHeaderComponent={flathead}
                scrollEnabled={true}
                data={loans}
                renderItem={renderRow}
                // keyExtractor={item => 'll_' + item.loanId}
                onEndReachedThreshold='0'
                onEndReached={_onEndReached}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={_onRefresh}
                />}
            />
            {/* </ScrollView> */}
        </View>


    );
}
const row1 = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 35,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    leftIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f95e00',
        borderRadius: 50,
        width: 50,
        height: 50,
    },
    rightIcon: {
        width: 50,
    },
    dashIcon: {
        color: '#fff',
        fontSize: 20,
    },

});
const row2 = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#e6e6e6',
        borderTopWidth: 1,
        borderTopColor: '#e6e6e6',
    },
    col: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        paddingVertical: 36,
    },
});
const row3 = StyleSheet.create({
    container: {
        paddingVertical: 30,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    }
});
const loadstyles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    loandicon: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 60,
        borderRadius: 100 / 2,
        backgroundColor: '#F95E00',
    },
    imageStyle: {
        width: 30,
        height: 30,
    },
    Topstyle: {
        flexDirection: "row"
    }
}
)