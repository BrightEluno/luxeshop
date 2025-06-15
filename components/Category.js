import { Image, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../constants/styles";

const categories = [
  { name: "Electronic", image: require("../assets/electronic.png") },
  { name: "Food", image: require("../assets/food.png") },
  { name: "Accesories", image: require("../assets/accesories.png") },
  { name: "Beauty", image: require("../assets/beauty.png") },
  { name: "Furniture", image: require("../assets/furniture.png") },
  { name: "Fashion", image: require("../assets/fashion.png") },
  { name: "Health", image: require("../assets/health.png") },
  { name: "Stationery", image: require("../assets/stationery.png") },
];

export default function Category() {
  return (
    <View>
      {/* Category Section */}
      <View style={styles.categoryContainer}>
        {categories.map((item, index) => (
          <View key={index}>
            <View style={styles.categoryItem}>
              <Image
                style={styles.categoryImage}
                source={item.image}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.categoryText}>{item.name}</Text>
            
          </View>
          
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginTop: 20,
    gap: 10,
  },
  categoryItem: {
    width: 60,
    height: 60,
    borderRadius: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
  categoryImage: {
    width: 35,
    height: 35,
  },
  categoryText: {
    textAlign: "center",
    fontSize: 15,
    color: GlobalStyles.colors.black,
    fontWeight: "bold",
    marginTop: 10,
  },
});
