import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  useColorScheme,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { GlobalStyles } from "./constants/styles";
import Category from "./components/Category";
import Search from "./components/Search";
import Header from "./components/Header";
import Location from "./components/Location";
import Banner from "./components/Banner";
import FLashSale from "./components/FLashSale";

export default function App() {
  // const colorScheme = useColorScheme();
  // const isDark = colorScheme === "dark";

  return (
    <>
      <StatusBar style="auto" />
      <View
        style={[
          styles.container,
          // { backgroundColor: isDark ? "#000" : "#fff" },
        ]}
      >
        {/* Header: Logo + Notification Icons */}
        <Header />

        {/* Search Input */}
        <Search />

        {/* Location Info */}
        <Location />
        {/* Category Section */}
        <Category />

        {/*  */}
        <Banner />

        {/* Flash Sale Section */}
        <FLashSale />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
  },
});

// rncs