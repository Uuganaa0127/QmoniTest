import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import MainStyle from '../../components/styles/MainStyle';
export default function index({
    title,
    textStyle,
    style,
    onPress,
    image,
    imageStyle,
    isDisabled,
}) {
    return (
        <TouchableOpacity
            style={[
                styles.container,
                style,
                isDisabled ? { backgroundColor: '#DDE3F0' } : null,
            ]}
            onPress={!isDisabled ? onPress : null}>
            {image ? <Image source={image} style={imageStyle} /> : null}
            {title ? (
                <Text
                    style={[
                        // MainStyle.buttonText,
                        textStyle,
                        isDisabled ? { color: '#929CB5' } : null,
                    ]}>
                    {title}
                </Text>
            ) : null}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 24,
        height: 24,
        zIndex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
    },
});
