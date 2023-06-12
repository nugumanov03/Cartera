import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import { SecondMenu } from "../components/SecondMenu";



import { NavigationContainer } from "@react-navigation/native";

import {DiscountScreenMain} from "./Discount";
import {FullDiscount} from "./FullDiscount";

const Stack = createNativeStackNavigator();

export const DiscountScreen = () => {
    return (
    <NavigationContainer independent={true}>
        
        <Stack.Navigator>
            <Stack.Screen name="Discount" component={DiscountScreenMain} /> 
            <Stack.Screen name="FullDiscount" component={FullDiscount} options={{title : "Main"}} /> 
            {/* <Stack.Screen name="SecondMenu" component={SecondMenu} options={{title : "SecondMenu"}} />  */}
        </Stack.Navigator>


    </NavigationContainer>

    
    );
};