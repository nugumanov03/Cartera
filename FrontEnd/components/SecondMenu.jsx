import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FirstMenuScreen } from "./FirstMenu";
// import { SecondMenu } from "../components/SecondMenu";
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {MainMenuScreen} from '../screens/MainMenu'

import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export const SecondMenu = () => {
    return (
    <NavigationContainer independent={true}>
        
        <Stack.Navigator>
            <Stack.Screen name="FirstMenuScreen" component={FirstMenuScreen} /> 
            <Stack.Screen name="MainMenuScreen" component={MainMenuScreen} options={{title : "Main"}} /> 
            {/* <Stack.Screen name="SecondMenu" component={SecondMenu} options={{title : "SecondMenu"}} />  */}
        </Stack.Navigator>


    </NavigationContainer>

    
    );
};