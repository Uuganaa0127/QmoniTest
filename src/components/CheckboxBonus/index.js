import React from "react";
import {
    Image,
    StyleSheet,
    Text,
    Modal,
    TouchableOpacity,
    View,
    FlatList,
} from 'react-native';
import MainStyle from '/Qmonitest/src/components/styles/MainStyle';
import Images from '../../constants/Images';

export default function index({ source, source2, source3, onPress2, onPress, isEnable, isEnable2 }) {
    return (
        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 10 }}>
                <Text style={{ alignSelf: 'flex-start', paddingEnd: 57, color: 'black' }}>510,000₮</Text>
                <Text style={{ alignSelf: 'center', paddingEnd: 57, color: 'black' }}>510,000₮</Text>
                <Text style={{ alignSelf: 'center', paddingHorizontal: 0, color: 'black' }}>510,000₮</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={
                        onPress
                    }>
                    <Image
                        style={{ alignSelf: 'center', paddingHorizontal: 0, width: 16, height: 16 }}
                        source={source}
                    />
                </TouchableOpacity>
                <View style={{
                    width: '40%',
                    borderRadius: 2,
                    height: 4,
                    backgroundColor: isEnable ? '#F95E00' : '#CED8E7',
                    marginRight: 0,
                }} />
                <TouchableOpacity
                    onPress={
                        onPress2
                    }>
                    <Image
                        style={{ alignSelf: 'center', paddingHorizontal: 0, width: 16, height: 16 }}
                        source={source2}
                    />
                </TouchableOpacity>
                <View style={{
                    width: '40%',
                    borderRadius: 2,
                    height: 4,
                    backgroundColor: isEnable2 ? '#F95E00' : '#CED8E7',
                    marginRight: 0,
                }} />
                <Image
                    style={{ alignSelf: 'center', paddingHorizontal: 0, width: 16, height: 16 }}
                    source={source3}
                />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 10, fontSize: 12 }}>
                <Text style={{ alignSelf: 'center', paddingEnd: 59, color: 'black' }} >
                    Эхний{"\n"}
                    төлөлт</Text>
                <Text style={{ alignSelf: 'center', paddingEnd: 59, color: 'black', textAlign: 'center', fontSize: 12 }}>
                    Хоёрдохь{"\n"}
                    төлөлт</Text>
                <Text style={{ alignSelf: 'center', paddingHorizontal: 0, color: 'black', textAlign: 'center', fontSize: 12 }}>
                    Гуравдахь{"\n"}
                    төлөлт</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 10 }}>
                <Text style={{ alignSelf: 'flex-start', paddingEnd: 10, textAlign: 'center', fontSize: 10 }} >
                    2018/11/15</Text>
                <Text style={{ alignSelf: 'center', paddingHorizontal: 50, fontSize: 10, textAlign: 'center' }}>
                    2018/12/15</Text>
                <Text style={{ alignSelf: 'center', paddingHorizontal: 10, fontSize: 10, textAlign: 'center' }}>
                    2019/01/15 </Text>
            </View>
        </View >
    )
}