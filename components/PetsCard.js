import { View, Text, FlatList, ScrollView, Image } from "react-native";
import React from "react";
import { logo } from "../data";

export default function PetsCard() {
  return (
    <ScrollView horizontal className=" flex-1 p-2">
      <View className=" bg-blue-300   rounded-2xl  w-[130px] h-[150px] mr-2">
        <View className=" bg-blue-600 items-center rounded-2xl  justify-center w-full h-[120px] mr-2">
          <Image source={logo} className="h-[100px] w-[100px]" />
        </View>
        <View className="  m-2  items-center   justify-center ">
          <Text className="text-center font-medium justify-center ">Text</Text>
        </View>
      </View>
      <View className=" bg-blue-300   rounded-2xl  w-[130px] h-[150px] mr-2">
        <View className=" bg-blue-600 items-center rounded-2xl  justify-center w-full h-[120px] mr-2">
          <Image source={logo} className="h-[100px] w-[100px]" />
        </View>
        <View className="  m-2  items-center   justify-center ">
          <Text className="text-center font-medium justify-center ">Text</Text>
        </View>
      </View>
      <View className=" bg-blue-300   rounded-2xl  w-[130px] h-[150px] mr-2">
        <View className=" bg-blue-600 items-center rounded-2xl  justify-center w-full h-[120px] mr-2">
          <Image source={logo} className="h-[100px] w-[100px]" />
        </View>
        <View className="  m-2  items-center   justify-center ">
          <Text className="text-center font-medium justify-center ">Text</Text>
        </View>
      </View>
      <View className=" bg-blue-300   rounded-2xl  w-[130px] h-[150px] mr-2">
        <View className=" bg-blue-600 items-center rounded-2xl  justify-center w-full h-[120px] mr-2">
          <Image source={logo} className="h-[100px] w-[100px]" />
        </View>
        <View className="  m-2  items-center   justify-center ">
          <Text className="text-center font-medium justify-center ">Text</Text>
        </View>
      </View>
    </ScrollView>
  );
}
