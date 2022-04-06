import React, { Component, useState, useEffect, useRef } from 'react';
import { KeyboardAvoidingView, Text, TextInput, View, StyleSheet, TouchableOpacity, Alert, Image, Linking, Modal } from 'react-native';
import { appendFile } from 'react-native-fs';
import AppStyle from '../../config/ColorStyle';
import images from '../../config/Images';
// import images from '../../config/images';
import styles from './styles';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import { getLocation } from '../../utils/LocationHelper';
import { permissionCamerAndGalleryCheck, permissionForMicroPhoneCheck } from '../../services/PermissionsServices'
import Geocoder from 'react-native-geocoder';
import NavigationService from '../../navigation/NavigationService';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from "react-native-maps";
const CameraPage = ({ navigation }) => {
    const camera = useRef();
    const [isCameraFlash, setisCameraFlash] = useState('off')
    const devices = useCameraDevices('wide-angle-camera')
    const [isBackCamera, setIsBackCamera] = useState(true)
    const [imageUrl, setImageUrl] = useState('')
    const [modalVisible, setModalVisible] = useState(true)

    const device = devices.back;
    const frontDevice = devices.front


    useEffect(() => {
        permissionCheck()


    }, []);
    const permissionCheck = async () => {
        const res = await permissionCamerAndGalleryCheck(true)
        console.log("res", res)
        const res1 = await permissionForMicroPhoneCheck()
        const locationPermisson = await getLocation()
        console.log('location', locationPermisson)
        let latitude = locationPermisson.coords.latitude
        let longitude = locationPermisson.coords.longitude

        var NY = {
            lat: latitude,
            lng: longitude
        };
        //  Linking.openURL(googleMapOpenUrl({ latitude: 23.235899, longitude: 78.323258 }));

        Geocoder.geocodePosition(NY).then(res => {
            console.log("res", res)
            // res is an Array of geocoding object (see below)
        })
            .catch(err => console.log(err))

    }
    const googleMapOpenUrl = ({ latitude, longitude }) => {
        const latLng = `${latitude},${longitude}`;
        return `google.navigation:q=${latLng}`;
    }

    const flashBtn = async () => {
        if (isCameraFlash == 'on') {
            setisCameraFlash('off')
        }
        else {
            setisCameraFlash('on')
        }
    }

    const captureBtn = async () => {

        if (imageUrl == '') {
            console.log('capture called')
            var getFilePath = await camera.current.takePhoto({
                flash: isCameraFlash,
                quality: 85,
                skipMetadata: true
            })

            setImageUrl('file:///' + getFilePath.path)
            console.log("get file path", getFilePath)
        }
        else {
            setImageUrl('')
        }

        //  return getFilePath
    }


    const flipsCamera = async () => {
        setIsBackCamera(!isBackCamera)
    }

    const selfiePointsBtn = () => {
        console.log('called')
        NavigationService.navigate("MapPage");

    }
    if (device == null) return null
    return (
        <View style={styles.container}>
            <View style={{ height: 50, width: '100%', marginBottom: -90, zIndex: 2, flexDirection: 'row', justifyContent: "flex-end" }}>

                <TouchableOpacity style={{ width: 30, height: 30, marginTop: 10, alignSelf: "flex-end", marginRight: 20, }} onPress={flashBtn}>
                    <Image source={isCameraFlash == 'on' ? images.FlashOn : images.FlashOff} style={{ width: 40, height: 40 }}></Image>

                </TouchableOpacity>
                <TouchableOpacity style={{ width: 30, height: 30, marginTop: 10, alignSelf: "flex-end", marginRight: 20, }} onPress={flipsCamera}>
                    <Image source={images.FlipIcon} style={{ width: 40, height: 40 }}></Image>

                </TouchableOpacity>
            </View>

            {/* {imageUrl == '' ? ( */}

            <Camera style={{ height: '100%', marginTop: 40 }} ref={camera} photo={true} video={true} flash={isCameraFlash} device={isBackCamera == true ? device : frontDevice} isActive={true} />

            {/* ) : (
                <Image source={{ uri: imageUrl }} style={{ height: '100%', marginTop: 40 }}>

                </Image>
            )} */}

            <TouchableOpacity style={{ marginTop: -120, zIndex: 10, alignSelf: 'center' }} onPress={captureBtn}>
                <Image source={images.CameraTake}>

                </Image>
            </TouchableOpacity>

            <Modal
                onRequestClose={() => setModalVisible(false)}
                animationType="fade"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.cameraModalBg}>
                    <View style={styles.cameraModalView}>

                        <Image source={images.conference3} style = {{height : 350,width : '100%'}} resizeMode ='cover'>

                        </Image>
                        <TouchableOpacity style={{ width: 100, height: 50,alignSelf:"flex-end"}} onPress={selfiePointsBtn} >
                            <Text>See More</Text>
                        </TouchableOpacity>

                    </View>


                </View>

            </Modal>

        </View>
    )
}


export default CameraPage;
