import React from "react";
import TabNavigation from "./Tab";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CarScreen from "../screens/carScreen/CarScreen";

const StackNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={TabNavigation} />
        <Stack.Screen name="AddCar" component={TabNavigation} />
        <Stack.Screen name="CarList" component={TabNavigation} />
        <Stack.Screen name="CarScreen" component={CarScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
