import { StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { GlobalStyles } from "../constants/styles";

export default function Location() {
  return (
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
  );
}

const styles = StyleSheet.create({
    
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
});
