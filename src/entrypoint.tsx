import {
  ActivityIndicator,
  StyleSheet,
  SafeAreaView,
  Alert,
  Text,
} from 'react-native'
import React, { useEffect } from 'react';
import Navigator from './navigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';

import configureStore from './store';
import AppStyle from './config/ColorStyle';
const { persistor, store } = configureStore();

const Entrypoint: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
        {/* <SafeAreaView style={styles.safeArea}> */}
        <Navigator />
        {/* </SafeAreaView> */}
      </PersistGate>
    </Provider>
  );
};


export default Entrypoint;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
