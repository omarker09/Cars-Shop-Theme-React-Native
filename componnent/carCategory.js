import { View, Text, Image } from 'react-native'
import React from 'react'

export default function CarCategory(props) {
    return (
        <View style={{display: "flex" , alignItems: "center" , gap: 10}}>
            <View style={{ backgroundColor: "#22262b", height: 75, width: 75, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 1000 }}>
                <Image style={{ height: 50, width: 50 }} source={props.imgsrc} />
            </View>
            <View>
                <Text>{props.title}</Text>
            </View>
        </View>
    )
}