import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
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
            <View style={styles.icon}>
              <MaterialCommunityIcons name="shopping-outline" size={20} color="#a4a8b5" />
            </View>
            <View style={styles.icon}>
              <Ionicons name="notifications-outline" size={20} color="#a4a8b5"/>
            </View>
          </View>
        </View>

        {/* <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity> */}
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
    justifyContent: "space-between",
    // alignItems: "center",
  },
  logoContainer: {
    alignItems: "center",
    flexDirection: "row",
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

  icon: {
    width: 40,
    height: 40,
    paddingTop: 10,
    paddingLeft: 10,
    textAlign: "center",
    borderRadius: 10,
    borderColor: "#ccc",
    borderWidth: 1,
  },
  notificationContainer: {
    flexDirection: "row",
    gap: 20,
  },
  headerContainer:{
    flexDirection: "row",
    justifyContent: "space-between",
  }
  // button: {
  //   backgroundColor: "#000",
  //   paddingVertical: 15,
  //   paddingHorizontal: 30,
  //   borderRadius: 10,
  //   marginBottom: 60,
  // },
  // buttonText: {
  //   color: "#fff",
  //   fontSize: 16,
  //   fontWeight: "bold",
  // },
});
