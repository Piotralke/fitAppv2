import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet } from "react-native";

const Add1 = ({ style }) => {
  return <Text style={[styles.add, style]}>Add</Text>;
};

const styles = StyleSheet.create({
  add: {
    position: "relative",
    fontSize: 20,
    fontStyle: "italic",
    fontFamily: "Epilogue",
    color: "#fff",
    textAlign: "left",
    paddingLeft: "10%",
  },
});

export default Add1;
