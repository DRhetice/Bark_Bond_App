import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Filtre from "../components/Filtre";
import Menus from "../components/Menus";

const logo = require("../assets/logo.png");

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 p-2 pl-5 bg-[#fffcf0] ">
      {/* haut */}
      <View className=" flex-row justify-between items-center">
        <View className="flex-row items-center justify-center space-x-2">
          <Image source={logo} className="w-10 h-10" />
          <Text className="text-black font-medium text-2xl">Bark & Bond</Text>
        </View>
        <View className="flex-row items-center justify-center space-x-3">
          <TouchableOpacity className="">
            <View className="bg-black rounded-full p-1 absolute right-1.5 top-0.5"></View>
            <Ionicons name="notifications-outline" size={30} color="black" />
          </TouchableOpacity>
          <MaterialCommunityIcons
            name="notification-clear-all"
            size={30}
            color="black"
          />
        </View>
      </View>
      {/* Salutation vue et photo de profil  */}
      <View className="flex-row justify-between items-center mt-6 ">
        <View className="">
          <Text className="text-3xl">
            Hello, <Text className="text-black font-bold"> Rhétice !</Text>
          </Text>
          <Text className="text-gray-500 text-xl">Welcome Back</Text>
        </View>
        <View className=" bg-[#ffdaa7] rounded-full w-[75px] h-[75px] p-1">
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
            }}
            className="w-full h-full rounded-full"
          />
        </View>
      </View>

      {/* Search barre */}
      <View className=" bg-[#f2efe3] flex-row items-center space-x-2 px-5 py-2 m-2 mt-8 rounded-[40px] justify-between">
        <View className="flex-row items-center justify-center space-x-2">
          <Ionicons name="search-outline" size={24} color="black" />
          <Text className="text-black font-normal text-lg">Search</Text>
        </View>
        <View className="flex-row items-center justify-center space-x-2">
          <Text className="text-slate-500 font-normal text-3xl">|</Text>

          <MaterialCommunityIcons
            name="microphone-outline"
            size={26}
            color="black"
          />
        </View>
      </View>

      {/* Filtre */}
      <View className="">
        <Filtre />
      </View>

      {/* Menus */}

        <ScrollView className=" flex-1 mt-2">
          <Menus name="My Pet" data ={1} />
          <Menus name="Services" data ={1} />
          <Menus name="Nearby" data ={1} />
          
        </ScrollView>
  

      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default HomeScreen
