import {Platform, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, { useEffect } from 'react';
import Navigation from './navigation/navigation';
import { PersistGate } from 'redux-persist/integration/react';
import {store,persistor} from './redux/store';
import {Provider} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';


const App = () => {

useEffect(()=>{
  if(Platform.OS === 'android'){
    SplashScreen.hide();
  }
},[])


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
