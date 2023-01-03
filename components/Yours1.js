import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet } from "react-native";

const Yours1 = ({ style }) => {
  return <Text style={[styles.yours, style]}>Yours</Text>;
};

const styles = StyleSheet.create({
  yours: {
    position: "relative",
    fontSize: 20,
    fontStyle: "italic",
    fontFamily: "Epilogue",
    color: "#fff",
    textAlign: "left",
    paddingLeft: "10%",
  },
});

export default Yours1;
