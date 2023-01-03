import * as React from "react";
import {
  Pressable,
  StyleProp,
  ViewStyle,
  Text,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Settings = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.settings1, style]}
      onPress={() => navigation.navigate("Settings")}
    >
      <Text style={styles.settings}>Settings</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  settings: {
    fontSize: 20,
    fontStyle: "italic",
    fontFamily: "Epilogue",
    color: "#000",
    textAlign: "left",
  },
  settings1: {
    position: "relative",
  },
});

export default Settings;
