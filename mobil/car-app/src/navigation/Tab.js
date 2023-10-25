import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";
import Home from "../screens/homeScreen/Home";
import AddCar from "../screens/addCarScreen/AddCar";
import CarListScreen from "../screens/carListScreen/CarListScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
const TabNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          let colorName;
          if (route.name === "HomeScreen") {
            iconName = focused ? "home-sharp" : "home-outline";
            colorName = focused ? "#2D5AA7" : "#fff";
          } else if (route.name === "AddCar") {
            iconName = focused ? "duplicate-sharp" : "duplicate-outline";
            colorName = focused ? "#2D5AA7" : "#fff";
          } else if (route.name === "CarList") {
            iconName = focused ? "car" : "car-outline";
            colorName = focused ? "#2D5AA7" : "#fff";
          }
          return <Ionicons name={iconName} size={30} color={"white"} />;
        },
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveBackgroundColor: "#748DB7",
        tabBarInactiveBackgroundColor: "#5B7FBB",
        tabBarStyle: { height: 60 },
      })}
    >
      <Tab.Screen name="HomeScreen" component={Home} />
      <Tab.Screen name="AddCar" component={AddCar} />
      <Tab.Screen name="CarList" component={CarListScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
