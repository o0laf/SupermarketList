import React from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function CustomModal({ 
  visible, 
  message, 
  onClose, 
  onConfirm, 
  type = "success", 
  confirmMode = false 
}) {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.card}>
          <Ionicons
            name={type === "error" ? "alert-circle-outline" : "checkmark-circle-outline"}
            size={60}
            color={type === "error" ? "#D95F76" : "#4F709C"}
            style={{ marginBottom: 12 }}
          />
          <Text style={styles.message}>{message}</Text>

          {confirmMode ? (
            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.buttonCancel} onPress={onClose}>
                <Text style={styles.buttonText}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={onConfirm}>
                <Text style={styles.buttonText}>Eliminar</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity style={styles.button} onPress={onClose}>
              <Text style={styles.buttonText}>OK</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  card: {
    backgroundColor: "#FFF7FB",
    borderWidth: 3,
    borderColor: "#A3C9F9",
    borderRadius: 25,
    padding: 30,
    width: "80%",
    alignItems: "center",
  },
  message: {
    color: "#4F709C",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 15,
    fontWeight: "600",
  },
  button: {
    backgroundColor: "#FFF2B2",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 15,
    marginHorizontal: 5,
  },
  buttonCancel: {
    backgroundColor: "#D95F76",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 15,
    marginHorizontal: 5,
  },
  buttonText: {
    color: "#4F709C",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonRow: {
    flexDirection: "row",
  },
});