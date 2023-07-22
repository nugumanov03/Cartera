import { StyleSheet, Text, View , TouchableOpacity, Settings } from 'react-native';
import styled from 'styled-components/native'

import Ionicons from 'react-native-vector-icons/Ionicons';

import SettingsIcon from '../..//FrontEnd/public/img/settingsIcon.svg'
import NotificationIcon from '../..//FrontEnd/public/img/notificationIcon.svg'
import { Colors } from 'react-native/Libraries/NewAppScreen';


const Header = styled.View`
    ${'' /* flex: 1; */}
    transparent: true;
    justifyContent:  center;
    marginTop: 50px;

`
const Center = styled.View`
    flexDirection : row;
    gap: 20px;
`
const Wrap = styled.View`
    ${'' /* width: 100%; */}
    flexDirection : row;
    marginRight:30px;
    marginLeft:30px;
    padding-bottom: 20px;
    gap: 102px;
`

const LeftSide = styled.View`
    width: 32px;
    height: 32px;
`
const Title = styled.Text`
font-size:25px;
fontFamily : 'QuicksandB';
fontWeight : bold;
`

const ImgBac = styled.Image`
 width: 32px;
    height: 32px;
`
const imgBack = require("../assets/imgBack.png")
// const settingsIcon = require("../public/img/settingsIcon.svg")

export default  NaviHeader = ( {navigation , title}) => {
    // console.log(title)
    return (
            <Header>  
                <Wrap>
                <TouchableOpacity
                onPress={ ()=> {
                    navigation.goBack()
                }}>
                <LeftSide>
                    <ImgBac source={imgBack} />
                </LeftSide>
                </TouchableOpacity>
                <Center>
                    <Title>
                        {title}
                    </Title>
                </Center>
                <View></View>
                </Wrap>
            </Header>
    );
};