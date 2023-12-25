import { View, Text, Button, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Maincar from "../assets/cars/main.png"

import React, { useState } from 'react'

const HomeScreen = ({ navigation }) => {
  const [isVisited, setIsVisited] = useState(false)
  return (
    <SafeAreaView style={{ backgroundColor: "#22262b", height: "100%" }}>
      <View style={{ padding: 15, marginTop: 30 }}>
        <Text style={{ fontSize: 40, color: "white", fontFamily: "Sans-serif" }} >Easy way to buy</Text>
        <Text style={{ fontSize: 40, color: "white" }} >your dream Car</Text>
        <View style={{ marginTop: 20, paddingRight: 0, display: "flex", gap: 4 }}>
          <Text style={{ fontSize: 15, color: "#dddd" }} >By Using the car, you can move qickly</Text>
          <Text style={{ fontSize: 15, color: "#dddd" }} >from one place to another</Text>
          <Text style={{ fontSize: 15, color: "#dddd" }} >in your day life.</Text>
        </View>
        <View style={{ width: "100%", display: "flex", marginTop: 60 }}>
          <Image style={{ height: 295, width: 475 }} source={require('../assets/cars/main.png')} />
        </View>
        <View style={{ padding: 15, marginTop: 20 , height: "100%", width: "100%", backgroundColor: "#22262b", display: "flex", alignItems: "center" }}>
          <TouchableOpacity  activeOpacity={0.7} onPress={() => navigation.navigate('TabNavigator')} style={{ backgroundColor: "white", padding: 15, borderRadius: 50, width: "100%", flexDirection: "row", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Text style={{ color: "#22262b", fontSize: 22 , fontWeight: "700", fontFamily: "Arial Black"}}>Get started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen