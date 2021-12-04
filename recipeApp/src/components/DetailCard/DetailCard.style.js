import { StyleSheet, Dimensions } from "react-native";
const deviceSize = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#eeffed"
  },
  textCard: {
    flex: 1,
    padding: 5,
    justifyContent: "center",
  },

  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#16330F",
    letterSpacing: 3,
    textTransform:'capitalize',
    textAlign:'center'
  },
  desc: {
    fontSize: 18,
    fontWeight: "400",
  },
  button: {
    backgroundColor: "#c00",
    height: 50,
    width: deviceSize.width / 1.5,
    justifyContent: "center",
    borderRadius: 20,
  },
  buttonCard: {
    flex: 1,
    paddingVertical: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
