import React from "react";
import { Text, View, Dimensions, StyleSheet, TouchableOpacity, Image, Alert, ScrollView, Platform, Modal, TextInput, RefreshControl } from 'react-native';
import MainStyle from '/Qmonitest/src/components/styles/MainStyle';
import Images from '/Qmonitest/src/constants/Images';
const { width, height } = Dimensions.get('window');
const headerContainerHeight = (height >= 812 && Platform.OS == 'ios') ? 80 : 60;
export default function index({ onPress, title, icon }) {
    return (
        <View style={[MainStyle.listItemBr, { borderTopColor: '#e6e6e6', borderTopWidth: 1, }]}>
            <TouchableOpacity style={MainStyle.listItem} onPress={onPress}>
                <View style={MainStyle.listItemContainer}>
                    <View style={MainStyle.iconCon}>
                        {/* <Icon  name="user"  */}
                        <Image style={MainStyle.iconBefore} source={icon}
                        />
                    </View>
                    <Text style={MainStyle.txtTitle}>{title}</Text>
                </View>
                <View>
                    <Image style={MainStyle.iconBefore1} source={Images.rightarrow} resizeMode="contain" />
                </View>
            </TouchableOpacity>
        </View>
    )
}