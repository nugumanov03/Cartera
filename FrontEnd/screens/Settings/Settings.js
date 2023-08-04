
import { StyleSheet, Text, View , TouchableOpacity, Image } from 'react-native';
import styled from 'styled-components/native'
import React ,{useState} from 'react'


import SettingsIcon from '../../public/img/settingsIcon.svg'
const MainMenuWrapper = styled.View`
    backgroundColor: #fff;
    padding-right: 65px;
    padding-left: 65px;
    height:100%;
`

const FirstMenuView = styled.View`
    ${'' /* flex: 1; */}
    padding-top: 150px;
    flexDirection: column;
    alignItems: center;
    justifyContent: space-between; 
    gap: 60px;
`
const OptionTitle = styled.Text`
color: var(--gelap, #363853);

/* Section 1 */

    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`
const LeftIcon = styled.Image`
    ${'' /* width: 24px;
    height: 24px; */}
    ${'' /* flex-shrink: 0; */}
    ${'' /* borderRadius: 50%;
    background: #000; */}

`
const SetOption = styled.View`
    ${'' /* flex: 1; */}
    width:250px;
    flexDirection: row;
    justifyContent: space-between;
    padding-right: 10px;
    padding-left: 10px;
    ${'' /* background: #000; */}
`
const LeftSide = styled.View`
    flexDirection: row;
    justifyContent: space-around;
    gap:20px;
    ${'' /* background: #000; */}
`
const Center = styled.View`
    ${'' /* flex: 1; */}
    ${'' /* height: 20%;  */}
    justifyContent: center;
    alignItems: center;
    ${'' /* backgroundColor: #AAAAAA; */}
    ${'' /* gap:20px; */}
    ${'' /* background: #000; */}
`
const MainIcon = styled.Image`
    ${'' /* width: 50%;
    height: 50%; */}
    ${'' /* gap:20px; */}
    ${'' /* background: #000; */}
`

const logImg = require('../../assets/Logout.png')
const rightArrow = require('../../assets/Vector.png')
const mainImg = require('../../public/img/settingsIcon.svg')
export const SettingsScreen = ( {navigation }) => {
    const {theme,setTheme} = React.useState('light');
    

    return (
     <MainMenuWrapper>
        <FirstMenuView>
            <Center>
                <SettingsIcon  width="70" height="70" fill={"#fff"}/>
            </Center>

            <TouchableOpacity>
                <SetOption>
                    <LeftSide>
                        {/* <OptionAva source={logImg} /> */}
                        <OptionTitle>Face ID</OptionTitle>
                    </LeftSide>
                    <LeftIcon source={rightArrow}/>
                </SetOption>
            </TouchableOpacity>
            <TouchableOpacity>
                <SetOption>
                    <LeftSide>
                        {/* <OptionAva source={logImg} /> */}
                        <OptionTitle>Language</OptionTitle>
                    </LeftSide>
                    <LeftIcon source={rightArrow}/>
                </SetOption>
            </TouchableOpacity>
            <TouchableOpacity>
                <SetOption>
                    <LeftSide>
                        {/* <OptionAva source={logImg} /> */}
                        <OptionTitle>Logout</OptionTitle>
                    </LeftSide>
                    <LeftIcon source={rightArrow}/>
                </SetOption>
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