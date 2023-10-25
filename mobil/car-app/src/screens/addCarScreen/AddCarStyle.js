import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

const style = StyleSheet.create({
  addCarContainer: {
    marginTop: 30,
    alignSelf: "center",
    width: screenWidth * 0.9,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
  },
  addCarTittle: {
    fontSize: 25,
    fontWeight: "bold",
    marginVertical: 20,
  },
  addCarInput: {
    width: screenWidth * 0.8,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    padding: 10,
    marginBottom: 50,
  },
  addCarButton: {
    width: screenWidth * 0.5,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  addCarButtonText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  linearGradient: {
    height: "100%",
    width: "100%",
    position: "absolute",
    zIndex: 0,
    borderRadius: 10,
  },
});
export default style;
