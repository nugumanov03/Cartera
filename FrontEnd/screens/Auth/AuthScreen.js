import React, { useContext, useState  ,useRef , useEffect} from 'react'
import { View ,Image, TouchableOpacity , TextInput  , Text , Animated , ScrollView , TouchableWithoutFeedback} from 'react-native'

import { useSignIn } from '../..//context/useSignIn'

import styled from 'styled-components/native'
import {signInContext} from '../../context/signInContext';

import axios from 'axios'


import {Alert, Modal, StyleSheet, Pressable, } from 'react-native';


import {LoadIndicator} from '../../components/LoadIndicator'
import {Navigation } from '..//Navigation'


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
const Center = styled.View`
flexDirection: column;
alignItems : center;
justifyContent : center;

marginTop: 30px;
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
font-size : 18px;
color : #363853;
font-family: 'Quicksand';
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
    const [isLoading, setIsLoading] = React.useState(false);

    const [ isSignIn , setisSignIn] = React.useState(true);
    const [valueEmail, onChangeTextEmail] = React.useState('my_kbtu@kbtu.kz');
    const [valueID, onChangeTextID] = React.useState('21B01002');
   
    const authHandler2 = async () => {
        console.log('Ok 2' , isSignIn);
        console.log(valueEmail);
        console.log(valueID);
        const nameRegex = new RegExp(/^[\w]+@kbtu.kz$/i);
        const IDregEx = new RegExp(/^[\d]{2}[\w][\d]{6}$/i);
        if (nameRegex.test(valueEmail)) {
            console.log("checking fo kbtu mail was ok")
        }else {
            console.log("checking fo kbtu mail wasn't ok")
        }
        if (IDregEx.test(valueID)) {
            console.log("checking fo ID mail was ok")
        }else {
            console.log("checking fo ID mail wasn't ok")
        }
		if (valueEmail && valueID) {
			if (valueEmail !== '12345') {
                // setIsLoading(false)
                setModalVisible(!modalVisible)
				return  console.log('Не верный Email')
			}

			if (valueID !== '12345') {
                // setIsLoading(false)
                setModalVisible(!modalVisible)
				return  console.log('Не верный пароль')
			}

			// await AsyncStorage.setItem('token', 'w23eefq234Ad')
			// setisSignIn(false)
            // setIsLoading(true)
            console.log('Here')
           
            setIsLoading(true);
            axios.post('http://localhost:8080/sessions',{
                email:"user1@example.com",
                password:"password"
            })
            .then(({data}) => {
                // setItems(data);
                console.log("responce: " + data.id + data.email);
            }).catch(err => {
                console.log(err)
                // alert('some errors api')r
                alert(err)
            })
            .finally( () =>{
                // setIsLoading(false);
                console.log('Here3')
            })
        ;
        console.log('Here2')
    


            setTimeout(()=>{setIsLoading(false)
                setisSignIn(false)} , 2000)
            
		} 
        // setIsLoading(false)
	}   
    const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
    const fadeAnim2 = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
    const fadeAnim3 = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
    const OpacityAnimanate = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

    useEffect(() => {
      Animated.timing(fadeAnim, {
        toValue: -100,
        duration: 1000,
        useNativeDriver: true,
      }).start( () => {console.log("End Animation 1")});
    Animated.timing(OpacityAnimanate, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start( () => {console.log("End Animation 2")});
  Animated.timing(fadeAnim2, {
    toValue: -50,
    duration: 1000,
    useNativeDriver: true,
  }).start( () => {console.log("End Animation 3")})
  Animated.timing(fadeAnim3, {
    toValue: 50,
    duration: 1000,
    useNativeDriver: true,
  }).start( () => {console.log("End Animation 4")});
}
  , [fadeAnim] ,OpacityAnimanate, fadeAnim2 ,fadeAnim3);
    const [modalVisible, setModalVisible] = useState(false);
  
	return (
        <signInContext.Provider value={{ isSignIn , setisSignIn }}>
        { isSignIn ? 
        
		<FirstMenuView>
        <LoadIndicator isLoading={isLoading} />
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
                  <Text>Неверный логин или айди</Text> 
                  <Center>
                  <Image source={require('../../assets/icons8-ошибка.gif')} />
                  </Center>
                 
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
      <Animated.View // Special animatable View
      style={{
        transform : [{translateY: fadeAnim2}],
        opacity: OpacityAnimanate
        // marginTop: fadeAnim, // Bind opacity to animated value
      }}>
    <TextTitle>
        Войдите в ваше единную почту и наслаждайтесь пользованием!
      </TextTitle>
    
      </Animated.View>
      <Animated.View // Special animatable View
      style={{
        opacity: OpacityAnimanate,
        // transform: [{translateY: fadeAnim3}]
        // marginTop: fadeAnim, // Bind opacity to animated value
      }}>
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
            </Animated.View>
            {/* <Para>С нами проще.</Para> */}
            <Animated.View // Special animatable View
      style={{
        // opacity: OpacityAnimanate,
        transform: [{translateY: fadeAnim3}]
        // marginTop: fadeAnim, // Bind opacity to animated value
      }}>
                <TouchableOpacity onPress ={ () => authHandler2()}>
                    <Button >
                    <ButtonText>Войти </ButtonText>
                </Button>
                </TouchableOpacity>
                </Animated.View>
                </ContentWrap>
               
            </FirstMenuView>
            
            :   <Navigation/>
             }
            </signInContext.Provider>
	)
}

const styles = StyleSheet.create({
    lottie: {
        width: 25,
        height: 25,
    },
    container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 202,
    // backgroundColor: '#F194FF',
    // opacity: 6,
    padding: 30 ,
  },
  scrollModal: {
    margin: 20,
    marginTop: 250,
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
