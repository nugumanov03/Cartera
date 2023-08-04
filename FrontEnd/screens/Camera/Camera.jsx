
import styled from 'styled-components/native'
import { WebView } from 'react-native-webview';


const MainMenuWrapper = styled.View`
    backgroundColor: #fff;
    padding-top: 50px;
    height:100%;

`

export const Camera = ( {navigation }) => {

    return (
        <MainMenuWrapper>

            <WebView 
          source={{ uri: 'https://almavalley.kz/' }} />

        
        </MainMenuWrapper>
    );
};