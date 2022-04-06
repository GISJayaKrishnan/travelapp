/**
 *  Redux saga class init
 */
import { takeLatest, all } from 'redux-saga/effects';
import * as types from '../actions/types';
import { loginAsync} from './AuthSagas';
export default function* watch() {
  yield all([
    takeLatest(types.LOGIN_REQUEST, loginAsync),
  ]);
}
