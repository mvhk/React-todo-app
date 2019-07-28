import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
const InputBar = props => {
  return (
    <View style={styles.InputContainer}>
      <TextInput style={styles.Input} />
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addText}>ADD</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  InputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    shadowOffset: { width: 0, height: 3 },
    shadowColor: "#171717",
    shadowOpacity: 0.1
  },
  Input: { fontSize: 18, flex: 1, height: 30, backgroundColor: "#f3f3f3" },
  addButton: {
    height: 30,
    width: 100,
    backgroundColor: "#FFCE00",
    alignItems: "center",
    justifyContent: "center"
  },
  addText: {
    fontSize: 18,
    color: "#000",
    fontWeight: "700"
  }
});
export default InputBar;
