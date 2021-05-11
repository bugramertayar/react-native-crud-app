import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { ListItem, Icon } from "react-native-elements";
import { StyleSheet, Text } from "react-native";

export default function CategoryList({ navigation }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getData();
    });
    return unsubscribe;
  }, [navigation]);

  const getData = () => {
    fetch("https://northwind.vercel.app/api/categories")
      .then((response) => response.json())
      .then((json) => setData(json));
  };

  const deleteCategory = (id) => {
    let bodyContent = {
      id: id,
    };
    let requestOptions = {
      method: "DELETE",
      body: JSON.stringify(bodyContent),
    };
    fetch("https://northwind.vercel.app/api/categories/" + id, requestOptions)
      .then((res) => res.json())
      .then((data) => getData());
  };

  return (
    <View style={styles.container}>
      <Text
        onPress={() => navigation.navigate("CategoryAdd")}
        style={styles.addCategory}
      >
        Add Category<Icon name="add"></Icon>
      </Text>
      {data.map((item, i) => (
        <ListItem key={i} bottomDivider style={styles.item}>
          <ListItem.Content>
            <View style={styles.iconView}>
              <Icon name="delete" onPress={() => deleteCategory(item.id)} />
            </View>
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
  iconView: {
    width: "100%",
    flexDirection: 'row-reverse',
    justifyContent: "flex-start"
  },
  itemContent: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    padding: 10,
    flex: 1
  },
  addCategory: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
