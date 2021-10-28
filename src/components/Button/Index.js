import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import MainStyle from '../styles/MainStyle';
export default function index({
    title,
    textStyle,
    style,
    onPress,
    isDisabled,
    backgroundColor,
}) {
    return (
        <View style={styles.btndesign}>
            <View style={MainStyle.btnContainer}>
                <View style={MainStyle.buttonPurple} >
                    <TouchableOpacity
                        style={[
                            styles.container,
                            style,
                            isDisabled ? {
                                backgroundColor: '#FAFAFA'
                            } : null,
                        ]}
                        onPress={!isDisabled ? onPress : null}>
                        {title ? (
                            <Text
                                style={[
                                    styles.textstyle,
                                    // MainStyle.buttonText,
                                    // Color = '#FAFAFA',
                                    textStyle,
                                    isDisabled ? { color: '#929CB5' } : null,
                                ]}>
                                {title}
                            </Text>
                        ) : null}
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 5,
        backgroundColor: '#F95E00',
        paddingVertical: 5,
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        width: '100%',
        // height: '5%'
    },
    textstyle: {
        color: '#FAFAFA',
        // textShadowColor: '#FAFAFA'
        // backgroundColor: '#FAFAFA',
    },
    btndesign: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginBottom: 10
    }
})
