import { StyleSheet, Text, View, TextInput } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Foundation from "react-native-vector-icons/Foundation";

export default function Search() {
  return (
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
  );
}

const styles = StyleSheet.create({
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
});
