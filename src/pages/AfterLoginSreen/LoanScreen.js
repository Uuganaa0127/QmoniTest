import React, { useState } from "react";
import { Text, View, TouchableOpacity, StatusBar, Platform, Dimensions, StyleSheet, ScrollView, Image } from 'react-native';
import Helper from "/qmonitest/src/help/index";
import MainHeader from '/Qmonitest/src/components/Header/index';
import Loader from '/Qmonitest/src/components/Loader/index';

import Slider from '/Qmonitest/src/components/slider/index'
import MainStyle from "../../components/styles/MainStyle";
import MultiSlider from '@esteemapp/react-native-multi-slider';
import Images from "/qmonitest/src/constants/Images";
const { width, height } = Dimensions.get('window');
export default function LoanScreen({ navigation }) {
    const [nonCollidingMultiSliderValue, setNonCollidingMultiSliderValue] =
        useState(0);
    const nonCollidingMultiSliderValuesChange = values => {
        setNonCollidingMultiSliderValue(values[0]);
        // calcLoan();
    };
    const daysMap = [15, 30];
    const [loanDuration, setloanDuration] = useState(daysMap[0])
    const [isLoading, setisLoading] = useState(false);
    const [minAmount, setminAmount] = useState(0);
    const [maxAmount, setmaxAmount] = useState(100);
    const [loanAmount, setloanAmount] = useState(0);
    const [loanInterestPercent, setloanInterestPercent] = useState(0);
    const [loanInterestAmount, setloanInterestAmount] = useState(0);
    const [test, settest] = useState(0);
    const calculateDueDate = () => {
        let today = new Date();
        today.setDate(today.getDate() + loanDuration);
        return today.getTime();
    }
    const formatDatetime = (input) => {
        if (input) {
            var t = new Date(input);
            let month = ('00' + (t.getMonth() + 1)).slice(-2);
            let day = ('00' + t.getDate()).slice(-2);
            return t.getFullYear() + '/' + month + '/' + day;
        }
        return input;
    }
    const calculateLoanInterest = () => {
        // this.setState({ isLoading: true });
    }
    const changeLoanDuration = (value) => {
        setloanDuration(value), () => calculateLoanInterest()
    }
    const renderLoanDuration = (item) => {
        if (loanDuration == item) {
            return (
                <TouchableOpacity
                    key={'duration_' + item} style={[loan.btn, loan.btnActive]}
                    onPress={() => { changeLoanDuration(item) }}
                >
                    <Text style={MainStyle.h2White}>{item}</Text>
                    <Text style={loan.durItemBottom}>хоног</Text>
                </TouchableOpacity>
            );
        } else {
            return (
                <TouchableOpacity
                    key={'duration_' + item} style={[loan.btn, loan.btnSimple]}
                    onPress={() => { changeLoanDuration(item) }}>
                    <Text style={MainStyle.h2}>{item}</Text>
                    <Text>хоног</Text>
                </TouchableOpacity>
            );
        }
    }

    const renderBody = () => {
        if ((minAmount > maxAmount)) {
            return (
                <View style={loan.emptyContainer}>
                    <Text style={loan.emptyText}>Таны зээлийн эрх хамгийн бага зээлийн хэмжээнээс бага байна</Text>
                </View>
            );
        } else {
            return (
                <View style={[MainStyle.scrollContainer]}>
                    <ScrollView>
                        <View style={MainStyle.contentContainer}>
                            <View style={volumeOfCredit.container}>
                                <Text style={MainStyle.h6}>Зээлийн хэмжээ</Text>
                                <View style={volumeOfCredit.sliderContainer}>
                                    <View style={volumeOfCredit.thisValCon}>
                                        <Text style={MainStyle.h1}>{Helper.formatValue(loanAmount)}</Text>
                                        <Text style={volumeOfCredit.thisCurrency}>₮</Text>
                                    </View>
                                    <View style={{ position: 'relative', paddingTop: 20, paddingStart: 20, backgroundColor: '#fafafa', }}>
                                        <Slider
                                            style={volumeOfCredit.Slider1}
                                            sliderchangeValues={val => setloanAmount(val)}
                                            maxAmount={maxAmount}
                                        />
                                        {/* <Slider
                                        
                                            step={10}
                                            minimumValue={minAmount}
                                            maximumValue={maxAmount}
                                            value={loanAmount}
                                            onValueChange={val => setloanAmount(val)}
                                            thumbTintColor={'#f95e00'}
                                            thumbStyle={volumeOfCredit.thumb}
                                            // thumbImage={CB_ENABLED_IMAGE}
                                            maximumTrackTintColor='#999999'
                                            minimumTrackTintColor='#f95e00'
                                        /> */}
                                        <View style={volumeOfCredit.SliderBack} />

                                    </View>
                                    <View style={volumeOfCredit.textCon}>
                                        <Text style={volumeOfCredit.minMaxValue}>{Helper.formatValue(minAmount)}₮</Text>
                                        <Text style={volumeOfCredit.minMaxValue}>{Helper.formatValue(maxAmount)}₮</Text>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <Text style={MainStyle.h6}>Зээлийн хугацаа</Text>
                                <View style={loan.btnContainer} >
                                    {daysMap.map((item) => renderLoanDuration(item))}
                                </View>
                            </View>
                            <View>
                                <View style={[MainStyle.infoMid, { marginTop: 0, }]}>
                                    <View style={MainStyle.infoMidCon}>
                                        <Text style={MainStyle.infoLeftItem}>Нийт төлөх</Text>
                                        <Text style={MainStyle.infoRightItem}>{Helper.formatValue(loanAmount + loanInterestAmount)}₮</Text>
                                    </View>
                                </View>
                                <View style={MainStyle.infoMid}>
                                    <View style={MainStyle.infoMidCon}>
                                        <Text style={MainStyle.infoLeftItem}>Зээлийн хүү</Text>
                                        <Text style={MainStyle.infoRightItem}>{loanInterestPercent}%</Text>
                                    </View>
                                </View>
                                <View style={MainStyle.infoMid}>
                                    <View style={MainStyle.infoMidCon}>
                                        <Text style={MainStyle.infoLeftItem}>Шимтгэл</Text>
                                        <Text style={MainStyle.infoRightItem}>{Helper.formatValue(loanInterestAmount)}₮</Text>
                                    </View>
                                </View>
                                <View style={[MainStyle.infoMid, { marginBottom: 20, }]}>
                                    <View style={MainStyle.infoMidCon}>
                                        <Text style={MainStyle.infoLeftItem}>Төлөх хугацаа</Text>
                                        <Text style={MainStyle.infoRightItem}>{formatDatetime(calculateDueDate())}</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={row3.container}>
                                <View style={MainStyle.btnContainer}>
                                    <TouchableOpacity
                                        style={MainStyle.buttonPurple}
                                        onPress={() => navigation.navigate('LoanList')}
                                    >
                                        <Text style={MainStyle.btnTextLight}>Зээлийн хүсэлт илгээх</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            );
        }
    }
    return (
        <View style={MainStyle.mainContainer}>
            {/* <Loader isLoading={isLoading} /> */}
            {/* <MainHeader headerLabel={'Зээл авах'} showNotification={false} isGoBack={true} /> */}
            {renderBody()}
        </View >

    );

}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        elevation: 1,
        paddingVertical: 16,
    },
    slider: {
        width: 40,
        height: 40,
    },
    coin: {
        width: 24,
        height: 24,
        marginRight: 10,
    },
    coinBase: {
        width: '100%',
        backgroundColor: '#12263F',
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        paddingVertical: 16,
        paddingHorizontal: 25,
    },
});

