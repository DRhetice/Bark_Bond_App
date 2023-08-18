import { View, Text } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

const HomeScreen = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text>Bark Bond App</Text>
      <StatusBar style="auto" />
    </View>
  )
}

export default HomeScreen