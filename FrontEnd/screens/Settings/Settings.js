
import { StyleSheet, Text, View , TouchableOpacity } from 'react-native';
import styled from 'styled-components/native'
import React ,{useState} from 'react'

const MainMenuWrapper = styled.View`
    backgroundColor: #fff;
    padding-top: 50px;
    height:100%;
    ${'' /* flexDirection: column;
    alignItems: center;
    justifyContent: center;
    gap: 40px; */}
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


const Title = styled.Text`
font-size : 48px;
color :   #363853;
font-weight : bold;
`
const Para = styled.Text`
font-size : 16px;
color : #363853;
`

const ButtonText = styled.Text`
    color : ##FFF;
    font-size : 20px;
    font-weight : bold;
    `;



export const SettingsScreen = ( {navigation }) => {
    const {theme,setTheme} = React.useState('light');
    

    return (
     <MainMenuWrapper>
        <FirstMenuView>
            <Title>Настройки</Title>
            
                <TouchableOpacity onPress ={ () => navigation.navigate('FirstMenuScreen')}>
                <Button >
                    <ButtonText style={[{color : '#000' },styles.container,]}> Abothemnb nsr change () </ButtonText>
                </Button>
                </TouchableOpacity>
               
        </FirstMenuView>
        </MainMenuWrapper>
    );
};


const styles = StyleSheet.create({
    container: {
      color:  '#fff',
      padding: 8
    }
})