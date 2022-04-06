/* Login Reducer
 * handles login states in the app
 */
import { act } from 'react-test-renderer';
import createReducer from '../../lib/CreateReducers';
import * as types from '../actions/types';

const initialState = {
  isLoggedIn: false,
  token: '',
};

export const authReducer = createReducer(initialState, {
  [types.LOGIN_REQUEST](state : any, action : any) {
    return {
      ...state,
      payload: action.payload,
    };
  },
});
