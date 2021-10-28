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
    { onPress, source, title, }

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

        </View>
    )
}
const formList = StyleSheet.create({



})