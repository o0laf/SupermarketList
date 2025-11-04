import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { updateItem } from "../db/database";

export default function EditItemScreen({ route, navigation }) {
  const { item } = route.params;
  const [name, setName] = useState(item.name);
  const [quantity, setQuantity] = useState(String(item.quantity));

  const handleSave = async () => {
    if (!name.trim() || !quantity.trim()) {
      Alert.alert("Error", "Completá todos los campos.");
      return;
    }
    await updateItem(item.id, name, quantity);
    Alert.alert("Producto actualizado.");
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Editar producto</Text>

        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Nombre del producto"
          placeholderTextColor="#8AA1BF"
        />
        <TextInput
          style={styles.input}
          value={quantity}
          onChangeText={setQuantity}
          placeholder="Cantidad"
          keyboardType="numeric"
          placeholderTextColor="#8AA1BF"
        />

        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Guardar cambios</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF7FB",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderWidth: 3,
    borderColor: "#A3C9F9",
    borderRadius: 25,
    padding: 20,
    width: "100%",
  },
  title: {
    fontSize: 26,
    fontWeight: "900",
    color: "#D95F76",
    marginBottom: 20,
    textAlign: "center",
    textTransform: "uppercase",
  },
  input: {
    width: "100%",
    borderWidth: 2,
    borderColor: "#A3C9F9",
    borderRadius: 12,
    padding: 10,
    marginBottom: 12,
    backgroundColor: "#F6F9FF",
    color: "#4F709C",
    fontWeight: "600",
  },
  saveButton: {
    backgroundColor: "#FFF2B2",
    padding: 12,
    borderRadius: 12,
    alignItems: "center",
  },
  saveButtonText: {
    color: "#4F709C",
    fontWeight: "bold",
    fontSize: 18,
  },
});
