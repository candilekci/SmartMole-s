import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { useCars } from "../../context/carContext";
import Pie from "../../components/PieChart/PieChart";
import style from "./HomeStyle";
import Bar from "../../components/BarChart/Bar";
const Home = () => {
  const { cars, setCars } = useCars();
  return (
    <View style={style.homeBody}>
      <Text style={style.header}>Araç İstatistikleri</Text>
      <Pie />
      <Bar />
    </View>
  );
};

export default Home;
