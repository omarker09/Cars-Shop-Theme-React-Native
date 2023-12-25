import { View, Text, SafeAreaView, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import IconAntDesign from 'react-native-vector-icons/dist/AntDesign';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const CarModal = ({ navigation, imgsrc, price, rating, title, setas, kmh, hp, description }) => {

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Product', {
      imgsrc: imgsrc,
      price: price,
      rating: rating,
      title: title,
      setas: setas,
      kmh: kmh,
      hp: hp,
      description: description
    })} activeOpacity={0.7} style={{ padding: 10, backgroundColor: "#F0F2F5", display: "flex", alignItems: "center", justifyContent: "center", height: 185, width: "45%", borderRadius: 20, position: "relative", overflow: "hidden" }}>
      <IconAntDesign style={{ position: "absolute", top: 15, left: 15, fontSize: 20 }} name="hearto" />
      <View >
        <Image style={{ height: 90, width: 180, marginLeft: 40, marginTop: 10 }} source={imgsrc} />
      </View>
      <View style={{ display: "flex", justifyContent: "flex-start", width: "100%", gap: 14, position: "relative" }}>
        <View style={{ display: "flex", flexDirection: "col", width: "100%", alignItems: "center", justifyContent: "flex-start" }}>
          <Text style={{ width: "100%", fontSize: 17, fontWeight: "bold", paddingTop: 10, paddingBottom: 7 }}>{title}</Text>
          <Text style={{ width: "100%", display: "flex", alignItems: "center", fontWeight: "bold" }}>${price}          <IconAntDesign style={{ color: "orange" }} name="star" /> {rating} </Text>
        </View>
      </View>
      <View className=" hidden ">
        <Text> {setas} </Text>
        <Text> {kmh} </Text>
        <Text> {hp} </Text>
        <Text> {description} </Text>
      </View>
    </TouchableOpacity>
  )
}


export default CarModal