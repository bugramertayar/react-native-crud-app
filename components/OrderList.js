import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { ListItem } from "react-native-elements";
import { StyleSheet, ScrollView } from "react-native";
import Moment from "moment";

export default function OrderList({ navigation }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://northwind.vercel.app/api/orders")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch(() => console.log("Api call error"));
  }, []);
  return (
    <ScrollView>
      <View style={styles.container}>
        {data.map((item, i) => (
          <ListItem key={i} bottomDivider style={styles.item}>
            <ListItem.Content>
              <View style={styles.itemContent}>
                <ListItem.Title style={styles.title}>
                  {item.shipName}
                </ListItem.Title>
                <ListItem.Subtitle>{item.shipAddress.street}</ListItem.Subtitle>
                <ListItem.Subtitle>
                  {item.shipAddress.country}
                </ListItem.Subtitle>
                <ListItem.Subtitle>{item.shipAddress.city}</ListItem.Subtitle>
                <ListItem.Subtitle>
                  {Moment(item.orderDate).format("MMMM d, YYYY")}
                </ListItem.Subtitle>
              </View>
            </ListItem.Content>
          </ListItem>
        ))}
      </View>
    </ScrollView>
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
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    padding: 10,
  },
});
