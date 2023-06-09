import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View ,TouchableOpacity } from 'react-native';

import { Navigation } from './screens/Navigation';
import React , {useState , useEffect} from 'react';

import {AuthContext} from './context/authContext';

import AuthForm from './authForm';

export default function App() {
  const [ isAuth , setIsAuth] = React.useState(true);

  return (
    <AuthContext.Provider value={{ isAuth , setIsAuth }}>
      {isAuth ? <AuthForm /> : <Navigation />}
      <StatusBar />
    </AuthContext.Provider>
  )
};
