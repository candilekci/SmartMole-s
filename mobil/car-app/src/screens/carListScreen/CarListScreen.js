import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { useCars } from "../../context/carContext";
import Ionicons from "react-native-vector-icons/Ionicons";
import style from "./CarListStyle";
import { useNavigation } from "@react-navigation/native";
const CarListScreen = () => {
  const { cars } = useCars();
  const navigation = useNavigation();
  const handleCarPress = (item) => {
    navigation.navigate("CarScreen", { item });
  };

  return (
    <ScrollView>
      {cars.map((car) => (
        <TouchableOpacity
          onPress={() => handleCarPress(car)}
          key={car.id}
          style={style.sectionContainer}
        >
          <Text style={style.sectionTitle}>{car.name}</Text>
          <Ionicons name={"chevron-forward-outline"} size={30} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default CarListScreen;
