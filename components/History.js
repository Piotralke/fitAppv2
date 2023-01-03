import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet } from "react-native";

const History1 = ({ style }) => {
  return <Text style={[styles.history, style]}>History</Text>;
};

const styles = StyleSheet.create({
  history: {
    position: "relative",
    fontSize: 20,
    fontStyle: "italic",
    fontFamily: "Epilogue",
    color: "#000",
    textAlign: "left",
    paddingLeft: "10%",
  },
});

export default History1;
