import RNPermissions, {
    NotificationsResponse,
    Permission,
    PERMISSIONS,
    PermissionStatus,
    RESULTS,
    request,
    openSettings,
} from 'react-native-permissions';
import { Alert, Platform } from 'react-native';
import CommonString from '../config/CommonStrings';

export const permissionCamerAndGalleryCheck = async (isCamera : boolean) => {
    try {

   console.log(isCamera == true  ? Platform.OS == 'ios' ?  PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA   : Platform.OS == 'ios' ? PERMISSIONS.IOS.PHOTO_LIBRARY : PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE)

        const result = await RNPermissions.check( isCamera == true  ? Platform.OS == 'ios' ?  PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA   : Platform.OS == 'ios' ? PERMISSIONS.IOS.PHOTO_LIBRARY : PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);


        if (result == RESULTS.UNAVAILABLE) {
            return [false, result]
        }
        else if (result == RESULTS.DENIED) {
            const result2 = await request(isCamera == true  ? Platform.OS == 'ios' ?  PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA   : Platform.OS == 'ios' ? PERMISSIONS.IOS.PHOTO_LIBRARY : PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE)
            return [false, result2]
        }
        else if (result == RESULTS.LIMITED) {
            return [true, result]
        }
        else if (result == RESULTS.GRANTED) {
            return [true, result]
        }
        else {
            return [false, result]
        }

    } catch (err) {
        return err
    }

}


export const permissionForMicroPhoneCheck = async () => {
    try {

   console.log(Platform.OS == 'ios' ?  PERMISSIONS.IOS.MICROPHONE : PERMISSIONS.ANDROID.RECORD_AUDIO)

        const result = await RNPermissions.check(Platform.OS == 'ios' ?  PERMISSIONS.IOS.MICROPHONE : PERMISSIONS.ANDROID.RECORD_AUDIO);


        if (result == RESULTS.UNAVAILABLE) {
            return [false, result]
        }
        else if (result == RESULTS.DENIED) {
             const result12 = await request(Platform.OS == 'ios' ?  PERMISSIONS.IOS.MICROPHONE : PERMISSIONS.ANDROID.RECORD_AUDIO)
           
            return [false, result12]
        }
        else if (result == RESULTS.LIMITED) {
            return [true, result]
        }
        else if (result == RESULTS.GRANTED) {
            return [true, result]
        }
        else {
            return [false, result]
        }

    } catch (err) {
        return err
    }

}

export const deniedRequest = async (permissions : any,isCamera : boolean) => {

    console.log('per',permissions)
    try {
        if (permissions == RESULTS.DENIED) {
            const result = await request(isCamera == true  ? Platform.OS == 'ios' ?  PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA   : Platform.OS == 'ios' ? PERMISSIONS.IOS.PHOTO_LIBRARY : PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE)
            console.log(result)

            if (result == RESULTS.GRANTED) {
                return true
            }
            else if (result == RESULTS.LIMITED) {
                return true
            }
            else if(result == RESULTS.BLOCKED)
            {
                Alert.alert(
                    CommonString.GalleryAccess,
                     CommonString.GallerySettingAlert,
                    [
                      { text: CommonString.GoToSettings, onPress: () => openSettings().catch(() => console.warn('cannot open settings')) },
                      { text: CommonString.No, onPress: () => console.log('No button clicked'), style: 'cancel' },
                    ],
                    {
                      cancelable: true
                    }
                  );
            }
            else {
                return false
            }
        }
        else if(permissions == RESULTS.BLOCKED) {
            Alert.alert(
                CommonString.GalleryAccess,
                CommonString.GallerySettingAlert,
                [
                  { text: CommonString.GoToSettings, onPress: () => openSettings().catch(() => console.warn('cannot open settings')) },
                  { text: CommonString.No, onPress: () => {console.log('No button clicked')}, style: 'cancel' },
                ],
                {
                  cancelable: true
                }
              );
            return false
        }
        else {
            return false
        }
    }
    catch (err) {
        return err
    }
}


export const isCameraAndGalleryPermission = async (isCamera : any) =>
{
    let result = await permissionCamerAndGalleryCheck(isCamera)
    console.log("res",result)
    if(result[0] == false)
        {
          let req = await deniedRequest(result[1],isCamera)
          console.log("req",req)
          return req
        }
        else{
            return result[0]
        }
} 
