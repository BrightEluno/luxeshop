import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar,
  Platform,
} from "react-native";

import Header from "../components/Header";
import Search from "../components/Search";
import Location from "../components/Location";
import Category from "../components/Category";
import Banner from "../components/Banner";
import FlashSale from "../components/FlashSale";

export default function Home() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Header />
        <Search />
        <Location />
        <Category />
        <Banner />
        <FlashSale />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#fff",
  },
  container: {
    padding: 20,
    paddingBottom: 100, // Add bottom padding to ensure full scroll
  },
});
