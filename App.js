import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  ScrollView,
  StyleSheet,
} from "react-native";
import Header from "./components/Header";
import Search from "./components/Search";
import Location from "./components/Location";
import Category from "./components/Category";
import Banner from "./components/Banner";
import FlashSale from "./components/FlashSale"; // renamed
// import FLashSale from "./components/FlashSale";

export default function App() {
  return (
    <>
      <StatusBar style="dark"  />
      <ScrollView contentContainerStyle={styles.container}>
        <Header />
        <Search />
        <Location />
        <Category />
        <Banner />
        <FlashSale />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    paddingTop: 50,
  },
});


// rncs