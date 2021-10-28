import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import MultiSlider from '@esteemapp/react-native-multi-slider';
import MainStyle from '/qmonitest/src/components/styles/MainStyle';
import Images from '../../constants/Images';
import helper from '/qmonitest/src/help/index';
const { width, height } = Dimensions.get('window');
export default function index({ sliderchangeValues, minAmount, maxAmount, slidervalue, slidervalue1 }) {
    const [nonCollidingMultiSliderValue, setNonCollidingMultiSliderValue] =
        useState(0);
    const nonCollidingMultiSliderValuesChange = values => {
        setNonCollidingMultiSliderValue(values[0]);
        // calcLoan();
    };
    return (
        <MultiSlider

            // enabledOne={max == min ? false : true}
            values={[nonCollidingMultiSliderValue]}
            sliderLength={width - 70}
            onValuesChange={nonCollidingMultiSliderValuesChange}
            onValuesChangeFinish={sliderchangeValues}
            // min={0}
            min={0}
            max={maxAmount}
            allowOverlap={true}

            step={10}
            trackStyle={{
                height: 5,
                borderRadius: 2,
                backgroundColor: '#999999'
            }}
            selectedStyle={{
                borderRadius: 2,
                backgroundColor: '#f95e00'
            }}
            unselectedStyle={{
                borderRadius: 2,
                backgroundColor: '#999999'
            }}

            customMarker={() => {
                return (
                    <>
                        <Image
                            source={Images.loanchooseico}
                            resizeMode={'contain'}
                            style={styles.slider}
                        />
                    </>
                );
            }}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        elevation: 1,
        paddingVertical: 16,
    },
    slider: {
        width: 40,
        height: 40,
        // zIndex: 999

    },
    coin: {
        width: 24,
        height: 24,
        marginRight: 10,
    },
    coinBase: {
        width: '100%',
        backgroundColor: '#12263F',
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        paddingVertical: 16,
        paddingHorizontal: 25,
    },
});
