import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import style from "./AddCarStyle";
import { LinearGradient } from "expo-linear-gradient";
import { useCars } from "../../context/carContext";
const AddCar = () => {
  const { cars, setCars } = useCars();
  const [newCar, setNewCar] = useState({
    id: 0,
    name: "",
    product: [],
  });

  const addCar = () => {
    if (newCar.name !== "") {
      let maxId = 0;
      for (const car of cars) {
        if (car.id > maxId) {
          maxId = car.id;
        }
      }
      setNewCar({ ...newCar, id: maxId + 1 });
      const updatedCars = [...cars, newCar];
      setCars(updatedCars);
      setNewCar({
        id: 0,
        name: "",
        product: [],
      });
    }
  };
  return (
    <View>
      <View style={style.addCarContainer}>
        <Text style={style.addCarTittle}>Araba Ekle</Text>
        <TextInput
          style={style.addCarInput}
          placeholder="Araba Adı"
          onChangeText={(text) => setNewCar({ ...newCar, name: text })}
        />
        <TouchableOpacity
          onPress={() => {
            addCar();
          }}
          style={style.addCarButton}
        >
          <LinearGradient
            colors={["#00994D", "#00867b"]}
            style={style.linearGradient}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
          />
          <Text style={style.addCarButtonText}>Araba Ekle</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddCar;
