import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { Camera } from "./Camera"

const Stack = createNativeStackNavigator();

export const CameraScreen = () => {
    return (
    
    <NavigationContainer independent={true}>
        
        <Stack.Navigator>
            <Stack.Screen name="Camera" component={Camera} options={{ headerShown: false }} /> 
            {/* <Stack.Screen name="FullDiscount" component={FullDiscount} options={{title : "Main"}} />  */}
            {/* <Stack.Screen name="SecondMenu" component={SecondMenu} options={{title : "SecondMenu"}} />  */}
        </Stack.Navigator>


    </NavigationContainer>
    );
};