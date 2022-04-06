import React, { Component, useState, useEffect } from 'react';
import { KeyboardAvoidingView, Text, TextInput, View, StyleSheet, TouchableOpacity, Alert, Image, Linking } from 'react-native';
import { appendFile } from 'react-native-fs';
import AppStyle from '../../config/ColorStyle';
import images from '../../config/Images';
// import images from '../../config/images';
import styles from './styles';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from "react-native-maps";
import NavigationService from '../../navigation/NavigationService';

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
        latitude: 9.882328,
        longitude: 78.071410,
      }


    }
    let coordinates: {
      latitude: 9.882328,
      longitude: 78.071410,
    }


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
      <TouchableOpacity style={styles.backBtn} onPress={backBtn}>
        <Image source={images.BackIcon} style={styles.backImg}>

        </Image>
      </TouchableOpacity>

      <MapView
        style={{ flex: 1 }}
        showsUserLocation={true}

        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
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
          </Marker>
        ))}

      </MapView>

    </View>
  )
}


export default MapPage;