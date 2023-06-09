import { StyleSheet, Text, View , TouchableOpacity } from 'react-native';
import styled from 'styled-components/native'
import Ionicons from 'react-native-vector-icons/Ionicons';

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

margin-top: 50px;
`;


const ButtonText = styled.Text`
color : #FFFFFF;
font-size : 20px;
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
export const OneDisount = ( {navigation , name}) => {
    return (
        
      

        <Buttons >
            <ButtonIcon source={staticImage}/>
            <ButtonText>  {name} </ButtonText>
            
            {/* <ButtonRightArrow source={rightArrow}/> */}
            <Ionicons name="chevron-forward-outline" size={'20px'} color={'white'} />
        </Buttons>

   
    );
};