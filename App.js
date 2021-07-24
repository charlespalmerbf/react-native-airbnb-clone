import 'react-native-gesture-handler'
import React from 'react';
import {Node} from 'react';
import { SafeAreaView, } from 'react-native';
import Router from './src/navigation/Router';
import HomeScreen from './src/screens/Home';


const App: () => Node = () => {

  return (

    <Router />

  );

};

export default App;
