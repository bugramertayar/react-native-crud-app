import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { ListItem, Icon } from "react-native-elements";
import { StyleSheet } from "react-native";

export default function ProductList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://northwind.vercel.app/api/products")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  const deleteProduct = () => {};
  return (
    <View>
      {data.map((l, i) => (
        <ListItem key={i} bottomDivider>
          <ListItem.Content>
              <View style={styles.iconView}>
              <Icon name="delete" onPress={() => deleteProduct()} />
              </View>
            <View style={styles.itemContent}>
              <ListItem.Title style={styles.title}>{l.name}</ListItem.Title>
              <ListItem.Subtitle>{l.quantityPerUnit}</ListItem.Subtitle>
              <ListItem.Subtitle>{l.unitPrice}</ListItem.Subtitle>
            </View>
          </ListItem.Content>
        </ListItem>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  iconView: {
    width: "-webkit-fill-available",
    flexDirection: 'row-reverse',
    justifyContent: "flex-start"
  },
  itemContent: {
    width: "-webkit-fill-available",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
