import { Text, View } from 'react-native'
import React, { Component, useLayoutEffect, useState } from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';

import Main from './screens/main';
import Product from './screens/product';
import Favourite from './screens/Favourite';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const { colosr } = "#22262b"
  return (
    <Tab.Navigator initialRouteName="Main" screenOptions={{ headerShown: false, tabBarStyle: { backgroundColor: "#22262b", display: "flex", alignItems: "center", justifyContent: "space-evenly", height: 60, position: "absolute", bottom: 10, left: 10, right: 10, borderRadius: 30 } }} tabBarOptions={{
      showLabel: false,
      Style: { backgroundColor: '#FF5733' },
      headerShown: false 
    }} >

      <Tab.Screen
        name="Main"
        component={Main}
        options={{
          tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={Favourite}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }} initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name='TabNavigator' component={TabNavigator} />
        <Stack.Screen name="Product" component={Product} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
