import React, { useState, useEffect } from "react";
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from "react-native";
import { addItem, updateItem } from "../db/database";
import CustomModal from "../components/CustomModal";

export default function AddItemScreen({ route, navigation }) {
  const existingItem = route.params?.item;
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalType, setModalType] = useState("success");

  useEffect(() => {
    if (existingItem) {
      setName(existingItem.name);
      setQuantity(existingItem.quantity.toString());
    }
  }, [existingItem]);

  const showModal = (message, type = "success") => {
    setModalMessage(message);
    setModalType(type);
    setModalVisible(true);
  };

  const handleSave = async () => {
    if (!name.trim()) {
      showModal("El nombre no puede estar vacío", "error");
      return;
    }
    if (!quantity.trim() || isNaN(quantity)) {
      showModal("La cantidad debe ser un número válido", "error");
      return;
    }

    if (existingItem) {
      await updateItem(existingItem.id, name, quantity);
      showModal("Producto actualizado correctamente");
    } else {
      await addItem(name, quantity);
      showModal("Producto agregado con éxito");
    }
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{existingItem ? "Editar producto" : "Agregar producto"}</Text>

        <TextInput
          style={styles.input}
          placeholder="Nombre del producto"
          placeholderTextColor="#8AA1BF"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Cantidad"
          placeholderTextColor="#8AA1BF"
          keyboardType="numeric"
          value={quantity}
          onChangeText={setQuantity}
        />

        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>Guardar</Text>
        </TouchableOpacity>
      </View>

      <CustomModal
        visible={modalVisible}
        message={modalMessage}
        type={modalType}
        onClose={handleCloseModal}
      />
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
    borderRadius: 30,
    padding: 25,
    width: "100%",
  },
  title: {
    fontSize: 26,
    fontWeight: "900",
    color: "#D95F76",
    textAlign: "center",
    marginBottom: 25,
    textTransform: "uppercase",
  },
  input: {
    borderWidth: 2,
    borderColor: "#A3C9F9",
    backgroundColor: "#F6F9FF",
    borderRadius: 15,
    padding: 12,
    marginVertical: 10,
    color: "#4F709C",
    fontWeight: "600",
  },
  button: {
    backgroundColor: "#FFF2B2",
    paddingVertical: 14,
    borderRadius: 15,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#4F709C",
    fontWeight: "bold",
    fontSize: 18,
  },
});