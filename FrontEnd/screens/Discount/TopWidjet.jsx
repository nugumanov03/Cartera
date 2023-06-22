import { StyleSheet, Text, View , TouchableOpacity } from 'react-native';
import styled from 'styled-components/native'
import Ionicons from 'react-native-vector-icons/Ionicons';



const starbucks = require("../../public/img/starbucks.png");
const lanzhou = require("../../public/img/lanzhou.png");
const pizzahut = require("../../public/img/pizzahut.png");

const Wrapper = styled.View`
    flexDirection: column;
    gap: 20px;
`
const Row = styled.View`
    flexDirection: row;
    gap:20px;
`
const LeftTop = styled.Image`
    width: 189px;
    height: 145px;
`
const RightTop = styled.Image`
    width: 149px;
    height: 145px;
`
const Bottom = styled.Image`
    width: 371px;
    height: 90px;
`

export const TopWidjet = ( {navigation , name}) => {
    return (
        <Wrapper>
            <Row>
                <LeftTop source={starbucks}/>
                <RightTop source={lanzhou}/>
            </Row>
                <Bottom source={pizzahut} />
        </Wrapper>
   
    );
};