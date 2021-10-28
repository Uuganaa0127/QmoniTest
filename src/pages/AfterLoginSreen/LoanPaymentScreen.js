import React, { useState } from 'react';
import {
    Dimensions, StyleSheet, Text, View, TouchableOpacity, Animated,
    StatusBar, ScrollView, Slider, ActivityIndicator, TouchableWithoutFeedback
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TabView, SceneMap } from 'react-native-tab-view';

import MainStyle from '../../components/styles/MainStyle';
import FirstPage from './byAcc';
// import SecondPage from './byQpay';

const { width, height } = Dimensions.get('window');

export default function LoanPayment({ amount, isExtend, accountId, navigationState }) {
    const [index, setindex] = useState(0)
    const [routes, setroutes] = useState([
        { key: 'first', title: 'ШИЛЖҮҮЛГЭЭР' },
        { key: 'second', title: 'QPAY-ЭЭР' }
    ])
    // const _handleIndexChange = index => setState({ index });
    const _renderTabBar = props => {
        const inputRange = routes.map((x, i) => i);
        return (
            <View style={styles.tabBar}>
                {routes.map((route, i) => {
                    const backgroundColor = props.position.interpolate({
                        inputRange,
                        outputRange: inputRange.map(
                            inputIndex => (inputIndex === i ? 'rgb(249,94,9)' : 'rgba(249,94,9,.6)')
                        ),
                    });
                    return (
                        <TouchableOpacity
                            key={'tab_' + i}
                            style={{ width: '47%' }}
                            onPress={() => setindex(i)}>
                            {/* <Animated.View style={[styles.tabItem, { backgroundColor: backgroundColor }]}> */}
                            <Text style={styles.tabItemText}>{route.title}</Text>
                            {/* </Animated.View> */}
                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    }
    const _renderScene = ({ route }) => {
        switch (route.key) {
            case 'first':
                return <FirstPage key={'route_first'} amount={amount} isExtend={isExtend} accountId={accountId} />;
            // case 'second':
            //     return <SecondPage key={'route_second'} amount={amount} loanId={loanId} accountId={accountId} />;
            default:
                return null;
        }
    }
    return (
        <View style={styles.container}>
            <TabView
                navigationState={{ index, routes }}
                renderScene={_renderScene}
                renderTabBar={_renderTabBar}
                onIndexChange={setindex}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: height,
        backgroundColor: '#fff'
    },
    tabBar: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 25,
        paddingHorizontal: 20,
    },
    tabItem: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f95e00',
        borderRadius: 50,
        // width: '47%',
        paddingVertical: 10
    },
    tabItemText: {
        color: '#fff',
        elevation: 0,
        shadowOpacity: 0,
        fontSize: 13
    },
});
