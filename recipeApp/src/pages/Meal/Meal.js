import axios from "axios";
import React, { useState, useEffect } from "react";
import { View, Text, Image, FlatList } from "react-native";
import MealCard from "../../components/MealCard/MealCard";
import { API_MEALS } from "../../Config";
import styles from "./Meal.style";

export default function Meal({ navigation, route }) {
  const { strCategory } = route.params;
  const [dataDetail, setDataDetail] = useState([]);

  useEffect(() => {
    getProductDetail();
  }, []);

  async function getProductDetail() {
    const response = await axios.get(`${API_MEALS}=${strCategory}`);
    setDataDetail(response.data);
  }
  function handleProductSelect(idMeal) {
    navigation.navigate("DetailsPage", { idMeal });
  }
  const renderStore = ({ item }) => (
    <MealCard meal={item} onSelect={() => handleProductSelect(item.idMeal)} />
  );

  return (
    <View style={{ backgroundColor: "#eeffed" }}>
      <FlatList
        keyExtractor={(item) => item.idMeal}
        data={dataDetail.meals}
        renderItem={renderStore}
      />
    </View>
  );
}
