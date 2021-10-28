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
import Images from '/Qmonitest/src/constants/Images';
import MainStyle from '/Qmonitest/src/components/styles/MainStyle';
export default function index(
    { title, onPress, modaltitle, errortext }
) {
    return (
        <View>
            <Text style={formList.txtFormItemTitle}>{title}</Text >
            <TouchableOpacity
                style={formList.touchable}
                onPress={onPress}>
                <Text style={formList.toucText}>{modaltitle}</Text>
                <Image
                    style={formList.image}
                    source={Images.downarrow}
                ></Image>
            </TouchableOpacity>
            {
                errortext != '' ? (
                    <Text style={formList.errorTextStyle}>
                        {errortext}
                    </Text>
                ) : null
            }
        </View>
    )
}
const formList = StyleSheet.create({
    touchable: {
        // marginRight: 20,
        marginLeft: 20,
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'center',
        paddingStart: 10,
        // paddingEnd: 50,
        paddingRight: 10,
        justifyContent: 'flex-start',
        height: 40,
        backgroundColor: '#fafafa',
        // borderRadius: 20,
        // color: '#999999',
        // borderColor: '#912',
        marginBottom: 10
    },
    txtFormItemTitle: {
        justifyContent: 'center',
        paddingStart: 20,
        marginBottom: 10
    },

    container: {
        paddingHorizontal: 20,
        width: '100%'
    },
    errorTextStyle: {
        color: 'red',
        textAlign: 'center',
        fontSize: 14,
    },
    image: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        position: 'absolute', top: 13, left: 350, right: 0, bottom: 0, alignItems: 'center',
        width: 15,
        height: 15,
        resizeMode: "contain"
    },
    toucText: {
        color: '#444444',
        fontWeight: '700',
        fontSize: 14,
    },
});
