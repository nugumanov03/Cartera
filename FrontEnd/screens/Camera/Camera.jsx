
import { StyleSheet, Text, View , TouchableOpacity } from 'react-native';
import styled from 'styled-components/native'

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
                <Text>WebView HERE</Text>
            </FirstMenuView>
        </MainMenuWrapper>
    );
};