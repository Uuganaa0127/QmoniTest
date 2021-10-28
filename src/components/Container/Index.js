import React from 'react';
import {
    View,
    StyleSheet,
    KeyboardAvoidingView,
    SafeAreaView,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
export default function index({ children }) {
    const { colors } = useTheme();
    return (
        <SafeAreaView style={[styles.con]}>
            <LinearGradient
                locations={[0.0001, 1]}
                colors={['#fff', '#EDF2F9']}
                style={[styles.container]}>
                {children}
            </LinearGradient>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    con: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        paddingHorizontal: 25,
        paddingVertical: 15,
    },
});
