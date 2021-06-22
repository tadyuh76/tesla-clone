import React from "react";
import { FlatList, Dimensions } from "react-native";
import CarItem from "../CarItem";
import cars from "./cars";

export default function CarsList() {
  return (
    <FlatList
      data={cars}
      renderItem={({item}) =>
        <CarItem car={item} />
      }
      showsVerticalScrollIndicator={false}
      snapToAlignment="start"
      decelerationRate="fast"
      snapToInterval={Dimensions.get("screen").height}
    />
  )
}