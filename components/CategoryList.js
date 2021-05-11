import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { ListItem } from "react-native-elements";
import { Text, StyleSheet } from "react-native";

export default function CategoryList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://northwind.vercel.app/api/categories")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  return (
    <View style={styles.container}>
      {data.map((item, i) => (
        <ListItem key={i} bottomDivider style={styles.item}>
          <ListItem.Content>
            <View style={styles.itemContent}>
              <ListItem.Title style={styles.title}>{item.name}</ListItem.Title>
            </View>
            <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    marginTop: 10,
  },
  itemContent: {
    width: "-webkit-fill-available",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    padding: 10
  },
});
