import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { logo } from '../data'

export default function NearbyCard() {
  return (
    <ScrollView horizontal className=" flex-1 p-2">
      <View className=" bg-black items-center border-4 border-green-700  rounded-2xl justify-center w-[150px] h-[70px] mr-2">
        <Image source={logo} className="h-12 w-12" />
      </View>
      <View className=" bg-black items-center border-4 border-green-700  rounded-2xl justify-center w-[150px] h-[70px] mr-2">
        <Image source={logo} className="h-12 w-12" />
      </View>
      <View className=" bg-black items-center border-4 border-green-700  rounded-2xl justify-center w-[150px] h-[70px] mr-2">
        <Image source={logo} className="h-12 w-12" />
      </View>
      <View className=" bg-black items-center border-4 border-green-700  rounded-2xl justify-center w-[150px] h-[70px] mr-2">
        <Image source={logo} className="h-12 w-12" />
      </View>
      <View className=" bg-black items-center border-4 border-green-700  rounded-2xl justify-center w-[150px] h-[70px] mr-2">
        <Image source={logo} className="h-12 w-12" />
      </View>
      
     
    </ScrollView>
  )
}