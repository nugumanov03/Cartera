
import { StyleSheet, Text, View , TouchableOpacity } from 'react-native';
import styled from 'styled-components/native'

import { NavBarCom } from '../..//components/Navbar'
import { OneMessage } from './OneMessage';

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
const MessageContainer = styled.View`
    width: 100%;

    ${'' /* background: blue; */}
    flexDirection: column;
    
`

export const Message = ( {navigation }) => {
    return (
        <MessageMainScreen>
      
        <FirstMenuView>
         <NavBarCom />

                <Text>
                    Messages
                </Text>


        <MessageContainer>
            <OneMessage />
            <OneMessage />
            <OneMessage />
    </MessageContainer>

    

            </FirstMenuView>
</MessageMainScreen>
           
    );
};