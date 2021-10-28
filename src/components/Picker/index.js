import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    Modal,
    TouchableOpacity,
    View,
    FlatList
} from 'react-native';
import MainStyle from '/Qmonitest/src/components/styles/MainStyle';
import Images from '/Qmonitest/src/constants/Images';
export default function index({ isShow, cancelOnPress, data, renderItem }) {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isShow}
            onRequestClose={() => {
            }}>
            <TouchableOpacity onPress={cancelOnPress} style={styles.container}>
                <View style={styles.section}>
                    <View style={MainStyle.rowCenter}>
                        <View style={styles.line} />
                    </View>
                    <View style={MainStyle.columnMV15}>
                        <Text
                            style={[
                                MainStyle.fontSemiBold15,
                                { color: '#12263F', textAlign: 'center' },
                            ]}>
                            Банкаа сонгоно уу
                        </Text>
                    </View>
                    <View>
                        <View style={styles.itemCon}>
                            <View style={MainStyle.left}>
                                <Image
                                    source={Images.khanbank}
                                    style={styles.logo}
                                    resizeMode={'contain'}
                                />
                            </View>
                            <View style={MainStyle.leftFlex}>
                                <FlatList
                                    data={data}
                                    renderItem={renderItem}
                                    numColumns={1}
                                    keyExtractor={item => item.label}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.48)',
    },
    section: {
        width: '100%',
        backgroundColor: '#fff',
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        paddingHorizontal: 25,
        paddingVertical: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    line: {
        width: 40,
        height: 5,
        backgroundColor: '#CED8E7',
        borderRadius: 100,
    },
    itemCon: {
        flexDirection: 'row',
        width: '100%',
        paddingVertical: 8,
        paddingHorizontal: 25,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#CED8E7',
    },
    logo: {
        width: 32,
        height: 32,
        marginRight: 12,
    },
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.48)',
    },
    section: {
        width: '100%',
        backgroundColor: '#fff',
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        paddingHorizontal: 25,
        paddingVertical: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    line: {
        width: 40,
        height: 5,
        backgroundColor: '#CED8E7',
        borderRadius: 100,
    },
    itemContainer: {
        width: '100%',
        borderRadius: 4,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 18,
        elevation: 3,
    },
    item: {
        // flex: 1,
        paddingHorizontal: 7,
        paddingVertical: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
