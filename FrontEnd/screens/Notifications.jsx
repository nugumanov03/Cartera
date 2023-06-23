
import {Text, View , TouchableOpacity } from 'react-native';
import styled from 'styled-components/native'

import React from 'react';

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
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';

export const NotificationScreen = ( {navigation }) => {
    const [text, onChangeText] = React.useState('Useless Text');
    const [number, onChangeNumber] = React.useState('');

    return (
        <FirstMenuView>
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
        // enablesReturnKeyAutomatically={true}
      />
    </SafeAreaView>
    <Text> {text}</Text>

        </FirstMenuView>
    );
};

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });
  