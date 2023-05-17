import { Categories, Home, Product, Products } from "../../screens";

import { Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { theme } from "../../constants";

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor:
            Platform.OS === "android" ? theme.colors.primary : "",
        },
        headerTintColor:
          Platform.OS === "android" ? "black" : theme.colors.primary,
        headerTitleStyle: {
          fontFamily: theme.fontsFamily.header,
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: "TU PANADERÌA" }}
      />
      <Stack.Screen
        name="Categories"
        component={Categories}
        options={{ title: "Categorias" }}
      />
      <Stack.Screen
        name="Products"
        component={Products}
        options={({ route }) => ({ title: route.params.name })}
      />
      <Stack.Screen
        name="Product"
        component={Product}
        options={({ route }) => ({ title: route.params.name })}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
