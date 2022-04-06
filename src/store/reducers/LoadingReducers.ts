/**
 * Loading reducer made separate for easy blacklisting
 * Avoid data persist
 */
import createReducer from '../../lib/CreateReducers';
import * as types from '../actions/types';
const initialState = {
  isLoading: false,
};

export const loadingReducer = createReducer(initialState, {
  [types.ENABLE_LOADER](state) {
    return { ...state, isLoading: true };
  },
  [types.DISABLE_LOADER](state) {
    return { ...state, isLoading: false };
  },
});
