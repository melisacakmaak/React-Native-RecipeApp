import React from "react";
import {
  View,
  Text,
  Image,
  TouchableNativeFeedback,
  Dimensions,
  Button,
  TouchableOpacity,
} from "react-native";
import styles from "./DetailCard.style";
import * as Linking from "expo-linking";
const deviceSize = Dimensions.get("window");

const DetailCard = ({ detail }) => {
  function openLink() {
    Linking.openURL(detail.strYoutube);
  }

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: detail.strMealThumb }}
        style={{
          width: deviceSize.width,
          height: deviceSize.height / 3,
          resizeMode: "cover",
          borderBottomLeftRadius:50,
          borderBottomRightRadius:50
        }}
      />
      <View style={styles.textCard}>
        <Text style={styles.title}> {detail.strMeal}</Text>
        <Text style={styles.desc}> {detail.strInstructions}</Text>
      </View>
      <View style={styles.buttonCard}>
        <TouchableOpacity style={styles.button} onPress={openLink}>
          <Text style={{ color: "#fff", fontSize: 25, textAlign: "center",fontWeight:'600' }}>
            Watch on Youtube
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default DetailCard;
