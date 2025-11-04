import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import AddItemScreen from "./screens/AddItemScreen";
import EditItemScreen from "./screens/EditItemScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Lista" }} />
        <Stack.Screen name="AddItem" component={AddItemScreen} options={{ title: "Agregar" }} />
        <Stack.Screen name="EditItem" component={EditItemScreen} options={{ title: "Editar" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
