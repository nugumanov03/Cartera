
import { StyleSheet, Text, View , TouchableOpacity } from 'react-native';
import styled from 'styled-components/native'


const MessageWraper = styled.View`

    ${'' /* background: red; */}
    ${'' /* flex: 1; */}
    width: 100%;
    flexDirection: row;
    justify-content: space-between;
    ${'' /* align-items:center; */}
    gap:10px;
    padding:20px;
    border-bottom: 1px solid black;
`
const MessageLine = styled.View`

    width: 90%;
    height: 1px;
    background: black;
    opacity: 0.7;
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

const MessageLeft = styled.View`
    flexDirection: row;
    justifyContent: space-between;
    align-items: center;
    gap: 19px;

`
const MessageRight = styled.View`
    margin-top: 10px;
    flexDirection: row;
    justifyContent: space-between;
    gap:16px;

`
const InfoLeft = styled.View`
    flexDirection: column;
    justifyContent: space-between;

`
const OneMessageView = styled.View`
    width: 100%;
 flexDirection: column;
 justify-content: center;
 align-items: center;
 `


const MessageTitle = styled.Text`
    color: #000;
font-size: 16px;
${'' /* font-family: Quicksand; */}
font-weight: 700;
line-height: 34px;
`

const MessagePara = styled.Text`
    color: #000;
    font-size: 11px;
    ${'' /* font-family: Quicksand; */}
    font-weight: 600;
    line-height: 14.5px;

    max-width: 130px;
`
const MessageTime = styled.Text`
    color: #000;
font-size: 9px;
${'' /* font-family: Quicksand; */}
font-weight: 600;
line-height: 14.5px;

opacity: 0.5;
`


const MessageRightArrow = require('../../public/img/MessageRightArrow.png')
const MessageAvatar = require('../../public/img/MessageTest.png')

const Arrow = styled.Image`
    width: 5.633px;
    height: 11.137px;

`

export const OneMessage = ( {navigation }) => {
  
    return (
        <OneMessageView>
            <MessageWraper>
                <MessageLeft>
                    <RightImage>
                        <MessageAva source={MessageAvatar} />
                    </RightImage>
                    
                    <InfoLeft>
                        <MessageTitle>
                            Kaspi Gold
                        </MessageTitle>
                        <MessagePara>
                            Pokupka : 700 tg\n 
                            KFC @!@ ...
                        </MessagePara>
                    </InfoLeft>

                    </MessageLeft>

                <MessageRight>
                    <MessageTime>
                        19:32
                    </MessageTime>
                    <Arrow source={MessageRightArrow}/>
                </MessageRight>
                </MessageWraper>
            <MessageLine />
            </OneMessageView>
    );
};