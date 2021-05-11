import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ProductDetail({ route, navigation }) {
  const { productId } = route.params;
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://northwind.vercel.app/api/products/" + productId)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <View style={styles.container}>
        <Text style={styles.text}>
          Id: <Text style={styles.textInline}>{data.id}</Text>
        </Text>
        <Text style={styles.text}>
          Name: <Text style={styles.textInline}>{data.name}</Text>
        </Text>
        <Text style={styles.text}>
          Quantity Per Unit:{" "}
          <Text style={styles.textInline}>{data.quantityPerUnit}</Text>
        </Text>
        <Text style={styles.text}>
          Unit Price: <Text style={styles.textInline}>{data.unitPrice}</Text>
        </Text>
        <Text style={styles.text}>
          Category Id: <Text style={styles.textInline}>{data.categoryId}</Text>
        </Text>
        <Text style={styles.text}>
          Supplier Id: <Text style={styles.textInline}>{data.supplierId}</Text>
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#fff",
    padding: 20,
    height: "100%",
  },
  text: {
    margin: 5,
    color: "#1c56a3",
    fontSize: 20,
    fontWeight: 500
  },
  textInline: {
    color: "#1a1b1c",
  },
});
