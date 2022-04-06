/*
 * Reducer actions related with login
 */
import * as types from './types';

export function requestLogin(payload : any) {
  return {
    type: types.LOGIN_REQUEST,
    payload,
  };
}

