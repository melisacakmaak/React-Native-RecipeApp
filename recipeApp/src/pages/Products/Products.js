import React, { useState, useEffect } from "react";
import { FlatList, View } from "react-native";
import axios from "axios";
import ProductCard from "../../components/ProductsCard/ProductCard";
import Loading from "../../../lottie/Loading/Loading";
import { URL } from "../../Config";

export default function Products({ navigation }) {
  const [data, setData] = useState([]);
  //const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProduct();
  }, []);

  async function getProduct() {
    const response = await axios.get(URL);
    setData(response.data);
    //console.log(response.data.categories)
    // setLoading(false);
  }

  function handleProductSelect(strCategory) {
    navigation.navigate("MealPage", { strCategory });
  }

  const renderStore = ({ item }) => (
    <ProductCard
      product={item}
      onSelect={() => handleProductSelect(item.strCategory)}
    />
  );
  // if (loading) {
  //   return <Loading />;
  // }

  return (
    <View style={{backgroundColor:'#eeffed'}}>
      <FlatList
        keyExtractor={(item) => item.idCategory}
        data={data.categories}
        renderItem={renderStore}
      />
    </View>
  );
}
