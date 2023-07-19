
import { StyleSheet, Text, View , TouchableOpacity } from 'react-native';
import styled from 'styled-components/native'
import { WebView } from 'react-native-webview';

const MainMenuWrapper = styled.View`
    backgroundColor: #fff;
    padding-top: 50px;
    height:100%;

`
const FirstMenuView = styled.View`
    flexDirection: column;
    gap:30px;
`


export const Camera = ( {navigation }) => {
  
    return (
        <MainMenuWrapper>
            <FirstMenuView>
                
            </FirstMenuView>
            <WebView 
          source={{ uri: 'https://reactnative.dev/' }} 
        />
        </MainMenuWrapper>
    );
};