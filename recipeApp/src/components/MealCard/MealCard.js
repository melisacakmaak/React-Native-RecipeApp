import React from "react";
import { View, Text, Image, TouchableNativeFeedback } from "react-native";
import styles from "./MealCard.style";

const MealCard = ({ meal, onSelect }) => {
  return (
    <TouchableNativeFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Image
          source={{ uri: meal.strMealThumb }}
          style={{
            minHeight: 100,
            minWidth: 150,
            resizeMode: "cover",
            borderRadius:40
             
          }}
        />
        <View style={styles.textCard}>
          <Text style={styles.title}> {meal.strMeal}</Text>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};
export default MealCard;
