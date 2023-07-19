import { StyleSheet, Text, View , TouchableOpacity, Settings } from 'react-native';
import styled from 'styled-components/native'

import Ionicons from 'react-native-vector-icons/Ionicons';

import SettingsIcon from '../..//FrontEnd/public/img/settingsIcon.svg'
import NotificationIcon from '../..//FrontEnd/public/img/notificationIcon.svg'
import { Colors } from 'react-native/Libraries/NewAppScreen';
const HeaderView = styled.View`
    flexDirection : row;
    gap: 20px;
    justifyContent: flex-end;

`
const Wrapper = styled.View`
    ${'' /* flex : 1; */}
    width : 50px; 
    ${'' /* Was 100px */}
    flexDirection : row;
    ${'' /* justifyContent: flex-end; */}
    gap: 20px;
`

const NavIcons = styled.View`
    width: 32px;
    height: 32px;
`
const notificationIcon = require("../public/img/notificationIcon.svg")
// const settingsIcon = require("../public/img/settingsIcon.svg")

export const NavBarCom = ( {navigation }) => {
    return (
        
        <HeaderView>
        <Wrapper>
                {/* <TouchableOpacity onPress ={ () => navigation.navigate('NotificationScreen')}>
                    <NotificationIcon size={32} fill={"#fff"} />
                </TouchableOpacity> */}
                <TouchableOpacity onPress ={ () => navigation.navigate('SettingsScreen')}>
                    {/* <Ionicons name="settings-outline" size={'20px'} color={'black'} /> */}
                    {/* <NavIcons source={settingsIcon} /> */}
                    <SettingsIcon size={32} fill={"#fff"} />
                </TouchableOpacity>
            </Wrapper>
        </HeaderView>
    );
};