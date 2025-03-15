import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen } from '../screens/HomeScreen';
import { SplashScreen } from '../screens/SplashScreen';
import { UserScreen } from '../screens/UserScreen';
import { TopStore } from '../screens/TopStore';
import { TopProducts } from '../screens/TopProducts';
import { Storage } from '../screens/Storage';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName='Home'>
      <Tab.Screen name="Home" component={HomeScreen} options={{}} />
      <Tab.Screen name="TopStore" component={TopStore} options={{}} />
      <Tab.Screen name="TopProduucts" component={TopProducts} options={{}} />
      <Tab.Screen name="Storage" component={Storage} options={{}} />
      <Tab.Screen name="User" component={UserScreen} options={{}} />
    </Tab.Navigator>
  )
}

export const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Splash'>
      <Stack.Screen name='Splash' component={SplashScreen} options={{ headerShown: false }} />
      <Stack.Screen name='MainTabs' component={TabNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>

  )
}