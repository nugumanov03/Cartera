import { useEffect } from 'react';
import { StyleSheet, Text, View , TouchableOpacity } from 'react-native';
import styled from 'styled-components/native'




const Wrapper = styled.View`
    backgroundColor: #fff;
    flex : 1;
    
    flexDirection: column-reverse;
    alignItems: left;
    ${'' /* justifyContent: center; */}
    gap: 40px;

    padding-bottom: 20px;
    padding-left: 30px;

    background-color : #FFE5CC;
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
font-size : 20px;
font-weight : bold;
font-family: 'Quicksand';
`;

const ButtonIcon = styled.Image`
width: 50px;
height: 50px;
`;
const ButtonRightArrow = styled.Image`
width: 50px;
height: 50px;
`;

const MessageWrap = styled.View`
    flexDirection: row;
    gap: 10px;
`
const MessageIcon = styled.View`
    flexDirection: column;
    justifyContent: flex-end;
`
const MessageMain = styled.View`
    flexDirection: column;
    padding : 25px;
    gap: 20px;
    background-color : #FFFFFF;
    borderRadius: 15px;
    border-bottom-left-radius: 0px;
`
const MWrap = styled.View`
    flexDirection: column;
    width: 90%;
    ${'' /* padding : 15px; */}
    gap: 10px;
    background-color : #FFFFFF;
    borderRadius: 15px;
    border-bottom-left-radius: 0px;

`

const MText = styled.Text`
    flexWrap: wrap;
    font-size:16px;
    ${'' /* wrap: break-word; */}
`
const MessageAva = styled.Image`
    width: 45px;
    height: 45px;
`

const TimeSector = styled.View`

    flexDirection: row;
    justifyContent: flex-end;
`
const Time = styled.Text`
    font-size:12px;
    color : #808080
`

const staticImage = require("../../public/img/coffee.png");
const rightArrow = require("../../public/img/rightArrow.png");
const MessageAvatar = require('../../public/img/MessageTest.png')

export const FullMessage = ( {navigation , route }) => {
    const { id , name } = route.params;
    const productTitle = "KaspiGold"
    useEffect( () => {
        navigation.setOptions({
            title: productTitle,
         })
    }, [productTitle])
   

    return (
        
      <Wrapper>
           
            
            <MessageWrap>
                <MessageIcon>
                    <MessageAva source={MessageAvatar} />
                </MessageIcon>

                <MessageMain>
                        <MWrap>
                            <MText>
                                Pokupka : 123213jkabsdoasjbdljasbdlasb
                                asdasdasdasd
                            </MText>
                            <MText>
                                Pokupka : 123213
                            </MText>
                            <MText>
                                Pokupka : 123213
                            </MText>
                        </MWrap>
                        <TimeSector>
                            <Time>
                                17:32
                            </Time>
                        </TimeSector>
                    </MessageMain>
            </MessageWrap>

            <MessageWrap>
                <MessageIcon>
                    <MessageAva source={MessageAvatar} />
                </MessageIcon>

                <MessageMain>
                        <MWrap>
                            <MText>
                                Pokupka : 123213jkabsdoasjbdljasbdlasb
                                asdasdasdasd
                            </MText>
                            <MText>
                                Pokupka : 123213
                            </MText>
                            <MText>
                                Pokupka : 123213
                            </MText>
                        </MWrap>
                        <TimeSector>
                            <Time>
                                17:32
                            </Time>
                        </TimeSector>
                    </MessageMain>
            </MessageWrap>
            
        </Wrapper>
    );
};