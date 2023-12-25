import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import IconAntDesign from 'react-native-vector-icons/dist/AntDesign';
import Entypo from 'react-native-vector-icons/dist/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/dist/Ionicons'
import AsyncStorage from '@react-native-async-storage/async-storage';


const Product = ({ route, navigation }) => {

  const [hearted, setIsHearted] = useState(false)
  const { imgsrc, price, rating, title, setas, kmh, hp, description } = route.params;

  const handleHeart = () => {
    if (hearted === false) {
      setIsHearted(true)
    } else {
      setIsHearted(false)
    }
  }
  return (
    <SafeAreaView style={{ backgroundColor: "#22262b" }} className=' h-full '>
    <ScrollView>
    <View className="p-7">
        <View style={{ paddingBottom: 45 }} className="flex items-center justify-between flex-row">
          <TouchableOpacity activeOpacity={0.7} onPress={() => { navigation.goBack() }} className=" p-5 rounded-full  flex items-center justify-center" style={{ backgroundColor: "#383c40" }}>
            <IconAntDesign style={{ color: "white", fontSize: 20 }} name="arrowleft" />
          </TouchableOpacity>
          <Text className="text-white text-xl	">Car Details</Text>
          <TouchableOpacity onPress={() => handleHeart()} activeOpacity={0.7} className="p-5 rounded-full" style={{ backgroundColor: "#383c40" }}>
            {hearted ? <IconAntDesign style={{ color: "white", fontSize: 20 }} name="heart" /> : <IconAntDesign style={{ color: "white", fontSize: 20 }} name="hearto" /> }
          </TouchableOpacity>
        </View>
        <View>
          <Image style={{ height: 225, width: 445 }} source={imgsrc} />
        </View>
      </View>
      <View style={{ borderRadius: 30 }} className="bg-white h-full p-6 ">
        <View className="flex items-center flex-row justify-between">
          <Text className="text-xl text-black font-bold	"> {title} </Text>
          <View className="flex items-center flex-row gap-1">
            <Text><IconAntDesign style={{ color: "orange", fontSize: 20 }} name="star" /></Text>
            <Text className="text-black text-base">({rating})</Text>
          </View>
        </View>
        <View className="pt-3">
          <Text className=" text-gray-700 ">
            {description.length >= 90 ? description.slice(0, 90) + "..." : description}
            <Text className="text-black text-base font-bold	">More</Text>
          </Text>
        </View>
        <View className="pt-3">
          <View className="w-full">
            <Text className="text-lg text-black font-bold">Features</Text>
          </View>
          <View className="pt-2 flex gap-3 flex-row justify-between pb-3">
            <View style={{ backgroundColor: "#F0F2F5", height: 150, width: 100, borderRadius: 20, padding: 13 }}>
              <View className="bg-white flex items-center w-10 rounded-full">
                <Entypo style={{ padding: 7, fontSize: 20, color: "black" }} name="man" />
              </View>
              <View className="pt-2">
                <Text >Total</Text>
                <Text >Capacity</Text>
              </View>
              <View className="pt-3">
                <Text className="text-black font-bold" >Seats {setas} </Text>
              </View>
            </View>
            <View style={{ backgroundColor: "#F0F2F5", height: 150, width: 100, borderRadius: 20, padding: 13 }}>
              <View className="bg-white flex items-center w-10 rounded-full">
                <Ionicons style={{ padding: 7, fontSize: 20, color: "black" }} name="speedometer" />
              </View>
              <View className="pt-2">
                <Text >Highest</Text>
                <Text >Speed</Text>
              </View>
              <View className="pt-3">
                <Text className="text-black font-bold" >{kmh} km/h </Text>
              </View>
            </View>
            <View style={{ backgroundColor: "#F0F2F5", height: 150, width: 100, borderRadius: 20, padding: 13 }}>
              <View className="bg-white flex items-center w-10 rounded-full">
                <MaterialCommunityIcons style={{ padding: 7, fontSize: 20, color: "black" }} name="engine" />
              </View>
              <View className="pt-2">
                <Text >Engine</Text>
                <Text >Output</Text>
              </View>
              <View className="pt-3">
                <Text className="text-black font-bold" >{hp} HP</Text>
              </View>
            </View>
          </View>
          <View className="w-full h-auto flex flex-row justify-between items-center ">
            <View >
              <Text style={{ fontSize: 20, color: "black", fontWeight: "bold" }}>Price</Text>
              <Text style={{ fontSize: 16, color: "black" }}> ${price} </Text>
            </View>
            <TouchableOpacity activeOpacity={0.7} style={{ width: "60%", backgroundColor: "#22262b", display: "flex", alignItems: "center", padding: 15, borderRadius: 25 }}>
              <Text className="text-white" style={{ fontSize: 17 }}>Buy now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
    </SafeAreaView>
  )
}


export default Product