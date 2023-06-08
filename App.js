import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TouchableOpacity } from 'react-native';

import { Navigation } from './screens/Navigation';
import React , {useState , useEffect} from 'react';

import { FirstMenuScreen } from './components/FirstMenu';

import styled from 'styled-components/native'
 
const Center = styled.View`
flex : 1;
flexDirection: column;
justifyContent : center;
alignItems: center;
`


const FirstMenuView = styled.View`
    backgroundColor: #fff;
    margin-top: 200px;
    flexDirection: column;
    alignItems: center;
    justifyContent: center;
    gap: 40px;
`

const Button = styled.View`
padding-top: 15px;
background-color: #363853;
height: 65px;
width : 240px;
border-radius: 15px;

alignItems : center;
justifyContent : 'center';
`;


const ButtonText = styled.Text`
color : #FFFFFF;
font-size : 20px;
font-weight : bold;
`;

const Title = styled.Text`
font-size : 48px;
color : #363853;
font-weight : bold;
`
const Para = styled.Text`
font-size : 16px;
color : #363853;
`

export default function App() {
  const [ isAuth , setAuth] = React.useState(false);

  React.useEffect(() => {
    setAuth(true);
  });

  const auth = (state) => {
    setAuth(state);
    console.log('Changed')
  }

  if(isAuth) {
    return(
      <FirstMenuView>
      <Title>Cartera</Title>
      <Para>С нами проще.</Para>
          <TouchableOpacity onPress ={ () => auth(false)}>
              <Button >
              <ButtonText>Начать </ButtonText>
          </Button>
          </TouchableOpacity>
      </FirstMenuView>
    )
  }
  return ( 
    
    <Navigation />
   
    

  );
};
