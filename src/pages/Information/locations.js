import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
    TouchableOpacity,
    StatusBar,
    ScrollView,
    Slider,
    Dimensions,
    WebView
} from 'react-native'
import MainStyle from '../../components/styles/MainStyle';

export default function App() {
    return (
        <View style={MainStyle.mainContainer}>
            <View style={[MainStyle.scrollContainer, { marginTop: 70 }]}>
                <ScrollView>
                    <View>
                        <View style={{ height: Dimensions.get('window').height / 2 }}>
                            <WebView
                                source={{ uri: 'https://qmoni.mn/mobile/location' }}
                                style={{ height: '100%', width: '100%' }}
                                onLoadEnd={() => { this.setState({ isLoading: false }) }}
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}


const location = StyleSheet.create({
    lisContainer: {
        paddingHorizontal: 20,
        paddingVertical: 25,
    },
});