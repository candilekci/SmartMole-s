import React, { useEffect, useState } from "react";
import {
  ScrollView,
  TextInput,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { PieChart } from "react-native-chart-kit";
import { useCars } from "../../context/carContext";
import style from "./PieChartStyle";
const Pie = () => {
  const [pieData, setPieData] = useState([]);
  const { cars } = useCars();
  const chartColors = [
    "#1f77b4",
    "#ff7f0e",
    "#2ca02c",
    "#d62728",
    "#9467bd",
    "#8c564b",
    "#e377c2",
    "#7f7f7f",
    "#bcbd22",
    "#17becf",
    "#aec7e8",
    "#ffbb78",
    "#98df8a",
    "#ff9896",
    "#c5b0d5",
    "#c49c94",
    "#f7b6d2",
    "#c7c7c7",
    "#dbdb8d",
    "#9edae5",
  ];
  useEffect(() => {
    if (cars) {
      const pieData = cars.map((car, index) => {
        const totalProductCount = car.product.reduce((total, product) => {
          return total + product.count;
        }, 0);
        return {
          name: car.name,
          population: totalProductCount,
          color: chartColors[index],
          legendFontColor: "#7F7F7F",
          legendFontSize: 15,
        };
      });
      setPieData(pieData);
    }
  }, [cars]);
  return (
    <View style={style.pieChartContainer}>
      <PieChart
        data={pieData}
        width={350}
        height={220}
        chartConfig={{
          color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        }}
        accessor={"population"}
        backgroundColor={"transparent"}
      />
    </View>
  );
};

export default Pie;
