import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

const style = StyleSheet.create({
  homeBody: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    alignSelf: "center",
    fontSize: 20,
    marginTop: 15,
  },
});
export default style;
