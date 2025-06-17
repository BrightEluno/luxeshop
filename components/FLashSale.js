import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalStyles } from "../constants/styles";

export default function FLashSale() {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>FLash Sale</Text>
          <Text style={styles.endsIn}>Ends In </Text>
          <Text style={styles.timer}>12:58:32</Text>
        </View>
        <View>
          <Text style={styles.seeAll}>See all</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // paddingHorizontal: 20,
    marginTop: 25,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    // marginBottom: 10,
  },
  endsIn: {
    fontSize: 18,
    color: "gray",
    marginLeft: 10,
    alignSelf: "center",
  },
  timer: {
    fontSize: 18,
    color: "#e3e3e3",
    backgroundColor: "#f92b4a",
    width: 100,
    textAlign: "center",
    borderRadius: 15,
    alignSelf: "center",
    padding: 5,
  },
  seeAll: {
    color: GlobalStyles.colors.primary,
    alignSelf: "center",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },
});
