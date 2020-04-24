import React, { Component } from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Go to Components Demo"
        onPress={() => navigation.navigate("Components")}
      ></Button>
      <Button
        onPress={() => navigation.navigate("Lists")}
        title="Go to List Demo"
      ></Button>
      <Button
        onPress={() => navigation.navigate("Images")}
        title="Go to Image screen Demo"
      ></Button>
      <Button
        onPress={() => navigation.navigate("Counters")}
        title="Go to Counter screen Demo"
      ></Button>
      <Button
        onPress={() => navigation.navigate("Color")}
        title="Go to Colors screen Demo"
      ></Button>
      <Button
        onPress={() => navigation.navigate("Square")}
        title="Go to Square screen Demo"
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
