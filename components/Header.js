import { Image, StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/logo.png")}
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
          <Ionicons name="notifications-outline" size={20} color="#a4a8b5" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
});
