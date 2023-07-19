import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View ,TouchableOpacity } from 'react-native';

import config from './configs/config'
import { Navigation } from './screens/Navigation';
import React , {useState , useEffect} from 'react';

import {AuthContext} from './context/authContext';

import AuthForm from './authForm';

import {AuthMain} from './screens/Auth/AuthScreen'

import AppLoading from "expo-app-loading";
import { useFonts } from "./hooks/useFonts";
// var va = 5;
console.log(config , "test")
export default function App() {
  const [ isAuth , setIsAuth] = React.useState(true);
  
  const [isLoading, setIsLoading] = useState(false);

  // loading the fonts
  const LoadFonts = async () => {
    await useFonts();
  };

  if (!isLoading) {
    return (
      // if the font is not loaded return AppLoading
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => setIsLoading(true)}
        onError={() => {}}
      />
    );
  }
 
  return (
    <AuthContext.Provider value={{ isAuth , setIsAuth }}>
    {/* <AuthForm />  */}
      {/* {isAuth ? <AuthForm /> : <Navigation />} */}
      {isAuth ? <Navigation /> : <AuthMain />}
      <StatusBar />
    </AuthContext.Provider>
  )
};



// import { StyleSheet, Text, View } from "react-native";
// import React, { useState } from "react";
// import Oxanium from "./components/Oxanium";
// import AppLoading from "expo-app-loading";
// import { useFonts } from "./hooks/useFonts";
// import Poppins from "./components/Poppins";
// import WorkSans from "./components/WorkSans";

// const App = () => {
//   //setting the initial loading to false
  
//   return (
//     <View style={styles.container}>
//       <Oxanium />
//       <Poppins />
//       <WorkSans />
//     </View>
//   );
// };

