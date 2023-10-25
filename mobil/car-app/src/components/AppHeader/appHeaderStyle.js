import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

const style = StyleSheet.create({
  body: {
    width: screenWidth,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  linearGradient: {
    height: "100%",
    width: "100%",
    position: "absolute",
    zIndex: 0,
  },
  text: {
    color: "white",
    fontSize: 30,
    fontWeight: "800",
    zIndex: 1,
    fontFamily: "sans-serif",
    marginTop: 30,
  },
});
export default style;
