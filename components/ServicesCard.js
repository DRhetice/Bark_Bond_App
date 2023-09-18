import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { Image } from "react-native";
import { logo } from "../data";

export default function ServicesCard() {
  return (
    <ScrollView horizontal className=" flex-1 p-2">
      <View className="  items-center border-4 border-green-700  rounded-2xl justify-center w-[130px] h-[130px] mr-2">
        <Image source={logo} className="h-12 w-12" />
      </View>
      <View className="  items-center border-4 border-green-700  rounded-2xl justify-center w-[130px] h-[130px] mr-2">
        <Image source={logo} className="h-12 w-12" />
      </View>
      <View className=" items-center border-4 border-green-700  rounded-2xl justify-center w-[130px] h-[130px] mr-2">
        <Image source={logo} className="h-12 w-12" />
      </View>
      <View className="  items-center border-4 border-green-700  rounded-2xl justify-center w-[130px] h-[130px] mr-2">
        <Image source={logo} className="h-12 w-12" />
      </View>
      <View className=" items-center border-4 border-green-700  rounded-2xl justify-center w-[130px] h-[130px] mr-2">
        <Image source={logo} className="h-12 w-12" />
      </View>
     
    </ScrollView>
  );
}
