import * as React from "react";
import { Pressable, StyleProp, ViewStyle, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const RectangleComponent = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.rectanglePressable, style]}
      onPress={() => navigation.navigate("Login")}
    />
  );
};

const styles = StyleSheet.create({
  rectanglePressable: {
    position: "relative",
    borderRadius: 54,
    backgroundColor: "#000",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 139,
    height: 44,
  },
});

export default RectangleComponent;
