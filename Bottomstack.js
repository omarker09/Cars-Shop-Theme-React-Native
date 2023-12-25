import { Text, View } from 'react-native'
import React, { Component, useLayoutEffect } from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Favourite from './screens/Favourite';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


// This TabScreen Was only for test if you Can use it to split your tabs 

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Favourite" component={Favourite} />
    </Tab.Navigator>
  );
};
export default TabNavigator