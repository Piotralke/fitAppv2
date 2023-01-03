import * as React from "react";
import { Image, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Scan = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.scan}>
      <Image
        style={styles.image1Icon}
        resizeMode="cover"
        source={require("../assets/image-1.png")}
      />
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      <View style={styles.rectangleView} />
      <Pressable
        style={styles.iconChevronDown}
        onPress={() =>
          navigation.navigate("DrawerRoot", { screen: "BottomTabsRoot" })
        }
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/-icon-chevron-down.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  image1Icon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 414,
    height: 896,
  },
  vectorIcon: {
    position: "absolute",
    height: "20.14%",
    width: "43.59%",
    top: "39.93%",
    right: "28.21%",
    bottom: "39.93%",
    left: "28.21%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  rectangleView: {
    position: "absolute",
    top: 16,
    left: 20,
    borderRadius: 54,
    backgroundColor: "#967474",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 40,
    height: 41,
  },
  icon: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  iconChevronDown: {
    position: "relative",
    left: "8.21%",
    top: "10%",
    width: "3.1%",
    height: "2.48%",
  },
  scan: {
    position: "relative",
    backgroundColor: "#967474",
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default Scan;
