import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {Avatar} from './Avatar'

import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export const AvatarScreen = () => {
    return (
    <NavigationContainer independent={true}>
        
        <Stack.Navigator>
            <Stack.Screen name="Avatar" component={Avatar} /> 
            {/* <Stack.Screen name="MainMenuScreen" component={MainMenuScreen} options={{title : "Main"}} />  */}
            {/* <Stack.Screen name="SecondMenu" component={SecondMenu} options={{title : "SecondMenu"}} />  */}
        </Stack.Navigator>


    </NavigationContainer>

    
    );
};