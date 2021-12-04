import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Products from "./src/pages/Products/Products";
import Details from "./src/pages/Detail/Detail";
import Meal from "./src/pages/Meal/Meal";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={"ProductsPage"}
          component={Products}
          options={{
            title: "Categories",
            headerStyle: { backgroundColor: "#aade9e"},
            headerTitleStyle: { color: "#20311C" },
          }}
        />
        <Stack.Screen
          name={"MealPage"}
          component={Meal}
          options={{
            title: "Meals",
            headerStyle: { backgroundColor: "#aade9e" },
            headerTitleStyle: { color: "#20311C" },
          }}
        />
        <Stack.Screen
          name={"DetailsPage"}
          component={Details}
          options={{
            title: "Meal Detail",
            headerStyle: { backgroundColor: "#aade9e" },
            headerTitleStyle: { color: "#20311C" },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
