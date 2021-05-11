import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { ListItem, Icon } from "react-native-elements";
import { StyleSheet } from "react-native";

export default function ProductList({ navigation }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://northwind.vercel.app/api/products")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  const deleteProduct = (id) => {
    fetch('https://northwind.vercel.app/api/products/' + id, { method: 'DELETE' })
    .then(() => console.log(id));
  };
  return (
    <View style={styles.container}>
      {data.map((item, i) => (
        <ListItem onPress={() => navigation.navigate('ProductDetail', {productId: item.id})} key={i} bottomDivider style={styles.item}>
          <ListItem.Content>
              <View style={styles.iconView}>
              <Icon name="delete" onPress={() => deleteProduct(item.id)} />
              </View>
            <View style={styles.itemContent}>
              <ListItem.Title style={styles.title}>{item.name}</ListItem.Title>
              <ListItem.Subtitle>{item.quantityPerUnit}</ListItem.Subtitle>
              <ListItem.Subtitle>{item.unitPrice}</ListItem.Subtitle>
            </View>
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
  iconView: {
    width: "-webkit-fill-available",
    flexDirection: 'row-reverse',
    justifyContent: "flex-start"
  },
  container: {
    padding: 10
  },
  itemContent: {
    width: "-webkit-fill-available",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
