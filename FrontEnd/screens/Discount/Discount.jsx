import { StyleSheet, Text, View , TouchableOpacity , FlatList , ActivityIndicator , RefreshControl} from 'react-native';

import axios from 'axios';
import styled from 'styled-components/native'

import { OneDisount } from './OneDiscount';


import React  from 'react';
import { NavBarCom } from '../../components/Navbar';
import {TopWidjet } from './TopWidjet'

const DiscountScreenWrapper = styled.View`
  ${'' /* flex : 1; */}
  height: 100%;
  padding-top:70px;
  backgroundColor: #fff;
`
const Wrapper = styled.View`
    gap:30px;
    flexDirection: column;
    alignItems: center;
    ${'' /* justifyContent: center; */}
    ${'' /* gap: 40px; */}
    ${'' /* margin:0; */}
`
const ButtonsWrapper = styled.View`
  flexDirection: column;
    alignItems: center;
    margin-top:50px;
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
`;

const ButtonIcon = styled.Image`
width: 50px;
height: 50px;
`;
const ButtonRightArrow = styled.Image`
width: 50px;
height: 50px;
`;

const Center = styled.View`
flex : 1;
flexDirection: column;
justifyContent : center;
alignItems: center;
`

const staticImage = require("../../public/img/coffee.png");
const rightArrow = require("../../public/img/rightArrow.png");

// https://6481de9629fa1c5c50323753.mockapi.io/api/dev/discounts

export const DiscountScreenMain = ( {navigation }) => {
    const [isLoading , setIsLoading] = React.useState(true);
    const [ items ,  setItems ] = React.useState([{id: '123'}]);
    const [ test ,  setTest ] = React.useState("123");
   
    const FetchPost = () => {
            setIsLoading(true);
            axios.get('https://6481de9629fa1c5c50323753.mockapi.io/api/dev/discounts')
            .then(({data}) => {
                setItems(data);
                console.log("responce: " + data);
            }).catch(err => {
                console.log(err)
                // alert('some errors api')r
                alert(err)
            })
            .finally( () =>{
                setIsLoading(false);
            })
        ;
    }
    const TestBackend = () => {
      setIsLoading(true);
      axios
      axios.get('http://192.168.0.105:8080/hello')
      .then(({data}) => {
          setTest(data);
          console.log("responce: " + data);
      }).catch(err => {
          console.log(err)
          alert(err)
      })
      .finally( () =>{
          setIsLoading(false);
      })
  ;
}


    // FetchPost();
    React.useEffect(() =>{
      FetchPost();
      // TestBackend();
    } ,[]);
    // setItems([1 , 3 ,4 ]);
   if (isLoading){
    return (
        <Center>
              <ActivityIndicator size={'small'} />
        </Center>
      )
   }

   
    // });
    return (
      <DiscountScreenWrapper>
              <NavBarCom />
      <Wrapper>
         <Text> Special offers</Text>
        <TopWidjet/>

      {/* // <ButtonsWrapper> */}
      <Text>
      Top Discounts
      </Text>
      <FlatList 
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={FetchPost} />}
        data={items}
        renderItem={ ({item}) => 
        <TouchableOpacity onPress ={ () => navigation.navigate('FullDiscount' , {id : item.id , name : item.name })}>
            <OneDisount name={item.name}/>
        </TouchableOpacity>
      } 

        // style={styles.StyleSheet}
      />
       {/* <Text> {test}</Text> */}

        {/* // </ButtonsWrapper> */}
        
        </Wrapper>
        </DiscountScreenWrapper>
    );
};