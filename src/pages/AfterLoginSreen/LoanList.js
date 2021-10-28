import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView, RefreshControl, FlatList
} from 'react-native'
import MainStyle from "../../components/styles/MainStyle";
import Loader from "/Qmonitest/src/components/Loader/index";
import MainHeader from '/Qmonitest/src/components/Mainheader/index'
import Helper from "/qmonitest/src/help";
import Images from "/qmonitest/src/constants/Images";
export default function LoanList({ navigation }) {
    const [isLoading, setisLoading] = useState(false);
    const [refreshing, setisrefreshing] = useState(false);
    const [page, setpage] = useState(0);
    const [loans, setloans] = useState([
        { loanAmount: 1150000, startDate: 11202021, classCode: 'NORMAL' },
        { loanAmount: 120000, startDate: 20210212, classCode: 'OVERDUE' }]);
    const [isAprroved, setisApproved] = useState(false);
    const [loadingMore, setloadingMore] = useState(false);
    const [loanAmount, setloanAmount] = useState(0);

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
    const _onRefresh = () => {
        setisrefreshing(true);
        setisLoading(true);
        setpage(0),
            () => { fetchLoans('1'); }
    }
    const _onEndReached = () => {
        if (!loadingMore) {
            let page = page + 1;
            setloadingMore(true)
            setpage(page), () => { fetchLoans('2'); }
        }
    }

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
    return (
        <View style={MainStyle.mainContainer}>
            <Loader isLoading={isLoading} />
            <View style={MainStyle.scrollContainer}>
                <View style={MainStyle.tblHead}>
                    <Text style={[MainStyle.tblHeadCol1]}>Авсан зээл</Text>
                    <Text style={[MainStyle.tblHeadCol2]}>Авсан</Text>
                    <Text style={[MainStyle.tblHeadCol3]}>Төлөв</Text>
                    <Text style={[MainStyle.tblHeadCol4]}></Text>
                </View>

                <View style={MainStyle.tblRowCon}>
                    <FlatList
                        data={loans}
                        renderItem={renderRow}
                        keyExtractor={item => 'll_' + item.loanId}
                        onEndReachedThreshold='0'
                        onEndReached={_onEndReached}
                        // ListFooterComponent={_renderFooter}
                        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={_onRefresh} />}
                    />
                </View>

            </View>
        </View>
    );
}
const getloan = StyleSheet.create({
    btnContainer: {
        width: 240,
        paddingVertical: 30
    },
    buttonPurple: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3842b7',
        borderWidth: 0,
        borderRadius: 50,
        height: 32,
        width: 32,
        lineHeight: 32,
    },
    btnTextLight: {
        fontFamily: 'Roboto',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        fontSize: 12,
    },
});
