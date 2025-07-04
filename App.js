import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

import { GlobalStyles } from "./constants/styles";
import Home from "./screens/Home";
import Category from "./components/Category";
import Wishlist from "./screens/Wishlist";

const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <StatusBar style="dark" />
        <BottomTab.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#fff" },
            // tabBarStyle: { backgroundColor: "" },
            tabBarActiveTintColor: GlobalStyles.colors.primary,
          }}
        >
          <BottomTab.Screen
            name="Home"
            component={Home}
            options={{
              title: "Home",
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home-sharp" color={color} size={size} />
              ),
            }}
          />
          <BottomTab.Screen
            name="Wishlist"
            component={Wishlist}
            options={{
              title: "Wishlist",
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="heart-sharp" color={color} size={size} />
              ),
            }}
          />
          <BottomTab.Screen
            name="transaction"
            component={Wishlist}
            options={{
              title: "Transaction",
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="receipt-outline" color={color} size={size} />
              ),
            }}
          />
          <BottomTab.Screen
            name="profile"
            component={Wishlist}
            options={{
              title: "Profile",
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <FontAwesome6 name="user" size={size} color={color} />
              ),
            }}
          />
        </BottomTab.Navigator>
      </NavigationContainer>
    </>
  );
}
