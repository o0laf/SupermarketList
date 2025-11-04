import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { initDB, getItems, deleteItem } from "../db/database";
import GroceryItem from "../components/GroceryItem";
import CustomModal from "../components/CustomModal";

export default function HomeScreen({ navigation }) {
  const [items, setItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [itemToDelete, setItemToDelete] = useState(null);

  const loadData = async () => {
    await initDB();
    const data = await getItems();
    setItems(data);
  };

  useEffect(() => {
    const focus = navigation.addListener("focus", loadData);
    return focus;
  }, [navigation]);

  const handleDelete = (id) => {
    setItemToDelete(id);
    setModalMessage("¿Seguro que querés eliminar este producto?");
    setModalVisible(true);
  };

  const confirmDelete = async () => {
    if (itemToDelete !== null) {
      await deleteItem(itemToDelete);
      setModalVisible(false);
      setItemToDelete(null);
      loadData();
    }
  };

  const closeModal = () => {
    setModalVisible(false);
    setItemToDelete(null);
  };

  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
      <View style={styles.card}>
        <Text style={styles.title}>Lista de Supermercado</Text>

        <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate("AddItem")}>
          <Text style={styles.addButtonText}>+ Agregar producto</Text>
        </TouchableOpacity>

        {items.length === 0 ? (
          <Text style={styles.emptyText}>No hay productos todavía</Text>
        ) : (
          items.map((item) => (
            <GroceryItem
              key={item.id}
              item={item}
              onEdit={() => navigation.navigate("EditItem", { item })}
              onDelete={() => handleDelete(item.id)}
            />
          ))
        )}
      </View>

      <CustomModal
        visible={modalVisible}
        message={modalMessage}
        onClose={closeModal}
        onConfirm={confirmDelete}
        type="error"
        confirmMode={itemToDelete !== null}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: { flex: 1, backgroundColor: "#FFF7FB" },
  scrollContent: { 
    flexGrow: 1, 
    alignItems: "center", 
    justifyContent: "center", 
    paddingVertical: 30 
  },
  card: { backgroundColor: "#FFFFFF", 
    borderWidth: 3, 
    borderColor: "#A3C9F9", 
    borderRadius: 30, 
    padding: 25, 
    width: "90%"
  },
  title: { 
    fontSize: 37, 
    fontWeight: "900", 
    textAlign: "center", 
    color: "#D95F76", 
    marginBottom: 25, 
    textTransform: "uppercase", 
    letterSpacing: 1, 
    textShadowColor: "#FFF2B2", 
    textShadowOffset: { width: 3, height: 2 },
    textShadowRadius: 1,
  },
  addButton: { 
    backgroundColor: "#FFF2B2", 
    padding: 14, borderRadius: 15, 
    alignItems: "center", 
    marginBottom: 25 },
  addButtonText: { 
    color: "#4F709C", 
    fontWeight: "700", 
    fontSize: 18 },
  emptyText: { 
    textAlign: "center", 
    color: "#4F709C", 
    fontSize: 16, 
    fontWeight: "bold", 
    marginTop: 10 },
});