import {Platform, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Navigation from './navigation/navigation';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './redux/store';
import {Provider} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    const ac = new AbortController();

    // if(Platform.OS === 'android' &&){
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);

    return function cleanup() {
      ac.abort();
    };
    // }
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
