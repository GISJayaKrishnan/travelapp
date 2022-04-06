import * as ImagePicker from 'react-native-image-picker';
import { launchImageLibrary } from 'react-native-image-picker';
import { isCameraAndGalleryPermission } from '../services/PermissionsServices';
import RNFS from 'react-native-fs';
import moment from 'moment';
import { Platform } from 'react-native';
const dirPictures = `${Platform.OS === 'ios' ? RNFS.DocumentDirectoryPath : RNFS.PicturesDirectoryPath}/pepsico`;
import { Camera, useCameraDevices } from 'react-native-vision-camera';

// const dirPictures = `${RNFS.ExternalDirectoryPath}/pepsico`;
// const dirPictures = `${RNFS.LibraryDirectoryPath}/hazelnut`;
//const dirPictures = `${RNFS.PicturesDirectoryPath}/hazelnut`;


export async function cameraAndGalleryPicker(isPhoto, isCamera) {

  let permission = await isCameraAndGalleryPermission(isCamera)

  if (isCamera == true) {
    let option = {
      mediaType: isPhoto == true ? 'photo' : 'video',
      includeBase64: false,
      maxHeight: 200,
      maxWidth: 200,
    }
    if (permission == true) {

      let cameraResults = await ImagePicker.launchCamera({ option });
      return cameraResults
    }
    else {
      return null
    }
  }
  else {
    let option = {
      mediaType: 'mixed',
      includeBase64: false,
      maxHeight: 200,
      maxWidth: 200,
    }
    if (permission == true) {

      let cameraResults = await ImagePicker.launchImageLibrary({ option });
      return cameraResults
    }
    else {
      return null
    }
  }
}

export async function cameraAndGalleryPickerUsingVisionCamera(camera,isCameraFlash,isGallery) {

  let permission = await isCameraAndGalleryPermission(!isGallery)

  var getFilePath = ''
  if (permission == true) {
    if (isGallery == false) {
      if (Platform.OS === 'ios') {
        console.log("---- Take Photo func triggerd")
        getFilePath = await camera.current.takePhoto({
          flash: isCameraFlash,
          quality: 85,
          skipMetadata: true
        })
        return getFilePath
      } else {
        getFilePath = await camera.current.takePhoto({
          flash: isCameraFlash,
        })
        return getFilePath
      }
    }
    else{
      let option = {
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 200,
        maxWidth: 200,
      }
        let cameraResults = await ImagePicker.launchImageLibrary({ option });
        return cameraResults
   
      
    }

  }
  else {
    return null
  }

}

export async function videoAndGalleryPicker(isGallery) {

  let permission = await isCameraAndGalleryPermission(!isGallery)

  var getFilePath = ''
  if (permission == true) {
   
    console.log('called inside')
      let option = {
        mediaType: 'video', 
        durationLimit : 30,
      thumbnail : true,
      }

      await launchImageLibrary(option,(response) => {
        console.log("response",response.assets[0].uri)
        return response.assets[0].uri
      })

        //  let cameraResults = await ImagePicker.launchImageLibrary({ option });
        // return cameraResults
   
      
    }
  else {
    return null
  }

}


export async function writeImageIntoFolder(filePath) {

  const newImageName = `${moment().format('DDMMYY_HHmmSSS')}.png`;
  const newFilepath = `${dirPictures}/${newImageName}`;
  console.log(dirPictures)
  // await RNFS.mkdir(outputPath);
  return new Promise((resolve, reject) => {


    console.log("filepath", filePath);
    console.log("new file path", newFilepath)
    RNFS.exists(newFilepath)
      .then((success) => {
        resolve(newFilepath);
        console.log('File Exists!'); // <--- here RNFS can read the file and returns this
      })
      .catch((err) => {
        reject(err);
        console.log("Exists Error writeImageIntoFolder: " + err.message);
      });

    RNFS.mkdir(dirPictures)
      .then(() => {
        RNFS.copyFile(filePath, newFilepath)
          .then(() => {
            console.log('FILE MOVED', filePath, newFilepath);
            resolve(newFilepath);
          })
      })
      .catch(err => {
        console.log('mkdir error', err);
        reject(err);
      });
  });
};


export async function base64ToImageFile(imageData) {

  const newImageName = `${moment().format('DDMMYY_HHmmSSS')}.jpg`;
  const newFilepath = `${RNFS.CachesDirectoryPath}/${newImageName}`;
  console.log(dirPictures)
  // await RNFS.mkdir(outputPath);
  return new Promise((resolve, reject) => {


    console.log("new file path", newFilepath)

    RNFS.appendFile(newFilepath, imageData, 'base64')
      .then((success) => {

        resolve(newFilepath);
        // <--- here RNFS can read the file and returns this
      })
      .catch((err) => {
        reject(err);
        console.log("Exists Error base64ToImageFile: " + err.message);
      });

  });
};

export async function imageToBase64(filePath) {


  return new Promise((resolve, reject) => {


    console.log("called")

    RNFS.readFile(filePath, 'base64')
      .then((success) => {

        // console.log("sucess",success)
        resolve('data:image/jpeg;base64,' + success);
        // <--- here RNFS can read the file and returns this
      })
      .catch((err) => {
        reject(err);
        console.log("Exists Error imageToBase64: " + err.message);
      });

  });
};



  //  moveAll = async (filePath, newFilepath) => {
  //   // is a folder
  //   if (path.split(".").length == 1) {
  //     // CHeck if folder already exists
  //     var exists = await RNFS.exists(outputPath);
  //     if (exists) {
  //       await RNFS.unlink(outputPath);
  //       await RNFS.mkdir(outputPath);
  //     }
  //     // MAKE FRESH FOLDER
  //     var result = await RNFS.readDir(path);
  //     for (var i = 0; i < result.length; i++) {
  //       if (result[i].isDirectory()) {
  //         await RNFS.mkdir(outputPath + "/" + result[i].name);
  //       }
  //       var val = await this.moveAll(result[i].path, outputPath + "/" + result[i].name);
  //     }
  //     await RNFS.unlink(path);
  //     return 1;
  //   } else {
  //     await RNFS.moveFile(path, outputPath);
  //     return 1;
  //   }
  // }

