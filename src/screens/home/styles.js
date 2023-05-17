import { StyleSheet } from "react-native";
import { theme } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
  },
  title: {
    fontFamily: theme.fontsFamily.title,
    fontSize: 30,
    marginVertical: 20,
  },
  buttonsContainer: {
    marginVertical: 30,
  },
  button: {
    backgroundColor: "#ab8360",
    marginHorizontal: 15,
    padding: 15,
    borderRadius: 5,
    height: 70,
  },
  textButton: {
    fontSize: 25,
    fontFamily: theme.fontsFamily.buttons,
  },
});
