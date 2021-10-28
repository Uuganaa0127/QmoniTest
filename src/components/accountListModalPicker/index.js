import React from "react";
import { Text, View, Dimensions, StyleSheet, TouchableOpacity, Image, Alert, ScrollView, Platform, Modal, TextInput, RefreshControl } from 'react-native';
import MainStyle from '/Qmonitest/src/components/styles/MainStyle';
import Images from '/Qmonitest/src/constants/Images';
const { width, height } = Dimensions.get('window');
const headerContainerHeight = (height >= 812 && Platform.OS == 'ios') ? 80 : 60;
export default function index({ isShowAccModal, onpressicon, disabled, addacc, onchageaccountnum, onchangebankuser, firstName, }) {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={isShowAccModal}
            onRequestClose={() => {
                console.log('Modal has been closed.');
            }}>
            <View style={[styles.modalContainer]}>
                <TouchableOpacity style={[styles.exitButton]} onPress={onpressicon}>
                    {/* <IonIcon size={20} color={'#f95e00'} name="close" /> */}
                </TouchableOpacity>
                <View style={[styles.modalBody]}>
                    <Text style={[styles.modalTitle]}>{'Банкны данс холбох'}</Text>
                    <ScrollView style={[{ width: '100%' }]}>
                        <Text style={MainStyle.txtFormItemTitle}>Банк</Text>
                        <View style={MainStyle.formItem}>
                            <Text style={MainStyle.txtFormItemTitle}>Дансны дугаар</Text>
                            <TextInput
                                keyboardType='numeric'
                                onChangeText={onchageaccountnum}
                                style={MainStyle.inputbox}
                            />
                        </View>
                        <View style={MainStyle.formItem}>
                            <Text style={MainStyle.txtFormItemTitle}>Данс эзэмшигчийн нэр</Text>
                            <TextInput
                                value={firstName}
                                style={MainStyle.inputbox}
                                onChangeText={onchangebankuser}
                            />
                        </View>
                    </ScrollView>
                    <TouchableOpacity disabled={disabled} style={[styles.modalButton]} onPress={addacc}>
                        <Text style={[styles.modalButtonText]}>{'Бүртгүүлэх'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: 30,
        flex: 1,
        height: height - headerContainerHeight,
        width: width
    },
    warningText: {
        fontSize: 16,
        color: '#555',
        textAlign: 'center'
    },
    addAccContainer: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: '15%'
    },
    addButton: {
        height: 60,
        width: 60,
        borderRadius: 30,
        backgroundColor: '#f95e00',
        marginHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalContainer: {
        // flex: 1,
        width: width,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
        backgroundColor: 'rgba(117,117,117,0.4)'
    },
    modalBody: {
        width: '100%',
        alignItems: 'center',
        borderRadius: 8,
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 30,
        backgroundColor: '#fff'
    },
    modalTitle: {
        fontSize: 16,
        lineHeight: 20,
        fontWeight: '500',
        color: '#555',
        textAlign: 'center'
    },
    exitButton: {
        height: 50,
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginVertical: 20
    },
    modalButton: {
        width: '100%',
        backgroundColor: '#f95e00',
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    modalButtonText: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
        fontWeight: '400'
    }
});