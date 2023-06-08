
import { FirstMenuScreen } from "../components/FirstMenu";
import { SecondMenu } from "../components/SecondMenu";
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs"


import {DiscountScreen} from "./Discount/DiscountScreen"

import { NavigationContainer } from "@react-navigation/native";
import { AvatarScreen } from "./Avatar/AvatarScreen";


const Tab  = createBottomTabNavigator()

export const Navigation = () => {
    return (
    <NavigationContainer>
        
    <Tab.Navigator
    initialRouteName="Main"
    screenOptions={({route}) => ({
        tabBarIcon : ({focused , color , size}) => {
        
        },
        headerShown: false
    })}
    
    
    >

    <Tab.Screen name="Main" component={FirstMenuScreen}/>
    <Tab.Screen name="DiscountScreen" component={DiscountScreen}/>
    <Tab.Screen name="Camera" component={FirstMenuScreen}/>
    <Tab.Screen name="Notifications" component={FirstMenuScreen}/>
    <Tab.Screen name="Avatar" component={AvatarScreen}/>
      
    </Tab.Navigator>

        
    </NavigationContainer>

    
    );
};