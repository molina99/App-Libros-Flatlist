import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Constants from "expo-constants";

export default class EventList extends Component {
  state = {
    libros: []
  };

  componentDidMount() {
    const libros = require("./libros.json").libros;
    this.setState({ libros });
  }

  render() {
    return (
      <FlatList
        data={this.state.libros}
        style={styles.list}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <Text>{item.id}</Text>
            <Text>{item.title}</Text>
            <Text>{item.autor}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: Constants.statusBarHeight,
    fontSize: 32
  },
  list: {
    flex: 1,
    backgroundColor: "#ffff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16
  },
  title: {
    fontSize: 32
  }
});
