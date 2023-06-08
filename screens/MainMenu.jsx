
import { StyleSheet, Text, View , TouchableOpacity } from 'react-native';
import styled from 'styled-components/native'



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
font-size : 20;
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

export const MainMenuScreen = ( {navigation }) => {
    return (
        <FirstMenuView>
            <Title>Второе меню</Title>
            <Para>да да да </Para>
                <TouchableOpacity onPress ={ () => navigation.navigate('FirstMenuScreen')}>
                <Button >
                    <ButtonText>Иу </ButtonText>
                </Button>
                </TouchableOpacity>
               
        </FirstMenuView>
    );
};