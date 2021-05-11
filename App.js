import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Dashboard from "./components/Dashboard.js";
import ProductList from "./components/ProductList.js";
import CategoryList from "./components/CategoryList.js";
import ProductDetail from "./components/ProductDetail.js";
import OrderList from "./components/OrderList.js";
const Stack = createStackNavigator();

const globalScreenOptions = {
  headerStyle: { backgroundColor: "#360257" },
  headerTitleStyle: { color: "white" },
  headerTintColor: "white",
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions}>
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ title: "Dashboard" }}
        />
        <Stack.Screen
          name="ProductList"
          component={ProductList}
          options={{ title: "Product List" }}
        />
        <Stack.Screen
          name="CategoryList"
          component={CategoryList}
          options={{ title: "Category List" }}
        />
          <Stack.Screen
          name="OrderList"
          component={OrderList}
          options={{ title: "Order List" }}
        />
          <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
          options={{ title: "Product Detail" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
