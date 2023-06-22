import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import { SecondMenu } from "../components/SecondMenu";



import { NavigationContainer } from "@react-navigation/native";

import {Message} from "./Message";

const Stack = createNativeStackNavigator();

export const MessageScreen = () => {
    return (
    
    <NavigationContainer independent={true}>
        
        <Stack.Navigator>
            <Stack.Screen name="Message" component={Message} options={{ headerShown: false }} /> 
            {/* <Stack.Screen name="FullDiscount" component={FullDiscount} options={{title : "Main"}} />  */}
            {/* <Stack.Screen name="SecondMenu" component={SecondMenu} options={{title : "SecondMenu"}} />  */}
        </Stack.Navigator>


    </NavigationContainer>

    
    );
};