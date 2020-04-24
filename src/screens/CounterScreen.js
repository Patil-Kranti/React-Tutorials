import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Button
        onPress={() => {
          // Do not Do this
          //   counter++;
          setCounter(counter + 1);
        }}
        title="Increase"
      ></Button>
      <Button
        onPress={() => {
          //   counter--;
          setCounter(counter - 1);
        }}
        title="Decrease"
      ></Button>
      <Text>Current Count: {counter}</Text>
    </View>
  );
};
const styles = StyleSheet.create();
export default CounterScreen;
