import React, { useContext, useState } from 'react'
import { View , TouchableOpacity } from 'react-native'
import { useAuth } from './context/useAuth'
import { useSignIn } from './context/useSignIn'

import styled from 'styled-components/native'

const FirstMenuView = styled.View`
    backgroundColor: #fff;
    margin-top: 200px;
    flexDirection: column;
    alignItems: center;
    justifyContent: center;
    gap: 40px;
`

const Button = styled.View`
padding-top: 15px;
background-color: #363853;
height: 65px;
width : 240px;
border-radius: 15px;

alignItems : center;
justifyContent : 'center';

marginTop: 120px;
`;


const ButtonText = styled.Text`
color : #FFFFFF;
font-size : 20px;
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


const AuthForm = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')

	const { isAuth, setIsAuth } = useAuth()
	const { isSignIn, setisSignIn } = useSignIn()

	const authHandler = async () => {
        console.log('Ok 1');
		// if (email && password) {
		// 	if (email !== 'test@test.ru') {
		// 		return setError('Не верный Email')
		// 	}

		// 	if (password !== '12345') {
		// 		return setError('Не верный пароль')
		// 	}

			// await AsyncStorage.setItem('token', 'w23eefq234Ad')
			setIsAuth(false)
	}

	return (
		(<FirstMenuView>
            <Title>Cartera</Title>
            <Para>С нами проще.</Para>
                <TouchableOpacity onPress ={ () => authHandler()}>
                    <Button >
                    <ButtonText>Начать </ButtonText>
                </Button>
                </TouchableOpacity>
            </FirstMenuView>) 
	)
}

export default AuthForm