const volumeOfCredit = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    sliderContainer: {
        paddingTop: 20,
        paddingBottom: 30,
        width: '100%',
        // flexDirection: 'column'
    },
    Slider: {
        // width: '100%',
        // height: 40,
        marginBottom: 20,
        transform: [{ scaleX: 1.09 }, { scaleY: 1.3 }],
        width: - 80,
        alignSelf: 'center'
    },
    Slider1: {
        height: 40,
        width: '100%',
        // marginBottom: 5,
        zIndex: 10
    },
    SliderBack: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: 20,
        backgroundColor: '#fafafa',
        zIndex: 1
    },
    thisValCon: {
        backgroundColor: '#fafafa',
        padding: 20,
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingBottom: 0,
    },
    textCon: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    minMaxValue: {
        color: '#cccccc',
        fontSize: 11
    },
    thisCurrency: {
        color: '#d4d4d4',
        fontSize: 24
    },
    thumb: {
        width: 100,
        height: 100,
        borderRadius: 32 / 2,
        backgroundColor: '#3842b7',
        padding: 30,
        margin: 30,
        shadowColor: 'black',
        // shadowOffset: { width: 0, height: 2 },
        shadowRadius: 2,
        shadowOpacity: 0.35,
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
        // height: 50,
        // width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        // marginRight: 10,

        marginHorizontal: 5,
        height: 50,
        flex: 1
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