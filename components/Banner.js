import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Banner() {
  return (
    <View style={styles.flashSaleContainer}>
      <Image
        source={require("../assets/flash-image.png")}
        style={styles.flashSaleImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
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
