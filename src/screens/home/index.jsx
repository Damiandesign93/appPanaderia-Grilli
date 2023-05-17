import { Text, TouchableOpacity, View } from "react-native";

import React from "react";
import { styles } from "./styles";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BIENVENID@S</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Categories")}
        >
          <Text style={styles.textButton}>VER CATEGORIAS</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
