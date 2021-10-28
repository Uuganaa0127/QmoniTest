import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    Modal,
    TouchableOpacity,
    View,
    FlatList,
} from 'react-native';
import { regs } from '/Qmonitest/src/helper';
import MainStyle from '/Qmonitest/src/components/styles/MainStyle';
import Images from '../../constants/Images';
// import MainStyle from '/qmonitest/src/components/styles/mainstyle';
export default function index(
    { errortext, onPress, source, title, }

) {
    return (
        <View>
            <TouchableOpacity
                onPress={
                    onPress
                }
                style={MainStyle.rowCenter}>
                <View style={MainStyle.leftMR5, { paddingStart: 30 }}>
                    <Image
                        style={MainStyle.checkboxStyle}
                        source={
                            source
                        }
                    />
                </View>
                <View style={MainStyle.leftFlexJustStartPH5}>
                    <Text style={MainStyle.txtUser}>{title}</Text>
                </View>
            </TouchableOpacity>
            {
                errortext != '' ? (
                    <Text style={MainStyle.errorTextStyle, { paddingStart: 30, paddingTop: 10, color: 'red' }}>
                        {errortext}
                    </Text>
                ) : null
            }
        </View>
    )
}
const formList = StyleSheet.create({



})