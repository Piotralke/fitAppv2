import * as React from "react";
import { StyleSheet, View, Pressable, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const AddSearch = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.addSearch}>
      <Pressable
        style={styles.rectanglePressable}
        onPress={() =>
          navigation.navigate("DrawerRoot", { screen: "BottomTabsRoot" })
        }
      />
      <Pressable
        style={styles.rectanglePressable1}
        onPress={() => navigation.navigate("AddMakeNew")}
      />
      <Pressable
        style={styles.rectanglePressable2}
        onPress={() => navigation.navigate("AddYours1")}
      />
      <Text style={styles.history}>History</Text>
      <Text style={styles.yours}>Yours</Text>
      <Image
        style={styles.iconAdd}
        resizeMode="cover"
        source={require("../assets/-icon-search.png")}
      />
      <View style={styles.rectangleView} />
      <View style={styles.rectangleView1} />
      <Text style={styles.eggs}>Eggs</Text>
      <Text style={styles.c100kcalP6gF132gCr604}>
        C:100kcal P:6g F:13.2g Cr:60.4g
      </Text>
      <Pressable
        style={styles.iconAddCircle}
        onPress={() => navigation.navigate("MealProperties")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/-icon-add-circle.png")}
        />
      </Pressable>
      <Pressable
        style={styles.iconChevronDown}
        onPress={() => navigation.navigate("MainView")}
      >
        <Image
          style={styles.icon1}
          resizeMode="cover"
          source={require("../assets/-icon-chevron-down22.png")}
        />
      </Pressable>
      <Text style={styles.eggs1}>Eggs</Text>
      <Pressable
        style={styles.rectanglePressable3}
        onPress={() => navigation.navigate("Scan")}
      />
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector9.png")}
      />
      <View style={styles.rectangleView2} />
      <Text style={styles.youreAddingMealTo2ndBre}>
        You’re adding meal to: 2nd Breakfast
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rectanglePressable: {
    position: "absolute",
    top: 9,
    left: 97,
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
    width: 150,
    height: 85,
  },
  rectanglePressable1: {
    position: "absolute",
    top: 22,
    left: 0,
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
    width: 97,
    height: 71,
  },
  rectanglePressable2: {
    position: "absolute",
    top: 23,
    left: 247,
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
    width: 143,
    height: 71,
  },
  history: {
    position: "absolute",
    top: 56,
    left: 131,
    fontSize: 24,
    fontStyle: "italic",
    fontFamily: "Epilogue",
    color: "#000",
    textAlign: "left",
  },
  yours: {
    position: "absolute",
    top: 59,
    left: 284,
    fontSize: 24,
    fontStyle: "italic",
    fontFamily: "Epilogue",
    color: "#000",
    textAlign: "left",
  },
  iconAdd: {
    position: "absolute",
    height: "2.61%",
    width: "5.64%",
    top: "6.99%",
    right: "84.1%",
    bottom: "90.4%",
    left: "10.26%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  rectangleView: {
    position: "absolute",
    top: 55,
    left: 390,
    backgroundColor: "#91c789",
    borderStyle: "solid",
    borderColor: "#fff",
    borderTopWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    width: 390,
    height: 55,
    transform: [
      {
        rotate: "-180deg",
      },
    ],
  },
  rectangleView1: {
    position: "absolute",
    top: 129,
    left: 18,
    borderRadius: 54,
    backgroundColor: "#91c789",
    width: 354,
    height: 56,
  },
  eggs: {
    position: "absolute",
    top: 132,
    left: 40,
    fontSize: 24,
    fontStyle: "italic",
    fontFamily: "Epilogue",
    color: "#000",
    textAlign: "left",
  },
  c100kcalP6gF132gCr604: {
    position: "absolute",
    top: 157,
    left: 40,
    fontSize: 15,
    fontStyle: "italic",
    fontFamily: "Epilogue",
    color: "#000",
    textAlign: "left",
  },
  icon: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  iconAddCircle: {
    position: "absolute",
    left: "81.03%",
    top: "16.35%",
    right: "9.47%",
    bottom: "79.15%",
    width: "9.51%",
    height: "4.5%",
  },
  icon1: {
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
  eggs1: {
    position: "absolute",
    top: 22,
    left: 62,
    fontSize: 20,
    fontStyle: "italic",
    fontFamily: "Epilogue",
    color: "#fff",
    textAlign: "left",
    width: 74,
    height: 21,
  },
  rectanglePressable3: {
    position: "absolute",
    top: 6,
    left: 333,
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
  vectorIcon: {
    position: "absolute",
    height: "2.37%",
    width: "5.13%",
    top: "1.9%",
    right: "6.92%",
    bottom: "95.73%",
    left: "87.95%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  rectangleView2: {
    position: "absolute",
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "#91c789",
    borderStyle: "solid",
    borderColor: "#fff",
    borderTopWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    height: 55,
  },
  youreAddingMealTo2ndBre: {
    position: "absolute",
    top: 806,
    left: 17,
    fontSize: 20,
    fontStyle: "italic",
    fontFamily: "Epilogue",
    color: "#000",
    textAlign: "left",
  },
  addSearch: {
    position: "relative",
    backgroundColor: "#967474",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default AddSearch;
