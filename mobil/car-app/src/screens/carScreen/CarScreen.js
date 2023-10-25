import React, { useState } from "react";
import {
  ScrollView,
  TextInput,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import style from "./CarScreenStyle";
import { useNavigation } from "@react-navigation/native";
import { useCars } from "../../context/carContext";
const CarScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [data, setData] = useState(route.params.item);
  const { cars, setCars } = useCars();
  const [newColor, setNewColor] = useState([]);
  const [addColor, setAddColor] = useState({
    color: "",
    count: 0,
    colorId: 0,
  });
  const handleInputChange = (colorId, count) => {
    const updatedNewColor = newColor.map((color) => {
      if (color.colorId === colorId) {
        return { ...color, count };
      }
      return color;
    });
    if (!updatedNewColor.find((color) => color.colorId === colorId)) {
      updatedNewColor.push({ colorId, count });
    }
    setNewColor(updatedNewColor);
  };
  const increaseCount = (colorId) => {
    if (newColor.find((color) => color.colorId === colorId)) {
      let TotalCount =
        newColor.find((color) => color.colorId === colorId).count +
        cars
          .find((car) => car.id === data.id)
          .product.find((item) => item.colorId === colorId).count;
      console.log(TotalCount);
      const updatedCars = cars.map((car) => {
        if (car.id === data.id) {
          const updatedProduct = car.product.map((item) => {
            if (item.colorId === colorId) {
              return { ...item, count: TotalCount };
            }
            return item;
          });
          return { ...car, product: updatedProduct };
        }
        return car;
      });
      setCars(updatedCars);
      setData({
        ...data,
        product: updatedCars.find((car) => car.id === data.id).product,
      });
    } else {
      console.log("yok");
    }
  };
  const decreaseCount = (colorId) => {
    if (newColor.find((color) => color.colorId === colorId)) {
      let TotalCount =
        cars
          .find((car) => car.id === data.id)
          .product.find((item) => item.colorId === colorId).count -
        newColor.find((color) => color.colorId === colorId).count;
      console.log(TotalCount);
      const updatedCars = cars.map((car) => {
        if (car.id === data.id) {
          const updatedProduct = car.product.map((item) => {
            if (item.colorId === colorId) {
              return { ...item, count: TotalCount };
            }
            return item;
          });
          return { ...car, product: updatedProduct };
        }
        return car;
      });
      setCars(updatedCars);
      setData({
        ...data,
        product: updatedCars.find((car) => car.id === data.id).product,
      });
    } else {
      console.log("yok");
    }
  };
  const handleDeleteColor = (colorId) => {
    const updatedData = data.product.filter((item) => item.colorId !== colorId);
    const updatedCars = cars.map((car) => {
      if (car.id === data.id) {
        return { ...car, product: updatedData };
      }
      return car;
    });
    setCars(updatedCars);
    setData({ ...data, product: updatedData });
  };
  const handleAddColor = () => {
    let maxColorId = 0;
    for (let i = 0; i < data.product.length; i++) {
      if (data.product[i].colorId > maxColorId) {
        maxColorId = data.product[i].colorId;
      }
    }
    if (addColor !== "" && addColor.count !== 0) {
      setAddColor({ ...addColor, colorId: maxColorId + 1 });
      const updatedData = [...data.product, addColor];
      const updatedCars = cars.map((car) => {
        if (car.id === data.id) {
          return { ...car, product: updatedData };
        }
        return car;
      });
      setCars(updatedCars);
      setData({ ...data, product: updatedData });
    }
  };
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={style.goBackContainer}
      >
        <Ionicons name={"chevron-back-outline"} size={30} />
        <Text style={style.goBackTittle}>Car Detail</Text>
      </TouchableOpacity>
      <ScrollView>
        {data.product.map((item) => (
          <View key={item.colorId} style={style.sectionContainer}>
            <Text style={style.sectionTittle}>Renk: {item.color}</Text>
            <View style={style.sectionActionContainer}>
              <TouchableOpacity
                onPress={() => increaseCount(item.colorId)}
                style={style.sectionActionBtn}
              >
                <Ionicons name={"add"} size={30} />
              </TouchableOpacity>

              <TextInput
                style={style.sectionActionInput}
                keyboardType="numeric"
                placeholder={item.count.toString()}
                onChangeText={(text) => {
                  handleInputChange(item.colorId, parseInt(text, 10));
                }}
              />
              <TouchableOpacity
                onPress={() => decreaseCount(item.colorId)}
                style={style.sectionActionBtn}
              >
                <Ionicons name={"remove"} size={30} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => handleDeleteColor(item.colorId)}>
              <MaterialCommunityIcons
                style={style.sectionDelBtn}
                name={"delete"}
                size={30}
              />
            </TouchableOpacity>
          </View>
        ))}
        <View style={style.newColorContainer}>
          <Text style={style.newColorTittle}>Yeni Renk Ekle</Text>
          <View style={style.newColorInputContainer}>
            <TextInput
              style={style.newColorName}
              onChangeText={(text) => {
                setAddColor({ ...addColor, color: text });
              }}
              placeholder="Renk Adı"
            />
            <TextInput
              onChangeText={(text) => {
                setAddColor({ ...addColor, count: text });
              }}
              style={style.newColorCount}
              placeholder="0"
              keyboardType="numeric"
            />
          </View>
          <TouchableOpacity
            onPress={() => handleAddColor()}
            style={style.newColorAddBtn}
          >
            <Text style={style.newColorAddBtnText}>Ekle</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default CarScreen;
