import { StyleSheet, Text, View , TouchableOpacity } from 'react-native';
import styled from 'styled-components/native'

import { WidjetInfo } from './WidjetInfo';
import { WidjetTasks } from './WidjetTasks';

const Wrapper = styled.View`
    backgroundColor: #fff;
    flex : 1;
    
    flexDirection: column;
    alignItems: center;

`
const ButtonsWrapper = styled.View`
  flexDirection: column;
    alignItems: center;
    margin-top:100px;
    gap: 5px;
`
const WidjetAvatar = styled.View`
  flexDirection: column;
    alignItems: center;
`
const Row = styled.View`
    flexDirection: row;
    alignItems: center;
    gap: 20px;
`
const Center = styled.View`
`

const MainAva = styled.Image`
width: 136.348px;
height: 126.244px;
${'' /* flex-shrink: 0; */}
`
const Icons = styled.Image`
width: 43px;
height: 43px;
flex-shrink: 0;
`

const TitleName = styled.Text`
    color: #000;
    text-align: center;
    font-size: 16px;
    ${'' /* font-family: Quicksand; */}
    font-weight: 700;
    line-height: 40px;
    letter-spacing: 1.6px;
    text-transform: capitalize;
`

const AvaImg = require('../..//public/img/Ava.png')
const settingsIMG= require('../..//public/img/settings_ava.png')
const AddIMG = require('../..//public/img/ProfileAdd_ava.png')
export const Avatar = ( {navigation }) => {
    return (
        
        <Wrapper>
      <ButtonsWrapper>


        <WidjetAvatar>
            <Row>
                <Icons source={settingsIMG}></Icons>
                <MainAva source={AvaImg}/>
                <Icons source={AddIMG}></Icons>
            </Row>
            <Center>
                <TitleName>
                    Arman
                </TitleName>
            </Center>
            
        </WidjetAvatar>
        <WidjetInfo />
        <WidjetTasks />

        </ButtonsWrapper>
        </Wrapper>
    );
};