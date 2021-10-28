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
import { regs } from '/Qmonitest/src/help/index';
import MainStyle from '/Qmonitest/src/components/styles/MainStyle';
// import MainStyle from '/qmonitest/src/components/styles/mainstyle';
export default function index({ isShow, cancelOnPress, onPress }) {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isShow}
            onRequestClose={() => { }}>
            <TouchableOpacity onPress={cancelOnPress} style={styles.container}>
                <View style={styles.section}>
                    <View style={MainStyle.rowCenter}>
                        <View style={styles.line} />
                    </View>
                    <View style={MainStyle.columnMV10Center}>
                        <FlatList
                            data={regs}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    onPress={() => onPress(item.value)}
                                    style={styles.item}>
                                    <View style={styles.itemContainer}>
                                        <Text style={[MainStyle.fontSemiBold17]}>{item.label}</Text>
                                    </View>
                                </TouchableOpacity>
                            )}
                            numColumns={5}
                            keyExtractor={item => item.label}
                        />

                    </View>

                </View>
            </TouchableOpacity>
        </Modal>
    );
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
        position: 'absolute', top: 10, left: 350, right: 0, bottom: 0, alignItems: 'center',
        width: 22,
        height: 22,
        resizeMode: "contain"
    },
    toucText: {
        color: '#444444',
        fontWeight: '700',
        fontSize: 14,
    },
});

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
