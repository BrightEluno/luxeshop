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
import Foundation from "react-native-vector-icons/Foundation";
import { GlobalStyles } from "./constants/styles";

const categories = [
  { name: "Electronic", image: require("./assets/electronic.png") },
  { name: "Food", image: require("./assets/food.png") },
  { name: "Accesories", image: require("./assets/accesories.png") },
  { name: "Beauty", image: require("./assets/beauty.png") },
  { name: "Furniture", image: require("./assets/furniture.png") },
  { name: "Fashion", image: require("./assets/fashion.png") },
  { name: "Health", image: require("./assets/health.png") },
  { name: "Stationery", image: require("./assets/stationery.png") },
];

export default function App() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <>
      <StatusBar style="auto" />
      <View
        style={[
          styles.container,
          { backgroundColor: isDark ? "#000" : "#fff" },
        ]}
      >
        {/* Header: Logo + Notification Icons */}
        <View style={styles.headerContainer}>
          <View style={styles.logoContainer}>
            <Image
              source={require("./assets/logo.png")}
              style={styles.logo}
              resizeMode="contain"
            />
            <Text style={styles.title}>Luxeshop</Text>
          </View>
          <View style={styles.notificationContainer}>
            <View style={styles.notificationIcon}>
              <MaterialCommunityIcons
                name="shopping-outline"
                size={20}
                color="#a4a8b5"
              />
            </View>
            <View style={styles.notificationIcon}>
              <Ionicons
                name="notifications-outline"
                size={20}
                color="#a4a8b5"
              />
            </View>
          </View>
        </View>

        {/* Input with Icon */}
        <View style={styles.inputContainer}>
          <Ionicons
            name="search-outline"
            size={20}
            color="#888"
            style={styles.inputIcon}
          />
          <TextInput
            placeholder="Find what you need..."
            style={styles.searchInput}
            keyboardType="default"
          />
          <Foundation
            name="align-center"
            size={20}
            color="#888"
            style={styles.inputIcon2}
          />
        </View>

        {/* Location Info */}
        <View style={styles.locationContainer}>
          <Ionicons
            name="location-sharp"
            size={20}
            color={GlobalStyles.colors.primary}
            style={styles.inputIcon}
          />
          <Text style={styles.locationText}>Deliver to </Text>
          <Text style={styles.locationMainText}>
            Jl. Rose No. 123 Main St, City
          </Text>
        </View>

        {/* Category Section */}
        <View style={styles.categoryContainer}>
          {categories.map((item, index) => (
            <View key={index}>
              <View style={styles.categoryItem}>
                <Image
                  style={styles.categoryImage}
                  source={item.image}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.categoryText}>{item.name}</Text>
            </View>
          ))} 
        </View>

        {/* Flash Sale Banner */}
        <View style={styles.flashSaleContainer}>
          <Image
            source={require("./assets/flash-image.png")}
            style={styles.flashSaleImage}
          />
        </View>
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
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  logo: {
    width: 50,
    height: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  notificationContainer: {
    flexDirection: "row",
    gap: 15,
  },
  notificationIcon: {
    width: 40,
    height: 40,
    paddingTop: 10,
    paddingLeft: 10,
    borderRadius: 10,
    borderColor: "#ccc",
    borderWidth: 1,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 1,
    marginTop: 20,
  },
  inputIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  inputIcon2: {
    marginRight: 8,
    borderLeftWidth: 1,
    borderLeftColor: "#ccc",
    paddingLeft: 10,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  locationText: {
    fontSize: 16,
    color: GlobalStyles.colors.gray500,
  },
  locationMainText: {
    fontSize: 16,
    color: GlobalStyles.colors.black,
  },
  categoryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginTop: 20,
    gap: 10,
  },
  categoryItem: {
    width: 60,
    height: 60,
    borderRadius: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
  categoryImage: {
    width: 35,
    height: 35,
  },
  categoryText: {
    textAlign: "center",
    fontSize: 15,
    color: GlobalStyles.colors.black,
    fontWeight: "bold",
    marginTop: 10,
  },
  flashSaleContainer: {
    marginTop: 20,
    width: "100%",
    height: 150,
    borderRadius: 10,
  },
  flashSaleImage: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
});
