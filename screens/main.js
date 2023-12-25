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


const Main = ({ navigation }) => {
    const [isHome , setIshome] = useState(true)
    const [isHeart, setIsheart] =useState(null)
    const [isSetting, setSetting] = useState(null)

    const HandleNavigation = () => {
        setIshome(true)
        navigation.navigate('Favourite');
    }
    const [title2 , setTitle2] = useState("audi Cadle 5")
    const [description , SetDescription] = useState("The Tesla Model car represents a groundbreaking fusion of cutting-edge technology and sustainable transportation. With its sleek design and electric powertrain, the Model series has revolutionized the automotive industry. Whether it's the Model S, Model 3, Model X, or Model Y, each vehicle offers impressive acceleration, long-range electric capabilities, and a commitment to reducing our carbon footprint.")
    return (
        <SafeAreaView >
            <ScrollView style={{backgroundColor: "white" , height: "100%"}}>
                <View >
                    <View style={{ padding: 10 , backgroundColor: "#F0F2F5" }} >
                        <View style={{ padding: 20, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 15 }}>
                                <View>
                                    <Image style={{ height: 50, width: 50, borderRadius: 1000, }} source={require('../assets/avatar.png')} />
                                </View>
                                <View>
                                    <Text style={{}} >Welcome To ShopBland</Text>
                                    <Text style={{ fontSize: 20, color: "#22262b" }}>YorName</Text>
                                </View>
                            </View>
                            <View style={{ backgroundColor: 'white', padding: 10, borderRadius: 1000 }}>
                                <Icon style={{ fontSize: 25 }} name='notifications-outline' />
                            </View>
                        </View>
                        <View style={{ padding: 10 }}>
                            <View style={{ backgroundColor: 'white', display: "flex", position: "relative", flexDirection: "row", alignItems: "center", borderRadius: 999, paddingLeft: 10, paddingRight: 30 }}>
                                <IconFeather style={{ fontSize: 20 }} name="search" />
                                <TextInput placeholder='Search your car' style={{ padding: 15, paddingRight: 10, fontSize: 17 , width: "87%" }}></TextInput>
                                <IconMaterialIcons style={{ position: "absolute", right: 0, padding: 15, backgroundColor: '#22262b', borderRadius: 1000, color: "white", fontSize: 25 }} name='manage-search' />
                            </View>
                        </View>
                        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{ padding: 10, paddingTop: 30, paddingBottom: 30, display: "flex", flexDirection: "row", gap: 15 }}>

                            <View style={{ display: 'flex', flex: 1, paddingRight: 17 }}>
                                <TouchableOpacity activeOpacity={0.7}>
                                    <CarCategory title="Audi" imgsrc={require('../assets/cars/audi/audi-logo-removebg-preview.png')} />
                                </TouchableOpacity>
                            </View>

                            <View style={{ display: 'flex', flex: 1, paddingRight: 17 }}>
                                <TouchableOpacity activeOpacity={0.7}>
                                    <CarCategory title="hynudai" imgsrc={require('../assets/cars/hynudai/hynudai-logo-removebg-preview.png')} />
                                </TouchableOpacity>
                            </View>

                            <View style={{ display: 'flex', flex: 1, paddingRight: 17 }}>
                                <TouchableOpacity activeOpacity={0.7}>
                                    <CarCategory title="Audi" imgsrc={require('../assets/cars/audi/audi-logo-removebg-preview.png')} />
                                </TouchableOpacity>
                            </View>

                            <View style={{ display: 'flex', flex: 1, paddingRight: 17 }}>
                                <TouchableOpacity activeOpacity={0.7}>
                                    <CarCategory title="Audi" imgsrc={require('../assets/cars/audi/audi-logo-removebg-preview.png')} />
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>

                    <View style={{ height: "100%", width: "100%", backgroundColor: "#F0F2F5",  display: "flex", flexDirection: "row", flexWrap: "wrap", gap: 20, justifyContent: "center" }} >
                        <View style={{ height: "auto", width: "100%", backgroundColor: "white",paddingBottom:86, display: "flex", flexDirection: "row", flexWrap: "wrap", gap: 15, justifyContent: "center", borderRadius: 40 }}>
                            <View style={{ display: "flex", flexDirection: "row", width: "100%", justifyContent: "space-between", alignItems: "center", padding: 20  }}>
                                <Text style={{ fontSize: 19, fontWeight: "800" }}>Popular Car</Text>
                                <TouchableOpacity activeOpacity={0.5}>
                                    <Text>View All</Text>
                                </TouchableOpacity>
                            </View>
            {/* Here You Can add your own Car By change this proops for image change the path of imgsrc proops */}
                            <CarModal navigation={navigation} description={description} setas="5" kmh="200" hp="200" rating="4.5" price='40.500' title={title2.length >= 15 ? title2.slice(0, 15)+ ".." : title2} imgsrc={require('../assets/cars/audi/audi-png-45299.png')} />
                            <CarModal navigation={navigation} description={description} setas="4" kmh="250" hp="190"  rating="5.0" price="55.000" title="Tesla BrandZ" imgsrc={require("../assets/cars/tesla/29454-3-tesla-transparent-picture.png")} />
                            <CarModal navigation={navigation} description={description} setas="5" kmh="210" hp="215"  rating="4.2" price="56.320" title="Mercedes clasic" imgsrc={require("../assets/cars/mercedas/pngwing66.png")} />
                            <CarModal navigation={navigation} description={description} setas="6" kmh="170" hp="300"  rating="4.0" price="39.456" title="Hilux 2019" imgsrc={require('../assets/cars/hynudai/bloar.png')} />

                            <CarModal navigation={navigation} description={description} setas="5" kmh="200" hp="200" rating="4.5" price='40.500' title={title2.length >= 15 ? title2.slice(0, 15)+ ".." : title2} imgsrc={require('../assets/cars/audi/audi-png-45299.png')} />
                            <CarModal navigation={navigation} description={description} setas="4" kmh="250" hp="190"  rating="5.0" price="55.000" title="Tesla BrandZ" imgsrc={require("../assets/cars/tesla/29454-3-tesla-transparent-picture.png")} />
                            <CarModal navigation={navigation} description={description} setas="5" kmh="210" hp="215"  rating="4.2" price="56.320" title="Mercedes clasic" imgsrc={require("../assets/cars/mercedas/pngwing5.png")} />
                            <CarModal navigation={navigation} description={description} setas="6" kmh="170" hp="300"  rating="4.0" price="39.456" title="Hilux 2019" imgsrc={require('../assets/cars/hynudai/bloar.png')} />

                            <CarModal navigation={navigation} description={description} setas="5" kmh="200" hp="200" rating="4.5" price='40.500' title={title2.length >= 15 ? title2.slice(0, 15)+ ".." : title2} imgsrc={require('../assets/cars/audi/audi-png-45299.png')} />
                            <CarModal navigation={navigation} description={description} setas="4" kmh="250" hp="190"  rating="5.0" price="55.000" title="Tesla BrandZ" imgsrc={require("../assets/cars/tesla/29454-3-tesla-transparent-picture.png")} />
                            <CarModal navigation={navigation} description={description} setas="5" kmh="210" hp="215"  rating="4.2" price="56.320" title="Mercedes clasic" imgsrc={require("../assets/cars/mercedas/pngwing5.png")} />
                            <CarModal navigation={navigation} description={description} setas="6" kmh="170" hp="300"  rating="4.0" price="39.456" title="Hilux 2019" imgsrc={require('../assets/cars/hynudai/bloar.png')} />

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


// Ionicons home  : home home-outline -  settings-outline settings 
// hearto - heart 
export default Main