import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { GlobalStyles } from "../constants/styles";
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';

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

        <View>
          <View style={styles.productContainer}>
            <Image
              source={require("../assets/product_s10.png")}
                style={styles.productImage}
              
            />
            <Text style={styles.productTitle}>Apple Watch Ultra with Alpine loop</Text>
            <Text style={styles.productPrice}>
              $799.00
            </Text>
            <View style={styles.productRating}>
              <AntDesign name="star" size={16} color="#f92b4a" />
              <Text style={styles.productRatingText} >4.9</Text>
              <Text>.</Text>
                <Text> 100+ sold</Text>
            </View>
            <View>
                <Entypo name="heart" size={24} color="black" />
                <Text>lagos</Text>
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
        flexDirection: "col",
        // height: 200,
        // alignItems: "center",
        marginVertical: 10,
        padding: 10,
        backgroundColor: GlobalStyles.colors.white,
        borderRadius: 10,
        shadowColor: GlobalStyles.colors.black,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 0.1,
        // elevation: 0.1,
        borderColor: GlobalStyles.colors.gray500,
        borderWidth: 1,
    },
    productImage: {
        width: 100,
        height: 100,
        // borderRadius: 10,
    },
    productTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: GlobalStyles.colors.black,
        marginLeft: 10,
        flex: 1,
    },
    productPrice: {
        fontSize: 16,
        fontWeight: "bold",
        color: GlobalStyles.colors.primary,
    },
    productRating: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5,
    },
    productRatingText: {
        marginLeft: 5,
        color: GlobalStyles.colors.gray500,
    },
    productLocation: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5,
    },
    productLocationText: {
        marginLeft: 5,
        color: GlobalStyles.colors.gray500,
    },

});
