import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import { SecondMenu } from "../components/SecondMenu";

import styled from "styled-components"

import { NavigationContainer } from "@react-navigation/native";

import {DiscountScreenMain} from "./Discount";
import {FullDiscount} from "./FullDiscount";
import Scroll from "./Scroll";
import { SettingsScreen} from "../Settings/Settings"
const Stack = createNativeStackNavigator();

const ButtonBack = styled.Image`
width: 25px;
height: 25px;
${'' /* background-color: #000; */}
opacity: 1;
`

const imgBack = require("../../assets/imgBack.png")

export const DiscountScreen = () => {
    return (
    <NavigationContainer independent={true}>
        
        <Stack.Navigator>
            <Stack.Screen name="Discount" component={DiscountScreenMain} options={{ headerShown: false }} /> 
            <Stack.Screen name="FullDiscount" component={Scroll} options={{title : "Main" , headerShown: false , 
        //     headerLeft: () => (
        //     <ButtonBack 
        //     source = { imgBack}
        //       onPress={() => navigation.goBack()}
        //       title="Info"
        //       color="#fff"
        //     />
        //   ),
        //   headerBackImageSource: imgBack,
          headerTransparent:true,
        //   headerBackVisible: false,
        
        
        }} /> 
             <Stack.Screen name="SettingsScreen" component={SettingsScreen} options={{title : "Настройки"}} /> 
            {/* <Stack.Screen name="SecondMenu" component={SecondMenu} options={{title : "SecondMenu"}} />  */}
        </Stack.Navigator>


    </NavigationContainer>

    
    );
};