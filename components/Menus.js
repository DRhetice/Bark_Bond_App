import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { logo } from "../data";
import PetsCard from "./PetsCard";
import ServicesCard from "./ServicesCard";
import NearbyCard from "./NearbyCard";

/**
 * Render a menu component.
 *
 * @param {string} name - The name of the menu.
 * @param {number} data - The data associated with the menu.
 * @returns {JSX.Element} - The rendered menu component.
 */
export default function Menus({ name, data }) {
  return (
    <View className="px-1">
      <View className="flex-row justify-between items-center">
        <Text className=" font-medium text-xl">{name}</Text>
        <TouchableOpacity
          onPress={() => {
            alert("See All");
          }}
        >
          <Text>See All</Text>
        </TouchableOpacity>
      </View>
      {name === "My Pet" && <PetsCard />}
      {name === "Services" && <ServicesCard />}
      {name === "Nearby" && <NearbyCard />}

    </View>
  );
}
