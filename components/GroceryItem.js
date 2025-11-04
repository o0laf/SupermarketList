import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function GroceryItem({ item, onEdit, onDelete }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.quantity}>Cantidad: {item.quantity}</Text>
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity onPress={onEdit}>
          <Ionicons name="create-outline" size={24} color="#4F709C" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onDelete}>
          <Ionicons name="trash-outline" size={24} color="#D95F76" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F6F9FF",
    borderWidth: 3,
    borderColor: "#A3C9F9",
    borderRadius: 18,
    padding: 14,
    marginBottom: 14,
  },
  name: {
    fontWeight: "800",
    fontSize: 18,
    color: "#4F709C",
  },
  quantity: {
    color: "#D95F76",
    fontSize: 14,
  },
  buttons: {
    flexDirection: "row",
    gap: 10,
  },
});