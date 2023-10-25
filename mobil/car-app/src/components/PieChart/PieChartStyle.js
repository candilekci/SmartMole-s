import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

const style = StyleSheet.create({
  pieChartContainer: {
    width: screenWidth,
    alignItems: "center",
  },
});
export default style;
