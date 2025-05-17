import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Foundation from "react-native-vector-icons/Foundation";
import { GlobalStyles } from "./constants/styles";
export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
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
            placeholder="Find you needed..."
            style={styles.searchInput}
            keyboardType="search"
          />
          <Foundation
            name="align-center"
            size={20}
            color="#888"
            style={styles.inputIcon2}
          />
        </View>
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

        <View style={styles.categoryContainer}>
          <View style={styles.electronic}>
            <Image
              style={styles.electronicImage}
              source={require("./assets/electronic.png")}
              resizeMode="contain"
            />
          </View>
          <View style={styles.electronic}>
            <Image
              style={styles.electronicImage}
              source={require("./assets/food.png")}
              resizeMode="contain"
            />
          </View>
          <View style={styles.electronic}>
            <Image
              style={styles.electronicImage}
              source={require("./assets/electronic.png")}
              resizeMode="contain"
            />
          </View>
          <View style={styles.electronic}>
            <Image
              style={styles.electronicImage}
              source={require("./assets/electronic.png")}
              resizeMode="contain"
            />
          </View>
          <View style={styles.electronic}>
            <Image
              style={styles.electronicImage}
              source={require("./assets/electronic.png")}
              resizeMode="contain"
            />
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
    textAlign: "center",
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
    alignItems: "center",
    marginTop: 20,
    flexWrap: "wrap",
    gap: 10,
  },
  electronic: {
    width: 75,
    height: 75,
    borderRadius: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
  electronicImage: {
    width: 50,
    height: 50,
  },
});
