// import styled from 'styled-components/native'
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, errortext, } from "react-native";
import MainStyle from '../../components/styles/MainStyle';
export default function index({ title, host, validate, errortext, onChangeText }) {
  return (
    <View style={MainStyle.formItem}>
      <Text style={MainStyle.txtFormItemTitle}>{title}</Text>
      <TextInput
        onChangeText={onChangeText}
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
})
