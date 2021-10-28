// import styled from 'styled-components/native'
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, style, TextInput, } from "react-native";
// import MainStyle from "d:/qmonitest/src/components/styles/mainstyle";
import MainStyle from '../../components/styles/MainStyle';
// import * as yup from 'yup'

export default function index({ title, host, errortext, numvalue, validate, onChangeText, mobileNumbervalidation }) {
    return (
        <View style={MainStyle.formItem}>
            <Text style={MainStyle.txtFormItemTitle, {}}>{title}</Text>
            <TextInput
                value={numvalue}
                maxLength={8}
                keyboardType='number-pad'
                onChangeText={onChangeText}
                // style={MainStyle.inputbox, mobileNumbervalidation ? formList.bordervalid : formList.borderinvalid}
                style={MainStyle.inputbox}
            />
            {
                errortext != '' ? (
                    <Text style={formList.errorTextStyle}>
                        {errortext}
                    </Text>
                ) : null
            }
        </View >
    )
}
const formList = StyleSheet.create({
    errorTextStyle: {
        color: 'red',
        fontSize: 14,
    },
    bordervalid: {
        borderWidth: 0,
        borderColor: 'grey'
    },
    borderinvalid: {
        borderWidth: 1,
        borderColor: 'red'
    }

})
