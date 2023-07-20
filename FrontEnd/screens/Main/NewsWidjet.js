
import { StyleSheet, Text, View , TouchableOpacity } from 'react-native';
import styled from 'styled-components/native'

const Wrapper = styled.View`
    ${'' /* flex: 1; */}
    ${'' /* flexDirection: row;
    justifyContent: space-evenly; */}

`

const Center = styled.View`
    alignItems: center;
    justifyContent: center;
`


const TitleText = styled.Text`
    font-size:25px;
    font-weight: bold;
    font-family: 'Quicksand';
`

export const NewsWidjet = ( {navigation }) => {
    return (
        <Wrapper> 
            <Center>
                <TitleText>
                News
                </TitleText>
            </Center>
            </Wrapper>
    );
};