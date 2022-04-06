import React, { Component, useState, useEffect } from 'react';
import { KeyboardAvoidingView, Text, TextInput, View, StyleSheet, TouchableOpacity, Alert, Image, Linking } from 'react-native';
import { appendFile } from 'react-native-fs';
import AppStyle from '../../config/ColorStyle';
import images from '../../config/Images';
// import images from '../../config/images';
import styles from './styles';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from "react-native-maps";
import NavigationService from '../../navigation/NavigationService';
import { CommonHeader } from 'src/components'

const MapPage = ({ navigation }) => {
  // const [userName, setUserName] = useState('');
  //  const [password, setPassword] = useState('');
  //  const [users, setUsers] = useState([]);

  const [markers, setMarkers] = useState([])

  useEffect(() => {

    var finalDict = []

    let cor = {

      coordinates: {
        latitude: 9.882740,
        longitude: 78.072215,
      }


    }
    finalDict.push(cor)

    let cor1 = {
      coordinates: {
        latitude: 9.884484404469093,
        longitude: 78.0824081600001,
      }
    }

    // let coordinates: {
    //   latitude: ,
    //   longitude: 78.08234,
    // }


    finalDict.push(cor1)


    console.log("final dict", finalDict)

    setMarkers(finalDict)
    // markerClick(9.882328, 78.071410)

  }, []);

  const googleMapOpenUrl = ({ latitude, longitude }) => {
    const latLng = `${latitude},${longitude}`;
    return `google.navigation:q=${latLng}`;
  }

  const backBtn = () => {
    NavigationService.goBack()
  }

  const markerClick = (latitude: any, longitude: any) => {
    Linking.openURL(googleMapOpenUrl({ latitude: latitude, longitude: longitude }));
    // googleMapOpenUrl(latitude,longitude)
  }

  return (
    <View style={styles.container}>
      <CommonHeader showBack={true} title={'Map Location'} />
      {/* <TouchableOpacity style={styles.backBtn} onPress={backBtn}>
        <Image source={images.BackIcon} style={styles.backImg}>

        </Image>
      </TouchableOpacity> */}

      <MapView
        style={{ flex: 1 }}
        showsUserLocation={true}
        initialRegion={{
          latitude: 9.88451,
          longitude: 78.08234,
          latitudeDelta: 10,
          longitudeDelta: 45
        }}
        zoomEnabled={true}


      //annotations={markers}
      >

        {markers.map(marker => (

          <Marker
            coordinate={{
              latitude: marker.coordinates.latitude,
              longitude: marker.coordinates.longitude
            }}
          >
            {console.log('marker', marker)}

            <TouchableOpacity onPress={() => markerClick(marker.coordinates.latitude, marker.coordinates.longitude)} style={{ height: 50, width: 50 }}>

              <Image source={images.MapMarker} style={{ height: 30, width: 20 }} />



            </TouchableOpacity>

            <Callout>
              <TouchableOpacity style={{ width: 150, height: 70,paddingHorizontal:5,paddingVertical:5, borderRadius: 15, borderColor: '#000', borderWidth: 1 }}>
                <Text >Great innovus conference room</Text>
              </TouchableOpacity>
            </Callout>
          </Marker>
        ))}

      </MapView>

    </View>
  )
}


export default MapPage;