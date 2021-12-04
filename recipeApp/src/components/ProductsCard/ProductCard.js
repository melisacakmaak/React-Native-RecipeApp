import React from "react";
import { View, Text, Image, TouchableNativeFeedback } from "react-native";
import styles from "./ProductCard.style";

const ProductCard = ({ product, onSelect }) => {
  return (
    <TouchableNativeFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Image
          source={{ uri: product.strCategoryThumb }}
          style={{
            minHeight: 100,
            minWidth: 150,
            resizeMode: "cover",
            borderRadius:40
             
          }}
        />
        <View style={styles.textCard}>
          <Text style={styles.title}> {product.strCategory}</Text>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};
export default ProductCard;
