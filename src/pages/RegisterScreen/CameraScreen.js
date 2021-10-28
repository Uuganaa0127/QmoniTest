import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity, Text, Dimensions, Modal } from 'react-native';
import { RNCamera } from 'react-native-camera';
import base64 from 'react-native-base64';
const { width, height } = Dimensions.get('window');
export default function CameraScreen({ cameraHandler, showCamera, camera, imageType, }) {
    const takePicture = async () => {
        if (camera) {
            let options = { quality: 0.75, base64: true };
            const data = await camera.takePictureAsync(options);
            cameraHandler(data.base64);
        }
    }
    const closeCamera = () => {
        cameraHandler(false);
    }
    let type = (imageType && imageType == 'selfie') ? RNCamera.Constants.Type.front : RNCamera.Constants.Type.back;
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={showCamera}
            onRequestClose={() => {
                console.log('Modal has been closed.');
            }}>
            <View style={styles.cameraContainer}>
                <RNCamera
                    ref={ref => { camera = ref }}
                    style={styles.camera}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.off}
                    captureAudio={false}
                    type={type}
                    defaultOnFocusComponent={true}
                />
                <View style={styles.btnContainer}>
                    <TouchableOpacity
                        onPress={() => { closeCamera() }}
                        style={styles.cancelBtn}>
                        <Text style={{ fontSize: 20, color: '#fff' }}>Цуцлах</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={takePicture}
                        style={styles.captureBtn}>
                        <View style={styles.captureBtnInner} />
                    </TouchableOpacity>
                    <View style={{ width: '30%' }} />
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    cameraContainer: {
        flex: 1,
        height: '100%',
        width: '100%',
        // backgroundColor: 'rgba(255, 255, 255, 0.8)',
        backgroundColor: '#000',
        position: 'relative'
    },
    camera: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    btnContainer: {
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10
    },
    captureBtn: {
        flex: 0,
        borderWidth: 5,
        borderColor: '#fff',
        borderRadius: 50,
        padding: 2,
    },
    captureBtnInner: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 50,
        height: 50,
        width: 50,
    },
    cancelBtn: {
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '30%'
    },
    cardBorderContainer: {
        position: 'absolute',
        // top: (height - 84) * .1, 
        top: width * .1 * 1.6,
        top: (height - (width * .8 * 1.6) - 84) / 2,
        left: width * .1,
    },
    cardBorder: {
        // width: 400,
        // height: 400,
        width: width * .8,
        height: width * .8 * 1.6,
        resizeMode: "contain"
    },
});