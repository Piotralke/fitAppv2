import * as React from "react";
import { Image, StyleSheet, Pressable, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Settings1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.settings}>
      <Pressable
        style={styles.iconChevronDown}
        onPress={() => navigation.navigate("Menu")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/-icon-chevron-down1.png")}
        />
      </Pressable>
      <View style={styles.rectangleView} />
      <View style={styles.frameView} />
      <Text style={styles.changePassword}>Change password</Text>
      <View style={styles.rectangleView1} />
      <View style={styles.frameView1} />
      <Text style={styles.changeNutritionGoal}>Change nutrition goal</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  iconChevronDown: {
    position: "absolute",
    left: "4.98%",
    top: "1.85%",
    right: "91.92%",
    bottom: "95.67%",
    width: "3.1%",
    height: "2.48%",
  },
  rectangleView: {
    position: "absolute",
    top: 83,
    left: 83,
    borderRadius: 54,
    backgroundColor: "#91c789",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 248,
    height: 56,
  },
  frameView: {
    position: "absolute",
    top: 64,
    left: 113,
    width: 20,
    height: 36,
    overflow: "hidden",
  },
  changePassword: {
    position: "absolute",
    top: 100,
    left: 119,
    fontSize: 16,
    fontFamily: "Epilogue",
    color: "#000",
    textAlign: "left",
    width: '100%',
    height: '100%',
  },
  rectangleView1: {
    position: "absolute",
    top: 176,
    left: 83,
    borderRadius: 54,
    backgroundColor: "#91c789",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 248,
    height: 56,
  },
  frameView1: {
    position: "absolute",
    top: 146,
    left: 120,
    width: 20,
    height: 36,
    overflow: "hidden",
  },
  changeNutritionGoal: {
    position: "absolute",
    top: 193,
    left: 101,
    fontSize: 16,
    fontFamily: "Epilogue",
    color: "#000",
    textAlign: "left",
    width: '100%',
    height: '100%',
  },
  settings: {
    position: "relative",
    backgroundColor: "#967474",
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default Settings1;
