import { StyleSheet } from "react-native";
import { theme } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  title: {
    fontFamily: theme.fontsFamily.title,
    fontSize: 25,
    textAlign: "center",
    marginVertical: 40,
  },
});
