import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
export default class HelloWorld extends Component {
  constructor() {
    super();
    this.state = {
      todoInput: "",
      todos: [
        { id: 0, title: "learn react", done: false },
        { id: 1, title: "learn node", done: false }
      ]
    };
  }
  render() {
    const statusbar =
      Platform.OS == "ios" ? <View style={stylesstatusbar} /> : <View />;
    return (
      <View style={styles.container}>
        {statusbar}
        <Header title="TODO" />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    top: 20,
    color: "#FFCE00"
  },
  statusbar: {
    backgroundColor: "#FFCE00",
    height: 20
  }
});
