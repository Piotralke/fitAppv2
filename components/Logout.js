import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Logout = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.logout1, style]}
      onPress={() => navigation.navigate("DrawerRoot", { screen: "Login" })}
    >
      <Text style={styles.logout}>Logout</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  logout: {
    fontSize: 20,
    fontStyle: "italic",
    fontFamily: "Epilogue",
    color: "#ff0000",
    textAlign: "left",
  },
  logout1: {
    position: "relative",
  },
});

export default Logout;
