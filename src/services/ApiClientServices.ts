import axios from 'axios';
import ApiConfig from '../config/ApiConfig';
import { useDispatch, useSelector} from 'react-redux';
import * as LoadingAction from '../store/actions/LoadingAction';
import { Alert } from 'react-native';
const ACCESS_KEY = 'gOBfW2frj2TI6TueXf0K51rQpZLV1SVZmg5cysW+ztAyi6n4XtGvv1X1SPTBZpoRuBxILpLy9JpChO6NWjH7jg=='
const ACCOUNT_NAME = 'pepsicocvstorage'
const CONTAINER_NAME = 'camera'
// const dispatch = useDispatch()

const client = axios.create({
   
    headers: {
    "Content-Type": "application/json",
    "Accept": 'Application/json',
      //"Content-Type": "application/x-www-form-urlencoded",
      'Authorization': 'Y3ZwZXBzaWNvcGxhdGZvcm1AMjAyMQ==', 

  
    }
  });


  export const  getApi = (methodName : any) =>  new Promise((resolve) =>  {

    // LoadingAction.enableLoader()
    const URL = ApiConfig.BASEURL + methodName;
    console.log("URL",URL)
    try {

        client.get(URL,
            ).then((res) => { 
            //    LoadingAction.disableLoader()
           // console.log("response api",res.data)
                resolve(res.data)
            }).catch(err => {
               // dispatch(LoadingAction.disableLoader())
         
               showMessage("Something went wrong!!!. Please try again later")
              
             
                resolve(err)
           
            })
       
    } catch (error) {
       // console.log("errorapi",error)
        showMessage("Something went wrong!!!. Please try again later")
        resolve(error)
  
    }
});


export const  postApi = (methodName : any , payload  : any) =>  new Promise((resolve) =>  {
    
    const URL = ApiConfig.BASEURL + methodName;
    console.log("URL",URL)
    try {

        client.post(URL, payload,
            ).then((res) => {
                resolve(res.data)
            }).catch(err => {
               
              showMessage("Something went wrong!!!. Please try again later")
                resolve(err)
            })
       
    } catch (error) {
        showMessage("Something went wrong!!!. Please try again later")
        resolve(error)
    }
});


export const  putApi = (methodName  : any, payload : any ) =>  new Promise((resolve) =>  {
    
    const URL = ApiConfig.BASEURL + methodName;
    console.log("URL",URL)
    try {

        client.put(URL,  payload,
            ).then((res) => {
                resolve(res.data)
            }).catch(err => {
                console.log(err)
                showMessage("Something went wrong!!!. Please try again later")
                resolve(err)
            })
       
    } catch (error) {
        showMessage("Something went wrong!!!. Please try again later")
        resolve(error)
    }
});


export const  deleteApi = (methodName : any) =>  new Promise((resolve) =>  {
   
    
    const URL = ApiConfig.BASEURL + methodName;
    console.log("URL",URL)
    try {

        client.delete(URL,
            ).then((res) => { 
                resolve(res.data)
            }).catch(err => {
                console.log(err)
                showMessage("Something went wrong!!!. Please try again later")
                resolve(err)
                //throw err;
            })
       
    } catch (error) {
        showMessage("Something went wrong!!!. Please try again later")
        resolve(error)
    }
});
export function showMessage(message : string) {
    setTimeout(() => {
      Alert.alert('Pepsico', message);
    }, 100);
  }
