/*
 * combines all th existing reducers
 */
import * as loadingReducer from './LoadingReducers';
import * as authReducer from './AuthReducers'
export default Object.assign(authReducer, loadingReducer);
