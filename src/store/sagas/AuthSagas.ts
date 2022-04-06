import { put, call } from 'redux-saga/effects';
import { Alert } from 'react-native';
import * as authActions from '../actions/AuthAction'
import * as loadingActions from '../actions/LoadingAction';


export function* loginAsync({ payload }) {
  console.log('loginsaga', payload);
  yield put(loadingActions.enableLoader());
 
}





export function showMessage(message : string) {
  setTimeout(() => {
    Alert.alert('Pepsico', message);
  }, 100);
}
