
import { StyleSheet, Text, View , TouchableOpacity } from 'react-native';
import styled from 'styled-components/native'
import { useFonts } from 'expo-font';
import * as Font from 'expo-font';



import { NavBarCom } from '../..//components/Navbar'

const MainMenuWrapper = styled.View`
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

const Button = styled.View`
padding-top: 15px;
background-color: #363853;
height: 65px;
width : 240px;
border-radius: 15px;

alignItems : center;
justifyContent : 'center';
`;


const ButtonText = styled.Text`
color : #FFFFFF;
font-size : 20px;
font-weight : bold;
`;

const StudentCardIMG = styled.Image`
    width : 90%;
    height : 210px;
`
// Discount Widget


const WrapperDiscount = styled.View`
    ${'' /* flex: 1; */}
    flexDirection: row;
    justifyContent: space-evenly;

`
const Wrapper = styled.View`
    gap: 20px;
    ${'' /* alignItems: center; */}
`
const Dicount = styled.View`
${'' /* padding: 10px; */}
    ${'' /* background: red; */}
`

const DisImage = styled.Image`
    width: 110px;
    height:100px;
    borderRadius: 15px;
`

const Center = styled.View`
    alignItems: center;
    justifyContent: center;
`



const TitleText = styled.Text`
    font-size:25px;
    font-weight: bold;
    font-family: 'Quicksand';
`

const studentCard = require('../..//public/img/StudentCardMain.jpeg');
const Dis1 = require('../..//public/img/Dis1.png');
const Dis2 = require('../..//public/img/Dis2.png');
const Dis3 = require('../..//public/img/Dis3.png');

export const   DiscountWidjet = ( {navigation }) => {
    // const [fontsLoaded] = useFonts({
    //     'Quicksand': require('../../assets/fonts/Quicksand.ttf'),
    //   });
    
    return (
        <Wrapper>

          
<Center>
                <TitleText>
                Top Discount 
                </TitleText>
            </Center>
               
       
        <WrapperDiscount>
        
        <Dicount>
            <TouchableOpacity  onPress ={ () => navigation.navigate('NotificationScreen')}>
                <DisImage source={Dis1}/>
            </TouchableOpacity>
        </Dicount>
        <Dicount>
            <TouchableOpacity>
                <DisImage source={Dis2}/>
            </TouchableOpacity>
        </Dicount>
        <Dicount>
        <TouchableOpacity>
                <DisImage source={Dis3}/>
            </TouchableOpacity>
        </Dicount>
       </WrapperDiscount>
</Wrapper>
    );
    
};