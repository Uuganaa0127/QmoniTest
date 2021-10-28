import React, { useState } from 'react'
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
    TouchableOpacity,
    StatusBar,
    ScrollView
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import mainStyle from '/Qmonitest/src/components/styles/MainStyle'
import Checkboxbonus from '/Qmonitest/src/components/CheckboxBonus/index'
import Images from '/qmonitest/src/constants/Images';
const CB_ENABLED_IMAGE = Images.checked;
const CB_DISABLED_IMAGE = Images.unchecked;
export default function App({ isRememberUser }) {
    const [test1, settest] = useState(false);
    const [test2, settest2] = useState(false);
    return (
        <View style={home.container}>
            <View style={mainStyle.headerContainer}>
                <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
                <TouchableOpacity>
                    <Icon style={mainStyle.headerText} name="arrow-left" />
                </TouchableOpacity>
                <Text style={mainStyle.headerText}>{'Урамшуулал'.toUpperCase()}</Text>
                <TouchableOpacity>
                    <Icon style={mainStyle.headerText} name="bell" />
                </TouchableOpacity>
            </View>
            <View style={{ paddingVertical: 70, width: '100%', paddingHorizontal: 20, }}>
                <Text style={{ color: '#666666', fontSize: 14, marginBottom: 20, }}>Таны зээлийн боломжит дүнгээс шимтгэл тооцов.</Text>
                <ScrollView >
                    <View>
                        <Text style={bonusItem.loandur}>30 хоног</Text>
                        <View style={bonusItem.itemBody}>
                            <View style={{ flexDirection: 'row', }}>
                                <Text>53,400</Text>
                                <Text>₮</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Checkboxbonus
                                    onPress={() => {
                                        settest(!test1)
                                    }}
                                    onPress2={() => {
                                        settest2(!test2)
                                    }}
                                    isEnable={test1}
                                    isEnable2={test2}
                                    source={test1 ? Images.checked : Images.unchecked}
                                    source2={test2 ? Images.checked : Images.unchecked}
                                />
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderTopColor: '#e6e6e6', borderTopWidth: 1, marginTop: 15, paddingTop: 15, }}>
                                <Text>140,900₮</Text>
                                <Text>53,400₮</Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <Text style={bonusItem.loandur}>30 хоног</Text>
                        <View style={bonusItem.itemBody}>
                            <View style={{ flexDirection: 'row', }}>
                                <Text>53,400</Text>
                                <Text>₮</Text>
                            </View>
                            <View></View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderTopColor: '#e6e6e6', borderTopWidth: 1, marginTop: 15, paddingTop: 15, }}>
                                <Text>140,900₮</Text>
                                <Text>53,400₮</Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <Text style={bonusItem.loandur}>30 хоног</Text>
                        <View style={bonusItem.itemBody}>
                            <View style={{ flexDirection: 'row', }}>
                                <Text>53,400</Text>
                                <Text>₮</Text>
                            </View>
                            <View></View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderTopColor: '#e6e6e6', borderTopWidth: 1, marginTop: 15, paddingTop: 15, }}>
                                <Text>140,900₮</Text>
                                <Text>53,400₮</Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <Text style={bonusItem.loandur}>30 хоног</Text>
                        <View style={bonusItem.itemBody}>
                            <View style={{ flexDirection: 'row', }}>
                                <Text>53,400</Text>
                                <Text>₮</Text>
                            </View>
                            <View></View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderTopColor: '#e6e6e6', borderTopWidth: 1, marginTop: 15, paddingTop: 15, }}>
                                <Text>140,900₮</Text>
                                <Text>53,400₮</Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <Text style={bonusItem.loandur}>30 хоног</Text>
                        <View style={bonusItem.itemBody}>
                            <View style={{ flexDirection: 'row', }}>
                                <Text>53,400</Text>
                                <Text>₮</Text>
                            </View>
                            <View></View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderTopColor: '#e6e6e6', borderTopWidth: 1, marginTop: 15, paddingTop: 15, }}>
                                <Text>140,900₮</Text>
                                <Text>53,400₮</Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <Text style={bonusItem.loandur}>30 хоног</Text>
                        <View style={bonusItem.itemBody}>
                            <View style={{ flexDirection: 'row', }}>
                                <Text>53,400</Text>
                                <Text>₮</Text>
                            </View>
                            <View></View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderTopColor: '#e6e6e6', borderTopWidth: 1, marginTop: 15, paddingTop: 15, }}>
                                <Text>140,900₮</Text>
                                <Text>53,400₮</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
            <View style={menu.container}></View>
        </View >
    );
}

const home = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center',
        // paddingHorizontal: 30,
        backgroundColor: '#ffffff',
    },
});
const header = StyleSheet.create({
    container: {
        display: 'flex',
        position: 'absolute',
        top: 0,
        backgroundColor: '#3842b7',
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        width: '100%',
        height: 50,
        alignItems: 'center'
    },
    headerText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 14,
    },
});

const bonusItem = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        flexDirection: 'row',
        // alignItems: 'center'
    },
    itemBody: {
        backgroundColor: '#fafafa',
        padding: 20,
        marginBottom: 30
    },
    loandur: {
        marginBottom: 18
    }
});
const menu = StyleSheet.create({

});
