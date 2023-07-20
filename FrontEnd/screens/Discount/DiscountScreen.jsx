import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import { SecondMenu } from "../components/SecondMenu";



import { NavigationContainer } from "@react-navigation/native";

import {DiscountScreenMain} from "./Discount";
import {FullDiscount} from "./FullDiscount";
import Scroll from "./Scroll";

const Stack = createNativeStackNavigator();

export const DiscountScreen = () => {
    return (
    <NavigationContainer independent={true}>
        
        <Stack.Navigator>
            <Stack.Screen name="Discount" component={DiscountScreenMain} options={{ headerShown: false }} /> 
            <Stack.Screen name="FullDiscount" component={Scroll} options={{title : "Main"}} /> 
            {/* <Stack.Screen name="SecondMenu" component={SecondMenu} options={{title : "SecondMenu"}} />  */}
        </Stack.Navigator>


    </NavigationContainer>

    
    );
};