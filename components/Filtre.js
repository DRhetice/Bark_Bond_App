import { View, Text, FlatList, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { ListFiltre } from '../data'


export default function Filtre() {
  return (
   <FlatList
   horizontal
   showsHorizontalScrollIndicator={false}
   data={ListFiltre}
   className=" "
   keyExtractor={(item) => item.id.toString()}
   renderItem={({item}) => {
    return (   
     <View className={`bg-[${item.color}] rounded-2xl items-center m-2 justify-center p-2  ${item.border ? 'border-2 border-blue-500 ' : ''} `}>
      <TouchableOpacity onPress={() => {
        console.log(item.name)
      }}>
        <Text className="text-black text-sm">{item.name}</Text>
        </TouchableOpacity> 
       
    </View>
    )
   }}
   />
  )
}
