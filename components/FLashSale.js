import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { GlobalStyles } from "../constants/styles";
import AntDesign from "@expo/vector-icons/AntDesign";
import Octicons from "@expo/vector-icons/Octicons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export default function FlashSale() {
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

      <View style={styles.productContainer}>
        <View style={styles.products}>
          <View>
            <Text style={styles.productOff}>15% 0ff</Text>
          </View>
          <View style={styles.productImageContainer}>
            <Image
              source={require("../assets/product_s10.png")}
              style={styles.productImage}
            />
          </View>
          <Text style={styles.productTitle}>
            Apple Watch Ultra with Alpine loop
          </Text>
          <Text style={styles.productPrice}>$799.00</Text>
          <View style={styles.productRating}>
            <AntDesign name="star" size={16} color="#edaa34" />
            <Text style={styles.productRatingText}>4.9</Text>
            <Octicons
              name="dot-fill"
              size={15}
              color="#ccc"
              style={{ marginLeft: 5 }}
            />
            <Text style={{ fontWeight: "600" }}> 100+ sold</Text>
          </View>
          <View style={styles.productLocation}>
            <FontAwesome6 name="location-dot" size={20} color="#fa5a2a" />
            <Text style={styles.productLocationText}>lagos</Text>
          </View>
        </View>
        <View style={styles.products}>
          <View style={styles.productImageContainer}>
            <Image
              source={require("../assets/ipad_pro.jpg")}
              style={styles.productImage}
            />
          </View>
          <Text style={styles.productTitle}>
            ipad pro 6th generation 11 inch 2022
          </Text>
          <Text style={styles.productPrice}>$799.00</Text>
          <View style={styles.productRating}>
            <AntDesign name="star" size={16} color="#edaa34" />
            <Text style={styles.productRatingText}>4.9</Text>
            <Octicons
              name="dot-fill"
              size={15} 
              color="#ccc"
              style={{ marginLeft: 5 }}
            />
            <Text style={{ fontWeight: "600" }}> 100+ sold</Text>
          </View>
          <View style={styles.productLocation}>
            <FontAwesome6 name="location-dot" size={20} color="#fa5a2a" />
            <Text style={styles.productLocationText}>lagos</Text>
          </View>
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

  // Product styles
  productContainer: {
    flexDirection: "row",
    resizeMode: "contain",
    width: "100%",
    gap: 15,
    justifyContent: "space-between",
    alignContent: "center",
  },

  products: {
    flexDirection: "col",
    width: "48%",
    borderRadius: 10,
    borderColor: "#e3e3e3",
    borderWidth: 2,
    marginTop: 20,
    padding: 10,
  },

  productOff: {
    position: "absolute",
    // Width: 100,
    // height: 100,
    // top: 10,
    right: 10,
    backgroundColor: "#fee6ea",
    padding: 5,
    borderRadius: 10,
    color: "#c95770",
    fontWeight: "bold",
  },

  productImageContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 150,
    marginTop: 10,
  },
  productImage: {
    width: "100%",
    height: 130,
    resizeMode: "contain",
    marginTop: 10,
  },
  productTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 10,
  },
  productPrice: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 5,
    // color: GlobalStyles.colors.primary,
  },
  productRating: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  productRatingText: {
    marginLeft: 5,
    fontWeight: "bold",
    // color: GlobalStyles.colors.gray500,
  },
  productLocation: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginTop: 5,
  },
  productLocationText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
