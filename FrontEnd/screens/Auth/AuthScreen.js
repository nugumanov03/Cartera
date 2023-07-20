import React, { useContext, useState  ,useRef , useEffect} from 'react'
import { View ,Image, TouchableOpacity , TextInput  , Text , Animated , ScrollView , TouchableWithoutFeedback} from 'react-native'
// import { useAuth } from '../context/useAuth'
import { useSignIn } from '../..//context/useSignIn'

import styled from 'styled-components/native'
import {signInContext} from '../../context/signInContext';



// import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Pressable, } from 'react-native';


import {Navigation } from '..//Navigation'
// import Button from '../UI/Button'
// import Error from '../UI/Error'
// import AsyncStorage from '@react-native-async-storage/async-storage'
// import Field from '../UI/Field'

const FirstMenuView = styled.View`
    backgroundColor: #fff;
    margin-top: 100px;
    flexDirection: column;
    alignItems: center;
    ${'' /* justify-content: flex-end; */}
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

const Row = styled.View`
${'' /* width: 100%; */}
flexDirection: row;
alignItems : center;
gap : 20px;
${'' /* justifyContent : space-between; */}
`;
const ContentWrap = styled.View`
flexDirection: column;
alignItems : center;
justifyContent : space-between;
gap: 40px;
marginRight: 30px;
marginLeft: 30px;
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
margin-top : 100px;
`
const Para = styled.Text`
font-size : 16px;
color : #363853;
`
const TextTitle = styled.Text`
font-size : 25px;
color : #363853;
`

const Input = styled.TextInput`
    borderWidth: 0px;
    borderBottomWidth: 1px;
    ${'' /* backgroundColor: #fffff5; */}
    borderColor : #E0E0E0;
    ${'' /* borderRightWidth: 4; */}
    ${'' /* borderRadius: 15px; */}

    min-width : 150px;
    height : 50px;
    padding : 15px;

    max-width : 250px;
    ${'' /* max-height : 250px;asd */}
`
export const AuthMain = () => {
	// const [email, setEmail] = useState('')
	// const [password, setPassword] = useState('')
	// const [error, setError] = useState('')

	// const { isAuth, setIsAuth } = useAuth()
	// const { isSignIn, setisSignIn } = useSignIn()
    const [ isSignIn , setisSignIn] = React.useState(true);
    const [valueEmail, onChangeTextEmail] = React.useState('my_kbtu@kbtu.kz');
    const [valueID, onChangeTextID] = React.useState('21B01002');
    const authHandler2 = async () => {
        setModalVisible(!modalVisible)
        console.log('Ok 2' , isSignIn);
        console.log(valueEmail);
        console.log(valueID);
		if (valueEmail && valueID) {
			if (valueEmail !== 'test@test.ru') {
				return  console.log('Не верный Email')
			}

			if (valueID !== '12345') {
				return  console.log('Не верный пароль')
			}

			// await AsyncStorage.setItem('token', 'w23eefq234Ad')
			setisSignIn(false)
		} else {
			setError('Заполните все поля!')
		}
	}   
    const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: -100,
      duration: 1000,
      useNativeDriver: true,
    }).start( () => {console.log("End Animation")});
  }, [fadeAnim]);
  const [modalVisible, setModalVisible] = useState(false);
	return (
        <signInContext.Provider value={{ isSignIn , setisSignIn }}>
        { isSignIn ? 
        
		<FirstMenuView>
        <Modal 
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {setModalVisible(false)}}
        >
          <TouchableOpacity 
            style={styles.container} 
            activeOpacity={1} 
            onPressOut={() => {setModalVisible(false)}}
          >
            <ScrollView 
              directionalLockEnabled={true} 
              contentContainerStyle={styles.scrollModal}
            >
              <TouchableWithoutFeedback>
                <View style={styles.modalContainer}>
                  <Text>Here you put the content of your modal. </Text> 
                  <Image source={require('../../assets/icons8-успех.gif')} />
                </View>
              </TouchableWithoutFeedback>
            </ScrollView>
          </TouchableOpacity>   
        </Modal> 

        <Animated.View // Special animatable View
      style={{
        transform: [{translateY: fadeAnim}]
        // marginTop: fadeAnim, // Bind opacity to animated value
      }}>
    <Title>Cartera</Title>
    </Animated.View>
      <ContentWrap>

      <TextTitle>
        Войдите в ваше единную почту и наслаждайтесь пользованием!
      </TextTitle>
            {/* <Title>Cartera</Title> */}
            <Row>
            <Para>Email</Para>
            <Input
        // editable
        // multiline
        numberOfLines={4}
        maxLength={40}
        onChangeText={text => onChangeTextEmail(text)}
        // value={valueEmail}
        placeholder={valueEmail}
        placeholderTextColor="#E0E0E0"
      />
        </Row>
      <Row>
 <Para>ID</Para>
<Input
        // editable
        // multiline
        numberOfLines={2}
        maxLength={30}
        onChangeText={text => onChangeTextID(text)}
        placeholder={valueID}
        placeholderTextColor="#E0E0E0"
      />
            </Row>
            {/* <Para>С нами проще.</Para> */}
                <TouchableOpacity onPress ={ () => authHandler2()}>
                    <Button >
                    <ButtonText>Войти </ButtonText>
                </Button>
                </TouchableOpacity>
                </ContentWrap>
                
            </FirstMenuView>
            
            :   <Navigation/>
             }
            </signInContext.Provider>
	)
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 202,
    backgroundColor: '#F194FF',
    padding: 30 ,
  },
  scrollModal: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 55,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
