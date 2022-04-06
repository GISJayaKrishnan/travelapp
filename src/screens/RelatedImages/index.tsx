import React, { Component, useState, useEffect } from 'react';
import { KeyboardAvoidingView, Text, TextInput, View, FlatList, TouchableOpacity, Alert, Image } from 'react-native';
import { appendFile } from 'react-native-fs';
import AppStyle from '../../config/ColorStyle';
import images from 'src/config/Images';
import { CommonHeader } from 'src/components'
import styles from './styles';

const RelatedImages = ({ navigation }) => {
  // const [userName, setUserName] = useState('');
  //  const [password, setPassword] = useState('');
  const [imageData, setImageData] = useState([
    {
      id: 1,
      imgURL: images.conference1,
      title: 'Conference Room1'
    },
    {
      id: 2,
      imgURL: images.conference2,
      title: 'Conference Room2'
    },
    {
      id: 3,
      imgURL: images.conference3,
      title: 'Conference Room3'
    }
  ]);



  useEffect(() => {

  }, []);


  const renderImages = ({ item }) => {
    return (
      <TouchableOpacity style={styles.flatlistData}>
        <Image source={item.imgURL} style={{ height: 170, width: '100%' }} />
        <Text style={{ fontSize: 14, fontWeight: 'bold', marginTop: 4 }}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <CommonHeader showBack={true} title={'Related Images'} />

      <Text style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 8, marginTop: 5 }}>GIS Conference Room</Text>

      <View style={{ flex: 1, marginTop: 5, justifyContent: 'center', alignItems: 'center' }}>
        <FlatList
          data={imageData}
          renderItem={renderImages}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          columnWrapperStyle={{ flex: 1, justifyContent: 'space-between' }}
          keyExtractor={(item, index) => item.id.toString()}
        />
      </View>
    </View>
  )
}


export default RelatedImages;
