import { StatusBar } from "expo-status-bar";
import { Text, View, SafeAreaView } from "react-native";
import StackNavigation from "./src/navigation/Stack";
import AppHeader from "./src/components/AppHeader/appHeader";
import { CarProvider } from "./src/context/carContext";
export default function App() {
  return (
    <CarProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <AppHeader />
        <StackNavigation />
        <StatusBar style="auto" />
      </SafeAreaView>
    </CarProvider>
  );
}
