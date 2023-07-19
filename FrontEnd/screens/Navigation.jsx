import { createBottomTabNavigator} from "@react-navigation/bottom-tabs"

import Ionicons from 'react-native-vector-icons/Ionicons';



import { NavigationContainer } from "@react-navigation/native";

import { MainScreen }     from "./Main/MainScreen";
import { DiscountScreen } from "./Discount/DiscountScreen"
import { CameraScreen }   from "./Camera/CameraScreen";
import { MessageScreen}   from "./Message/MessageScreen";
import { AvatarScreen }   from "./Avatar/AvatarScreen";

const Tab  = createBottomTabNavigator()
var va = 5
export const Navigation = () => {
    return (
    <NavigationContainer>
        
    <Tab.Navigator
    initialRouteName="Main"
    screenOptions={({route}) => ({
        tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'MainScreen') {
              iconName = focused
                ? 'wallet'
                : 'wallet-outline';
            } else if (route.name === 'DiscountScreen') {
              iconName = focused ? 'heart' : 'heart-outline';
            }
            else if (route.name === 'CameraScreen') {
              iconName = focused ? 'scan' : 'scan-outline';
            }
            else if (route.name === 'MessageScreen') {
              iconName = focused ? 'mail' : 'mail-outline';
            }
            else if (route.name === 'AvatarScreen') {
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

    <Tab.Screen name="MainScreen" component={MainScreen}  options={{ title: "Main" }}/>
    <Tab.Screen name="DiscountScreen" component={DiscountScreen}  options={{  title: "Discount" }}/>
    <Tab.Screen name="MessageScreen" component={MessageScreen} options={{ tabBarBadge: 3 , title: "Message" }} />
    <Tab.Screen name="CameraScreen" component={CameraScreen}  options={{  title: "Camera" }}/>
    {/* <Tab.Screen name="AvatarScreen" component={AvatarScreen}  options={{  title: "Avatar" }}/> */}
      
    </Tab.Navigator>

        
    </NavigationContainer>

    
    );
};