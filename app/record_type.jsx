import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, TextInput, Button, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker"; // Updated import for Picker
import { Link, Stack } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function Record_Type() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [formData, setFormData] = useState({
    0: { field_type: "text", field_name: "Name", value: "" },
    1: { field_type: "drop_down", field_name: "Age", options: [1, 2, 4], value: "" },
  });

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleInputChange = (key, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: {
        ...prevFormData[key],
        value: value,
      },
    }));
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: "Record Types",
          headerStyle: {
            backgroundColor: "#9DD6EB",
          },
          headerTintColor: "#fff",
        }}
      />
      <ThemedView style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 10,
            width: "100%",
          }}
        >
          <Text style={{ fontWeight: 800, fontSize: 20 }}>Record Types</Text>
          <TouchableOpacity style={styles.addButton} onPress={toggleModal}>
            <Text style={styles.addButtonText}>Add New</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <Text style={styles.headerText}>Field Name</Text>
            <Text style={styles.headerText}>Value</Text>
          </View>

          {Object.keys(formData).map((key) => (
            <View key={key} style={styles.tableRow}>
              <Text style={styles.rowText}>{formData[key].field_name}</Text>
              <Text style={styles.rowText}>{formData[key].value}</Text>
            </View>
          ))}
        </View>

        <Modal visible={isModalVisible} animationType="slide" transparent={true}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Add Record</Text>

              {Object.keys(formData).map((key) => {
                const field = formData[key];
                return (
                  <View key={key} style={styles.formGroup}>
                    <Text style={styles.label}>{field.field_name}</Text>
                    {field.field_type === "text" ? (
                      <TextInput style={styles.input} value={field.value} onChangeText={(value) => handleInputChange(key, value)} placeholder={`Enter ${field.field_name}`} />
                    ) : field.field_type === "drop_down" ? (
                      <Picker selectedValue={field.value} style={styles.picker} onValueChange={(value) => handleInputChange(key, value)}>
                        {field.options.map((option, index) => (
                          <Picker.Item key={index} label={String(option)} value={option} />
                        ))}
                      </Picker>
                    ) : null}
                  </View>
                );
              })}

              <Button title="Close" onPress={toggleModal} />
            </View>
          </View>
        </Modal>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: "100%",
    // backgroundColor: "#e8f7fc",
  },
  table: {
    width: "100%",
    marginTop: 20,
  },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  headerText: {
    fontWeight: "bold",
  },
  rowText: {
    fontSize: 16,
  },
  addButton: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
    // marginTop: 20,
    alignItems: "center",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: "80%",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  formGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  picker: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
