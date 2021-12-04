import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    backgroundColor:"#aade9e",
    borderWidth: 1,
    borderColor: "lightslategrey",
    margin: 2,
    borderRadius: 10,
    borderTopLeftRadius: 60,
    borderBottomLeftRadius: 60,
    top: 5,
  },
  textCard: {
    flex: 1,
    padding: 5,
    justifyContent: "center",
  },

  title: {
    fontSize: 22,
    fontWeight: "400",
  },
});

export default styles;
