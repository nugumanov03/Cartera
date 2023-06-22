
import { StyleSheet, Text, View , TouchableOpacity } from 'react-native';
import styled from 'styled-components/native'

import { NavBarCom } from '../..//components/Navbar'


const MessageMainScreen = styled.View`
    backgroundColor: #fff;
    padding-top: 50px;
    height:100%;
    ${'' /* flexDirection: column;
    alignItems: center;
    justifyContent: center;
    gap: 40px; */}
`
const FirstMenuView = styled.View`
    flexDirection: column;
    gap:30px;
`
const MessageWraper = styled.View`
    flexDirection: column;
    gap:10px;
`
const RightImage = styled.View`
    width: 45px;
    height:45px;
    ${'' /* background: red; */}
`
const MessageAva = styled.Image`
    width: 45px;
    height: 45px;
`
const InfoWraper = styled.View`
    flexDirection: row;
    justifyContent: space-between;
    
`
const MessageLeft = styled.View`
    flexDirection: column;
    justifyContent: space-between;

`
const MessageRight = styled.View`
    flexDirection: column;
    justifyContent: space-between;

`


const MessageTitle = styled.Text`
    font-size:20px;
`

const MessagePara = styled.Text`
    font-size:20px;
`
const MessageTime = styled.Text`
    font-size:20px;
`


const MessageRightArrow = require('../../public/img/MessageRightArrow.png')
const MessageAvatar = require('../../public/img/MessageTest.png')

const Arrow = styled.Image`
    width:5.6px;
    height:11.1px;
`
export const Message = ( {navigation }) => {
    return (
        <MessageMainScreen>
      
        <FirstMenuView>
         <NavBarCom />

                <Text>
                    Messages
                </Text>

            <MessageWraper>
                <RightImage>
                    <MessageAva source={MessageAvatar} />
                </RightImage>
                <InfoWraper>
                    <MessageLeft>

                    <MessageTitle>
                        Kaspi Gold
                    </MessageTitle>
                    <MessagePara>
                        Pokupka : 700 tg\n 
                        KFC @!@ ...
                    </MessagePara>
                    </MessageLeft>

                <MessageRight>
                    <MessageTime>
                        19:32
                    </MessageTime>
                    <Arrow source={MessageRightArrow}/>
                    </MessageRight>
                </InfoWraper>
            </MessageWraper>



            </FirstMenuView>
</MessageMainScreen>
           
    );
};