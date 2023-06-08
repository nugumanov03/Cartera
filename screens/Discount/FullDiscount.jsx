import { StyleSheet, Text, View , TouchableOpacity } from 'react-native';
import styled from 'styled-components/native'




const Wrapper = styled.View`
    backgroundColor: #fff;
    flex : 1;
    
    flexDirection: column;
    alignItems: center;
    ${'' /* justifyContent: center; */}
    gap: 40px;
`

const ButtonsWrapper = styled.View`
  flexDirection: column;
    alignItems: center;
    margin-top:100px;
    gap: 40px;
`
const Buttons = styled.View`
${'' /* padding-top: 15px; */}
background-color: #936EE3;
height: 80px;
width : 300px;
border-radius: 15px;

flexDirection: row;
alignItems : center;
justifyContent : space-around;
`;


const ButtonText = styled.Text`
color : #FFFFFF;
font-size : 20;
font-weight : bold;
`;

const ButtonIcon = styled.Image`
width: 50px;
height: 50px;
`;
const ButtonRightArrow = styled.Image`
width: 50px;
height: 50px;
`;


const staticImage = require("../../public/img/coffee.png");
const rightArrow = require("../../public/img/rightArrow.png");
export const FullDiscount = ( {navigation , route }) => {
    const { id , name } = route.params;

    return (
        
      <Wrapper>
      <ButtonsWrapper>
                <TouchableOpacity onPress ={ () => navigation.navigate('MainMenuScreen')}>
                    <Buttons >
                    <ButtonIcon source={staticImage}/>
                    <ButtonText> {name} </ButtonText>
                    <ButtonRightArrow source={rightArrow}/>
                </Buttons>
                </TouchableOpacity>
                
        </ButtonsWrapper>
        </Wrapper>
    );
};