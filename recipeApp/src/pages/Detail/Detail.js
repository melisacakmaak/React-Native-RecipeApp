import React, { useState, useEffect } from "react";
import { View, Text, Image, FlatList } from "react-native";
import styles from "./Detail.style";
import axios from "axios";
import { API_DETAIL } from "../../Config";
import DetailCard from "../../components/DetailCard/DetailCard";

export default function Detail({ route }) {
  const { idMeal } = route.params;
  const [dataDetail, setDataDetail] = useState([]);

  useEffect(() => {
    getProductDetail();
  }, []);

  async function getProductDetail() {
    const response = await axios.get(`${API_DETAIL}=${idMeal}`);
    setDataDetail(response.data);
  }

  const renderStore = ({ item }) => (
    <DetailCard
      detail={item}
      onSelect={() => handleProductSelect(item.idMeal)}
    />
  );

  return (
    <FlatList
      keyExtractor={(item) => item.idMeal}
      data={dataDetail.meals}
      renderItem={renderStore}
    />
  );
}
