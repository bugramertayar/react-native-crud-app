import React from "react";
import Dashboard from "./components/Dashboard.js";
import ProductList from "./components/ProductList.js";
import CategoryList from "./components/CategoryList.js";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
