import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#171717"
  },
  title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "700",
    textTransform: "uppercase"
  }
});
export default Header;
