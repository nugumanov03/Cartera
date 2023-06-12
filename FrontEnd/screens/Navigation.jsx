
import { FirstMenuScreen } from "../components/FirstMenu";
import { SecondMenu } from "../components/SecondMenu";
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs"

import Ionicons from 'react-native-vector-icons/Ionicons';


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
        tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Main') {
              iconName = focused
                ? 'wallet'
                : 'wallet-outline';
            } else if (route.name === 'DiscountScreen') {
              iconName = focused ? 'heart' : 'heart-outline';
            }
            else if (route.name === 'Camera') {
              iconName = focused ? 'scan' : 'scan-outline';
            }
            else if (route.name === 'Notifications') {
              iconName = focused ? 'mail' : 'mail-outline';
            }
            else if (route.name === 'Avatar') {
              iconName = focused ? 'options' : 'options-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false
    })}
    
    
    >

    <Tab.Screen name="Main" component={FirstMenuScreen}/>
    <Tab.Screen name="DiscountScreen" component={DiscountScreen}/>
    <Tab.Screen name="Camera" component={FirstMenuScreen}/>
    <Tab.Screen name="Notifications" component={FirstMenuScreen} options={{ tabBarBadge: 3 }} />
    <Tab.Screen name="Avatar" component={AvatarScreen}/>
      
    </Tab.Navigator>

        
    </NavigationContainer>

    
    );
};