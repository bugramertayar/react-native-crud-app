import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";

export default function CategoryAdd({ navigation }) {
  const [categoryName, setCategoryName] = useState("");
  const [categoryDetail, setCategoryDetail] = useState("");

  const postData = () => {
    let requestOptions = {
      method: "POST",
      body: JSON.stringify({ name: categoryName, description: categoryDetail }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    fetch("https://northwind.vercel.app/api/categories", requestOptions)
      .then((response) => response.json())
      .then(() => navigation.navigate("CategoryList"));
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="Category Name"
        onChangeText={(value) => setCategoryName(value)}
      />
      <Input
        placeholder="Category Detail"
        onChangeText={(value) => setCategoryDetail(value)}
      />
      <Button title="Submit" onPress={() => postData()} />
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
    fontWeight: "500",
  },
  textInline: {
    color: "#1a1b1c",
  },
});
