import React, { useContext, useState } from 'react'
import { View , TouchableOpacity , TextInput } from 'react-native'
// import { useAuth } from '../context/useAuth'

import styled from 'styled-components/native'
// import Button from '../UI/Button'
// import Error from '../UI/Error'
// import AsyncStorage from '@react-native-async-storage/async-storage'
// import Field from '../UI/Field'

const FirstMenuView = styled.View`
    backgroundColor: #fff;
    margin-top: 200px;
    flexDirection: column;
    alignItems: center;
    justify-content: flex-end;
    gap: 40px;
`

const Button = styled.View`
${'' /* padding-top: 15px; */}
background-color: #363853;
height: 65px;
width : 280px;
border-radius: 15px;

alignItems : center;
justifyContent : center;
`;


const ButtonText = styled.Text`
color : #FFFFFF;
font-size : 15px;
font-weight : bold;
`;

const Title = styled.Text`
font-size : 48px;
color : #363853;
font-weight : bold;
`
const Para = styled.Text`
font-size : 16px;
color : #363853;
`


export const AuthMain = () => {
	// const [email, setEmail] = useState('')
	// const [password, setPassword] = useState('')
	// const [error, setError] = useState('')

	// const { isAuth, setIsAuth } = useAuth()
    const [value, onChangeText] = React.useState('Useless Multiline Placeholder');

	return (
		(<FirstMenuView>
            <Title>Cartera</Title>
            <Para>Email address ( Корпоративная)</Para>
            <TextInput
        // editable
        multiline
        numberOfLines={4}
        maxLength={40}
        onChangeText={text => onChangeText(text)}
        value={value}
        style={{padding: 10, borderWidth : 2}}
      />
 <Para>ID card</Para>
<TextInput
        // editable
        multiline
        numberOfLines={4}
        maxLength={40}
        onChangeText={text => onChangeText(text)}
        value={value}
        style={{padding: 10, borderWidth : 2}}
      />
            {/* <Para>С нами проще.</Para> */}
                <TouchableOpacity onPress ={ () => authHandler()}>
                    <Button >
                    <ButtonText>Войти </ButtonText>
                </Button>
                </TouchableOpacity>
            </FirstMenuView>) 
	)
}

// export default AuthMain
