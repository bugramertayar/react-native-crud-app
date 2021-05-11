import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Dashboard({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.productCard}>
        <Text onPress={()=> navigation.navigate('ProductList')} style={styles.textFieldProduct}>Products</Text>
      </View>
      <View style={styles.categoryCard}>
        <Text onPress={()=> navigation.navigate('CategoryList')}  style={styles.textFieldCategory}>Categories</Text>
      </View>
      <View style={styles.orderCard}>
        <Text onPress={()=> navigation.navigate('OrderList')} style={styles.textFieldOrder}>Orders</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingLeft: 20,
    paddingRight: 20,
    height: "100%",
  },
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 30,
    fontWeight: 600,
    color: "#944c12",
    marginBottom: 30,
  },
  productCard: {
    width: "inherit",
    height: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  categoryCard: {
    width: "inherit",
    height: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  orderCard: {
    width: "inherit",
    height: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  textFieldProduct: {
    fontSize: 30,
    fontWeight: 400,
    color: "#944c12",
  },
  textFieldCategory: {
    fontSize: 30,
    fontWeight: 400,
    color: "#125c94",
  },
  textFieldOrder: {
    fontSize: 30,
    fontWeight: 400,
    color: "#641294",
  },
});
