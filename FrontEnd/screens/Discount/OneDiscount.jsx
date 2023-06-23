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
${'' /* background-color: #936EE3; */}
height: 60px;
width : 80%;
${'' /* border-radius: 15px; */}

flexDirection: row;
alignItems : center;
justifyContent : space-around;

margin-top: 50px;
margin-right: 55px;
margin-left: 22px;
`;


const ButtonText = styled.Text`
color : #000;
font-size : 16px;
font-weight : 500;
`;

const ButtonIcon = styled.Image`
width: 61px;
height: 61px;
`;
const ButtonRightArrow = styled.Image`
width: 50px;
height: 50px;
`;
const Title = styled.Text`
    color : #000;
    font-size: 16px;
    font-weight : bold;

`

const Row = styled.View`
    width: 100%;
    flexDirection: row;
    justify-content: space-between;
    align-items : center;
    ${'' /* justify-content: flex-end; */}

`
const Right = styled.View`
    flexDirection: row;
    justify-content:    flex-start;
    gap:15px;
    align-items : center;
    ${'' /* justify-content: flex-end; */}

`
const InfoWrap = styled.View`
    flex-direction: column;
    gap:10px;
    justify-content: space-around;
`
const RightArrowImage = styled.Image`
    width: 16px;
    height: 16px;
`

const staticImage = require("../../public/img/starbucks_logo.png");
const rightArrow = require("../../public/img/rightarrow_dis.png");
export const OneDisount = ( {navigation , name}) => {
    return (
        <Buttons >
         <Row>

        <Right>
                <ButtonIcon source={staticImage}/>
                <InfoWrap>
                    <Title>{name} </Title>
                    <ButtonText> 15%</ButtonText>
                </InfoWrap>
        </Right> 
            
            {/* <ButtonRightArrow source={rightArrow}/> */}
            <RightArrowImage source={rightArrow}/>
            {/* <Ionicons name="chevron-forward-outline" size={'20px'} color={'white'} /> */}
            </Row>
        </Buttons>

   
    );
};