import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.container}>
        {/* <Text>Open up App.js to start working on your app!</Text> */}
        <View style={{ flex: 1 }}>
          <Image
            source={require("./assets/logo.png")}
            style={{ width: 50, height: 50 }}
          />
          <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 10 }}>
            Luxeshop
          </Text>
        </View>
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
   // flex: 1,
   backgroundColor: '#fff',
   // alignItems: 'center',
   padding: 20,
   paddingTop: 50,
   // justifyContent: 'center',
  },
});
