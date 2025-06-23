import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import { GlobalStyles } from "../constants/styles";
import AntDesign from "@expo/vector-icons/AntDesign";
import Octicons from "@expo/vector-icons/Octicons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const products = [
  {
    id: 1,
    title: "Apple Watch Ultra with Alpine loop",
    image: require("../assets/product_s10.png"),
    price: "$799.00",
    location: "Lagos",
    rating: 4.9,
    sold: "100+ sold",
    discount: "15% Off",
  },
  {
    id: 2,
    title: "iPad Pro 6th generation 11 inch 2022",
    image: require("../assets/ipad_pro.jpg"),
    price: "$799.00",
    location: "Lagos",
    rating: 4.9,
    sold: "100+ sold",
  },
  {
    id: 3,
    title: "iPad Pro 6th generation 11 inch 2022",
    image: require("../assets/ipad_pro.jpg"),
    price: "$799.00",
    location: "Lagos",
    rating: 4.9,
    sold: "100+ sold",
  },
  {
    id: 4,
    title: "iPad Pro 6th generation 11 inch 2022",
    image: require("../assets/ipad_pro.jpg"),
    price: "$799.00",
    location: "Lagos",
    rating: 4.9,
    sold: "100+ sold",
  },
];

export default function FlashSale() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>Flash Sale</Text>
          <View style={styles.timerWrap}>
            <Text style={styles.endsIn}>Ends In</Text>
            <Text style={styles.timer}>12:58:32</Text>
          </View>
        </View>
        <Text style={styles.seeAll}>See all</Text>
      </View>

      <View style={styles.productGrid}>
        {products.map((item) => (
          <View key={item.id} style={styles.products}>
            {item.discount && <Text style={styles.productOff}>{item.discount}</Text>}

            <View style={styles.productImageContainer}>
              <Image source={item.image} style={styles.productImage} />
            </View>

            <Text style={styles.productTitle}>{item.title}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>

            <View style={styles.productRating}>
              <AntDesign name="star" size={16} color="#edaa34" />
              <Text style={styles.productRatingText}>{item.rating}</Text>
              <Octicons
                name="dot-fill"
                size={15}
                color="#ccc"
                style={{ marginLeft: 5 }}
              />
              <Text style={{ fontWeight: "600" }}> {item.sold}</Text>
            </View>

            <View style={styles.productLocation}>
              <FontAwesome6 name="location-dot" size={20} color="#fa5a2a" />
              <Text style={styles.productLocationText}>{item.location}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: 15,
  },
  container: {
    marginTop: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  containerTitle: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  timerWrap: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  endsIn: {
    fontSize: 18,
    color: "gray",
  },
  timer: {
    fontSize: 18,
    color: "#fff",
    backgroundColor: "#f92b4a",
    width: 100,
    textAlign: "center",
    borderRadius: 15,
    padding: 5,
  },
  seeAll: {
    color: GlobalStyles.colors.primary,
    fontSize: 16,
    fontWeight: "bold",
  },
  productGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 20,
    rowGap: 15,
    width: "100%",

  },
  products: {
    width: "48%",
    borderRadius: 10,
    borderColor: "#e3e3e3",
    borderWidth: 2,
    padding: 10,
    position: "relative",
  },
  productOff: {
    position: "absolute",
    right: 10,
    backgroundColor: "#fee6ea",
    padding: 5,
    borderRadius: 10,
    color: "#c95770",
    fontWeight: "bold",
    zIndex: 1,
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
  },
  productRating: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  productRatingText: {
    marginLeft: 5,
    fontWeight: "bold",
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
