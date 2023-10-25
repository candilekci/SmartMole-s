import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

const style = StyleSheet.create({
  goBackContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    marginLeft: 8,
  },
  goBackTittle: {
    fontSize: 17,
    fontWeight: "bold",
  },

  sectionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
  },

  sectionTittle: {
    fontSize: 17,
    fontWeight: "bold",
  },
  sectionActionContainer: {
    flexDirection: "row",
  },

  sectionActionInput: {
    width: screenWidth * 0.15,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    marginHorizontal: 10,
    paddingLeft: 10,
    fontSize: 17,
  },
  sectionActionBtn: {},
  sectionDelBtn: {
    marginRight: 10,
  },
  newColorContainer: {
    alignItems: "center",
    width: screenWidth * 0.9,
    alignSelf: "center",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    paddingBottom: 15,
    marginTop: 4,
  },
  newColorTittle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    borderBottomWidth: 1,
  },
  newColorInputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: screenWidth * 0.6,
    marginBottom: 15,
  },
  newColorName: {
    width: screenWidth * 0.33,
    borderWidth: 1,
    height: 35,
    borderColor: "gray",
    borderRadius: 5,
    paddingLeft: 10,
    fontSize: 17,
  },
  newColorCount: {
    width: screenWidth * 0.18,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    paddingLeft: 10,
    fontSize: 17,
  },
  newColorAddBtn: {
    width: screenWidth * 0.7,
    height: 45,
    borderRadius: 10,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#724CF8",
  },
  newColorAddBtnText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});
export default style;
