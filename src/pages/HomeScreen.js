import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Container from '/Qmonitest/src/components/Container/Index';
import Button from '/Qmonitest/src/components/Button/Index';
import Images from '/Qmonitest/src/constants/Images';
export default function Home({ navigation }) {
    return (
        <Container>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', margin: 10, padding: 10 }}>
                <Image
                    resizeMode={'contain'}
                    style={styles.introImg}
                    source={Images.logounder}
                />
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 30, paddingTop: 50, }}>
                <Button
                    title="Нэвтрэх"
                    onPress={() => navigation.navigate('LoginScreen')}
                />
                <Button
                    title="Бүртгүүлэх"
                    textStyle={styles.textstyle}
                    style={styles.background}
                    onPress={() => navigation.navigate('RegisterScreen1')}
                />
            </View>
        </Container >
    );
}
const styles = StyleSheet.create({
    textstyle: {
        color: '#213',
    },
    background: {
        color: '#123125'
    },
    introImg: {
        flex: 0.5,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

})