import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet } from "react-native";

const HelloUser = ({ style }) => {
  return <Text style={[styles.helloUser, style]}>Hello, user</Text>;
};

const styles = StyleSheet.create({
  helloUser: {
    position: "relative",
    fontSize: 24,
    fontStyle: "italic",
    fontFamily: "Epilogue",
    color: "#000",
    textAlign: "left",
  },
});

export default HelloUser;
