import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons';

import { HomeScreen } from '../screens/HomeScreen';
import { SplashScreen } from '../screens/SplashScreen';
import UserScreen from '../screens/UserScreen';
import { TopStore } from '../screens/TopStore';
import { TopProducts } from '../screens/TopProducts';
import { Storage } from '../screens/Storage';
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import EditProfile from '../components/EditProfile';
import About from '../components/About';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName='Home' screenOptions={({ route }) => ({ tabBarIcon: ({color, size}) => {
      let iconName
      if (route.name === "Home") {
        iconName = "home"
      }else if (route.name === "User") {
        iconName = "person"
      }else if (route.name === "TopStore") {
        iconName = "storefront"
      }else if (route.name === "TopProducts") {
        iconName = "bag-handle"
      }else if (route.name === "Storage") {
        iconName = "cube"
      }
      return <Ionicons name={iconName} size={size} color={color} />
    }})}>
      <Tab.Screen name="Home" component={HomeScreen} options={{}} />
      <Tab.Screen name="TopStore" component={TopStore} options={{}} />
      <Tab.Screen name="TopProducts" component={TopProducts} options={{}} />
      <Tab.Screen name="Storage" component={Storage} options={{}} />
      <Tab.Screen name="User" component={UserScreen} options={{}} />
    </Tab.Navigator>
  )
}

export const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Splash'>
      <Stack.Screen name='Splash' component={SplashScreen} options={{ headerShown: false }} />
      <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name='EditProfile' component={EditProfile} options={{ headerShown: false }} />
      <Stack.Screen name='About' component={About} options={{headerShown: false}} />
      <Stack.Screen name='Register' component={RegisterScreen} options={{ headerShown: false }} />
      <Stack.Screen name='MainTabs' component={TabNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>

  )
}