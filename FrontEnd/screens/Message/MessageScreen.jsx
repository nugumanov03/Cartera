import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import { SecondMenu } from "../components/SecondMenu";



import { NavigationContainer } from "@react-navigation/native";

import {Message} from "./Message";
import {FullMessage} from "./FullMessage";
import { SettingsScreen} from "../Settings/Settings"

const Stack = createNativeStackNavigator();

export const MessageScreen = () => {
    return (
    
    <NavigationContainer independent={true}>
        
        <Stack.Navigator>
            <Stack.Screen name="Message" component={Message} options={{ headerShown: false }} /> 
            <Stack.Screen name="FullMessage" component={FullMessage} options={{ headerShown: false}} /> 
            <Stack.Screen name="SettingsScreen" component={SettingsScreen} options={{title : "Настройки"}} /> 
        </Stack.Navigator>


    </NavigationContainer>

    
    );
};