import React, { useState, useEffect } from 'react';
import { Linking,Alert,PermissionsAndroid ,Platform, ToastAndroid} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import CommonString from '../config/CommonStrings';
export async function hasLocationPermission() {
  console.log("Platform.OS",Platform.OS)
    if (Platform.OS === 'ios') {
      const hasPermission = await hasPermissionIOS();
      return hasPermission;
    }

    // if (Platform.OS === 'android' && Platform.Version < 23) {
    //   return true;
    // }

    const hasPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (hasPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (status === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    }

    if (status === PermissionsAndroid.RESULTS.DENIED) {
      ToastAndroid.show(
        'Location permission denied by user.',
        ToastAndroid.LONG,
      );
    } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
      ToastAndroid.show(
        'Location permission revoked by user.',
        ToastAndroid.LONG,
      );
    }

    return false;
  };

  export async function hasPermissionIOS()  {
    const openSetting = () => {
      Linking.openSettings().catch(() => {
        Alert.alert('Unable to open settings');
      });
    };
    const status = await Geolocation.requestAuthorization('whenInUse');

    if (status === 'granted') {
      return true;
    }

    if (status === 'denied') {
        Alert.alert(
            CommonString.LocationAlert,
            '',
            [
              { text: CommonString.GoToSettings, onPress: openSetting },
            
            ],
          );
    }

    if (status === 'disabled') {
      Alert.alert(
        CommonString.LocationAlert,
        '',
        [
          { text: CommonString.GoToSettings, onPress: openSetting },
         
        ],
      );
    }

    return false;
  };


  export async function getLocation(){
    console.log("location called")
    const hasPermission = await hasLocationPermission();


    return new Promise((resolve, reject) => {

        if (!hasPermission) {
            reject(false);
          }
      
          Geolocation.getCurrentPosition(
            (position) => {
           
             // setLocation(position);
              console.log(position);
              resolve(position)
            },
            (error) => {
              Alert.alert(`Code ${error.code}`, error.message);
              console.log(error);
              resolve(error)
             
            },
            {
              accuracy: {
                android: 'high',
                ios: 'best',
              },
              enableHighAccuracy: true,
              timeout: 15000,
              maximumAge: 10000,
           
            },
          );

    });

    
  };