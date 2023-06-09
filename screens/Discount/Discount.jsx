import { StyleSheet, Text, View , TouchableOpacity , FlatList , ActivityIndicator , RefreshControl} from 'react-native';

import axios from 'axios';
import styled from 'styled-components/native'

import { OneDisount } from './OneDiscount';


import React  from 'react';
import { NavBarCom } from '../../components/Navbar';


const Wrapper = styled.View`
    backgroundColor: #fff;
    flex : 1;
    
    flexDirection: column;
    alignItems: center;
    ${'' /* justifyContent: center; */}
    gap: 40px;
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
   
    const FetchPost = () => {
            setIsLoading(true);
            axios.get('https://6481de9629fa1c5c50323753.mockapi.io/api/dev/discounts')
            .then(({data}) => {
                setItems(data);
                console.log("responce: " + data);
            }).catch(err => {
                console.log(err)
                alert('some errors api')
            })
            .finally( () =>{
                setIsLoading(false);
            })
        ;
    }

    // FetchPost();
    React.useEffect(FetchPost ,[]);
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
       
      <Wrapper>
      
      <ButtonsWrapper>
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

        </ButtonsWrapper>
        
        </Wrapper>
    );
};