import { FlatList, Text, View } from "react-native";

import { CATEGORIES } from "../../data/categories";
import { GridItem } from "../../components/index";
import React from "react";
import { styles } from "./styles";

const Categories = ({ navigation }) => {
  const handleSelectedCategory = (item) => {
    navigation.navigate("Products", {
      categoryID: item.id,
      name: item.name,
    });
  };

  const renderGridItem = ({ item }) => (
    <GridItem item={item} onSelected={handleSelectedCategory} />
  );
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¿Que te gustaria Probar?</Text>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderGridItem}
        numColumns={2}
      />
    </View>
  );
};

export default Categories;
