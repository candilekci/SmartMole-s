import React, { useEffect } from "react";
import { Text, View, Dimensions } from "react-native";
import { useCars } from "../../context/carContext";
import { BarChart } from "react-native-chart-kit";
const Bar = () => {
  const { cars, setCars } = useCars();
  const barData = {
    labels: cars.map((car) => car.name),
    datasets: [
      {
        data: cars.map((car) => {
          const totalProductCount = car.product.reduce(
            (total, product) => total + product.count,
            0
          );
          return totalProductCount;
        }),
      },
    ],
  };

  return (
    <View>
      <BarChart
        data={barData}
        width={Dimensions.get("window").width}
        height={220}
        yAxisLabel=""
        chartConfig={{
          backgroundGradientFrom: "white",
          backgroundGradientTo: "white",
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginLeft: -15,
        }}
        withInnerLines={false}
      />
    </View>
  );
};

export default Bar;
