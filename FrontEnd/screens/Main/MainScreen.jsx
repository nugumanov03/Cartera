import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import { SecondMenu } from "../components/SecondMenu";



import { NavigationContainer } from "@react-navigation/native";

import {Main} from "./Main";

const Stack = createNativeStackNavigator();

export const MainScreen = () => {
    return (
    
    <NavigationContainer independent={true}>
        
        <Stack.Navigator>
            <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} /> 
            {/* <Stack.Screen name="FullDiscount" component={FullDiscount} options={{title : "Main"}} />  */}
            {/* <Stack.Screen name="SecondMenu" component={SecondMenu} options={{title : "SecondMenu"}} />  */}
        </Stack.Navigator>


    </NavigationContainer>

    
    );
};