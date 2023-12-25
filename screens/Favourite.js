import { View, Text, SafeAreaView, Image, TextInput, TouchableOpacity, ScrollView, Button } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/dist/Ionicons';
import IconFeather from 'react-native-vector-icons/dist/Feather';
import IconMaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import CarCategory from '../componnent/carCategory';
import CarModal from '../componnent/CarModal';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IconAntDesign from 'react-native-vector-icons/dist/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Favourite = ({ navigation }) => {
    const [isHome, setIshome] = useState(null)
    const [isHeart, setIsheart] = useState(true)
    const [isSetting, setSetting] = useState(null)
    const [data, setData] = useState([]);
    const HandleNavigation = () => {
        setIshome(false)
        navigation.navigate('Favourite');
    }
    const [title2, setTitle2] = useState("audi Cadle 5")
    const [description, SetDescription] = useState("The Tesla Model car represents a groundbreaking fusion of cutting-edge technology and sustainable transportation. With its sleek design and electric powertrain, the Model series has revolutionized the automotive industry. Whether it's the Model S, Model 3, Model X, or Model Y, each vehicle offers impressive acceleration, long-range electric capabilities, and a commitment to reducing our carbon footprint.")

    return (
        <SafeAreaView style={{ backgroundColor: "#F0F2F5" }}>
            <ScrollView style={{ backgroundColor: "white", height: "100%" }}>
                <View >
                    <View style={{ padding: 10, backgroundColor: "#F0F2F5" }} >
                        <View style={{ padding: 20, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 15 }}>
                                <View>
                                    <Image style={{ height: 50, width: 50, borderRadius: 1000, }} source={require('../assets/avatar.png')} />
                                </View>
                                <View>
                                    <Text style={{}} >Welcome</Text>
                                    <Text style={{ fontSize: 20, color: "#22262b" }}>YourName</Text>
                                </View>
                            </View>
                            <View style={{ backgroundColor: 'white', padding: 10, borderRadius: 1000 }}>
                                <Icon style={{ fontSize: 25 }} name='notifications-outline' />
                            </View>
                        </View>
                        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{ padding: 10, paddingTop: 30, paddingBottom: 30, display: "flex", flexDirection: "row", gap: 15 }}>
                            <Text style={{ padding: 15, borderRadius: 20, backgroundColor: "#22262b", color: "white", fontSize: 18 }}>Your Favourite Cars</Text>
                        </ScrollView>
                    </View>
                    <View style={{ height: "100%", width: "100%", backgroundColor: "#F0F2F5", padding: 0, display: "flex", flexDirection: "row", flexWrap: "wrap", gap: 20, justifyContent: "center" }} >
                        <View style={{ height: "auto", width: "100%", backgroundColor: "white", paddingBottom: 86, display: "flex", flexDirection: "row", flexWrap: "wrap", gap: 15, justifyContent: "center", borderRadius: 40 }}>
                            <View style={{ display: "flex", flexDirection: "row", width: "100%", justifyContent: "space-between", alignItems: "center", padding: 20 }}>
                                <Text style={{ fontSize: 25, fontWeight: "800" }}>Favourite</Text>
                                <TouchableOpacity activeOpacity={0.5}>
                                    <Text></Text>
                                </TouchableOpacity>
                            </View>
                            {/* For Favourite Screen it dosent work actualy because we need real data from API,  you can just get data from an api and map it all here  */}
                            <CarModal navigation={navigation} description={description} setas="5" kmh="200" hp="200" rating="4.5" price='40.500' title={title2.length >= 15 ? title2.slice(0, 15)+ ".." : title2} imgsrc={require('../assets/cars/audi/audi-png-45299.png')} />
                            <CarModal navigation={navigation} description={description} setas="4" kmh="250" hp="190"  rating="5.0" price="55.000" title="Tesla BrandZ" imgsrc={require("../assets/cars/tesla/29454-3-tesla-transparent-picture.png")} />
                            <CarModal navigation={navigation} description={description} setas="5" kmh="210" hp="215"  rating="4.2" price="56.320" title="Mercedes clasic" imgsrc={require("../assets/cars/mercedas/pngwing5.png")} />
                            <CarModal navigation={navigation} description={description} setas="6" kmh="170" hp="300"  rating="4.0" price="39.456" title="Hilux 2019" imgsrc={require('../assets/cars/hynudai/bloar.png')} />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}


export default Favourite

