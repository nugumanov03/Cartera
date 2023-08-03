import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View ,TouchableOpacity } from 'react-native';

import config from './configs/config'
import { Navigation } from './screens/Navigation';
import React , {useState , useEffect , useCallback} from 'react';

import {AuthContext} from './context/authContext';

import AuthForm from './authForm';

import {AuthMain} from './screens/Auth/AuthScreen'

import AppLoading from "expo-app-loading";
import { useFonts } from "./hooks/useFonts";
// var va = 5;
import * as SplashScreen from 'expo-splash-screen';

console.log(config , "test")

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await LoadFonts();
        console.log("try 1")
        // await Font.loadAsync(Entypo.font);
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        // await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.log("try 2")
        console.warn(e);
      } finally {
        // Tell the application to render
        console.log("try 3")
        setAppIsReady(true);
        setIsLoading(true)
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      console.log("try 4")
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

   const [ isAuth , setIsAuth] = React.useState(true);
  
  // const [isLoading, setIsLoading] = React.useState(false);

  // loading the fonts
  const LoadFonts = async () => {
    await useFonts();
  };
  
  if (!appIsReady) {
    return null;
  }
 

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
  // Geeting some changes and so on 
  return (
    <AuthContext.Provider value={{ isAuth , setIsAuth }}  >
    {/* <AuthForm />  */}
      {/* {isAuth ? <AuthMain /> : <Navigation />} */}
      {isAuth ? <AuthForm /> : true ? <AuthMain /> : <Navigation />}
      <StatusBar />
     
    </AuthContext.Provider>
  )
};

