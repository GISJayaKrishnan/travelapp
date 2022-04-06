import React, { Component, useState, useEffect } from 'react';
import { KeyboardAvoidingView, Text, TextInput, View, StyleSheet, TouchableOpacity, Alert,Image } from 'react-native';
import { appendFile } from 'react-native-fs';
import AppStyle from '../../config/ColorStyle';
import images from '../../config/Images';
// import images from '../../config/images';
import styles from './styles';
import NavigationService from '../../navigation/NavigationService';
const SplashScreen = ({ navigation }) => {
// const [userName, setUserName] = useState('');
//  const [password, setPassword] = useState('');
//  const [users, setUsers] = useState([]);



useEffect(() => {
  setTimeout(function(){

    console.log("called")
   // navigation.replace("MapPage");
    NavigationService.navigate("TabBar")
      }, 1000);
    
    }, []);
  
  
    return (
      <View style={styles.container}>
          <Image style={styles.imgStyle} source={images.splashImage}  />
      </View>
    )
  }


export default SplashScreen;
