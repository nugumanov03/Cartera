import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import { SecondMenu } from "../components/SecondMenu";



import { NavigationContainer } from "@react-navigation/native";

import { NotificationScreen} from "../Notifications"
import { SettingsScreen} from "../Settings/Settings"

import {Main} from "./Main";

const Stack = createNativeStackNavigator();

export const MainScreen = () => {
    return (
    
    <NavigationContainer independent={true}>
        
        <Stack.Navigator>
            <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} /> 
            <Stack.Screen name="NotificationScreen" component={NotificationScreen} options={{title : "NotificationScreen"}} /> 
            <Stack.Screen name="SettingsScreen" component={SettingsScreen} options={{title : "Настройки"}} /> 
            {/* <Stack.Screen name="SecondMenu" component={SecondMenu} options={{title : "SecondMenu"}} />  */}
        </Stack.Navigator>


    </NavigationContainer>

    
    );
};