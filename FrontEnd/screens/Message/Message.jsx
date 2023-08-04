
import { StyleSheet, Text, View , TouchableOpacity , FlatList , RefreshControl } from 'react-native';
import styled from 'styled-components/native'
import React from 'react'

import { NavBarCom } from '../..//components/Navbar'
import { OneMessage } from './OneMessage';

const MessageMainScreen = styled.View`
${'' /* flex:1; */}
    backgroundColor: #fff;
    padding-top: 50px;
    height:100%;
    ${'' /* flexDirection: column;
    alignItems: center;
    justifyContent: center;
    gap: 40px; */}
`
const FirstMenuView = styled.View`
    flex: 1;
    flexDirection: column;
    alignItems: center;
    gap:30px;
`
const MessageContainer = styled.View`
    width: 100%;

    ${'' /* background: blue; */}
    flexDirection: column;
    
`

export const Message = ( {navigation }) => {
    const [isLoading , setIsLoading] = React.useState(false);
    items = [
        '1' , '2' , '3'
    ]
    return (
        <MessageMainScreen>
      
         <NavBarCom title='Message' navigation={navigation}/>
        <FirstMenuView>

                

                <FlatList
      vertical
      bounces={false}
        refreshControl={<RefreshControl refreshing={isLoading} />}
        data={items}
        renderItem={ ({item}) => 
        <TouchableOpacity onPress ={ () => navigation.navigate('FullMessage' , {id : item.id , name : item.name })}>
            <OneMessage />
        </TouchableOpacity>
      } 

        // style={styles.StyleSheet}
      />
        {/* <MessageContainer>
            <OneMessage />
            <OneMessage />
            <OneMessage />
    </MessageContainer> */}

    

            </FirstMenuView>
</MessageMainScreen>
           
    );
};