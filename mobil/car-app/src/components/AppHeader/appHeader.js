import style from "./appHeaderStyle";
import { Text, View, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
const AppHeader = () => {
  return (
    <SafeAreaView style={style.body}>
      <LinearGradient
        colors={["#890296", "#00867b"]}
        style={style.linearGradient}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
      />
      <Text style={style.text}>Car Site</Text>
    </SafeAreaView>
  );
};

export default AppHeader;
