import * as React from "react";
import { StyleSheet, View, Pressable, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const AddMakeNew = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.addMakeNew}>
      <Pressable
        style={styles.rectanglePressable}
        onPress={() =>
          navigation.navigate("DrawerRoot", { screen: "BottomTabsRoot" })
        }
      />
      <View style={styles.rectangleView} />
      <Pressable
        style={styles.rectanglePressable1}
        onPress={() => navigation.navigate("AddYours1")}
      />
      <View style={styles.rectangleView1} />
      <Image
        style={styles.iconSearch}
        resizeMode="cover"
        source={require("../assets/-icon-search.png")}
      />
      <Text style={styles.history}>History</Text>
      <Text style={styles.yours}>Yours</Text>
      <Pressable
        style={styles.iconChevronDown}
        onPress={() => navigation.navigate("MainView")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/-icon-chevron-down22.png")}
        />
      </Pressable>
      <Text style={styles.search1}>
        <Text style={styles.search}>Search</Text>
      </Text>
      <Pressable
        style={styles.rectanglePressable2}
        onPress={() => navigation.navigate("Scan")}
      />
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector9.png")}
      />
      <View style={styles.frameView}>
        <View style={styles.rectangleView2} />
        <Text style={styles.name}>Name</Text>
        <View style={styles.rectangleView3} />
        <Text style={styles.calories}>Calories</Text>
        <View style={styles.rectangleView4} />
        <Text style={styles.protein}>Protein</Text>
        <View style={styles.rectangleView5} />
        <Text style={styles.fat}>Fat</Text>
        <View style={styles.rectangleView6} />
        <Text style={styles.carbo}>Carbo</Text>
        <View style={styles.rectangleView7} />
        <Text style={styles.barcode1}>
          <Text style={styles.barcode}>Barcode*</Text>
        </Text>
        <Text style={styles.notRequired}>*Not required</Text>
        <Text style={styles.nutritionFactsPer100g}>
          Nutrition facts per 100g
        </Text>
        <Pressable
          style={styles.rectanglePressable3}
          onPress={() =>
            navigation.navigate("DrawerRoot", { screen: "BottomTabsRoot" })
          }
        />
        <Text style={styles.save1}>
          <Text style={styles.save}>Save</Text>
        </Text>
      </View>
      <Pressable
        style={styles.rectanglePressable4}
        onPress={() => navigation.navigate("Scan")}
      />
      <Image
        style={styles.vectorIcon1}
        resizeMode="cover"
        source={require("../assets/vector5.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rectanglePressable: {
    position: "absolute",
    top: 6,
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
  rectangleView: {
    position: "absolute",
    top: 16,
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
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 10,
    width: 97,
    height: 88,
  },
  rectanglePressable1: {
    position: "absolute",
    top: 24,
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
  rectangleView1: {
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
  iconSearch: {
    position: "absolute",
    height: "2.61%",
    width: "5.64%",
    top: "6.99%",
    right: "84.87%",
    bottom: "90.4%",
    left: "9.49%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  history: {
    position: "absolute",
    top: 60,
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
    left: 286,
    fontSize: 24,
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
  iconChevronDown: {
    position: "absolute",
    left: "4.98%",
    top: "1.85%",
    right: "91.92%",
    bottom: "95.67%",
    width: "3.1%",
    height: "2.48%",
  },
  search: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  search1: {
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
  rectanglePressable2: {
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
    top: 24,
    left: 10,
    borderRadius: 10,
    backgroundColor: "#967474",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#91c789",
    borderWidth: 4,
    width: 318,
    height: 40,
  },
  name: {
    position: "absolute",
    top: 10,
    left: 21,
    fontSize: 16,
    fontStyle: "italic",
    fontFamily: "Epilogue",
    color: "#fff",
    textAlign: "left",
  },
  rectangleView3: {
    position: "absolute",
    top: 142,
    left: 10,
    borderRadius: 10,
    backgroundColor: "#967474",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#91c789",
    borderWidth: 4,
    width: 318,
    height: 40,
  },
  calories: {
    position: "absolute",
    top: 128,
    left: 21,
    fontSize: 16,
    fontStyle: "italic",
    fontFamily: "Epilogue",
    color: "#fff",
    textAlign: "left",
  },
  rectangleView4: {
    position: "absolute",
    top: 220,
    left: 10,
    borderRadius: 10,
    backgroundColor: "#967474",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#91c789",
    borderWidth: 4,
    width: 318,
    height: 40,
  },
  protein: {
    position: "absolute",
    top: 206,
    left: 21,
    fontSize: 16,
    fontStyle: "italic",
    fontFamily: "Epilogue",
    color: "#fff",
    textAlign: "left",
  },
  rectangleView5: {
    position: "absolute",
    top: 298,
    left: 10,
    borderRadius: 10,
    backgroundColor: "#967474",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#91c789",
    borderWidth: 4,
    width: 318,
    height: 40,
  },
  fat: {
    position: "absolute",
    top: 284,
    left: 21,
    fontSize: 16,
    fontStyle: "italic",
    fontFamily: "Epilogue",
    color: "#fff",
    textAlign: "left",
  },
  rectangleView6: {
    position: "absolute",
    top: 376,
    left: 10,
    borderRadius: 10,
    backgroundColor: "#967474",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#91c789",
    borderWidth: 4,
    width: 318,
    height: 40,
  },
  carbo: {
    position: "absolute",
    top: 362,
    left: 21,
    fontSize: 16,
    fontStyle: "italic",
    fontFamily: "Epilogue",
    color: "#fff",
    textAlign: "left",
  },
  rectangleView7: {
    position: "absolute",
    top: 454,
    left: 10,
    borderRadius: 10,
    backgroundColor: "#967474",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#91c789",
    borderWidth: 4,
    width: 285,
    height: 40,
  },
  barcode: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  barcode1: {
    position: "absolute",
    top: 440,
    left: 21,
    fontSize: 16,
    fontStyle: "italic",
    fontFamily: "Epilogue",
    color: "#fff",
    textAlign: "left",
  },
  notRequired: {
    position: "absolute",
    top: 683,
    left: 21,
    fontSize: 16,
    fontStyle: "italic",
    fontFamily: "Epilogue",
    color: "#fff",
    textAlign: "left",
  },
  nutritionFactsPer100g: {
    position: "absolute",
    top: 88,
    left: 21,
    fontSize: 16,
    fontStyle: "italic",
    fontFamily: "Epilogue",
    color: "#fff",
    textAlign: "left",
  },
  rectanglePressable3: {
    position: "absolute",
    top: 532,
    left: 45,
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
  save: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  save1: {
    position: "absolute",
    top: 549,
    left: 146,
    fontSize: 20,
    fontFamily: "Epilogue",
    color: "#000",
    textAlign: "left",
  },
  frameView: {
    position: "absolute",
    top: 114,
    left: 21,
    width: 352,
    height: 906,
    overflow: "hidden",
  },
  rectanglePressable4: {
    position: "absolute",
    top: 572,
    left: 321,
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
    width: 30,
    height: 31,
  },
  vectorIcon1: {
    position: "absolute",
    height: "1.78%",
    width: "3.85%",
    top: "68.72%",
    right: "11.79%",
    bottom: "29.5%",
    left: "84.36%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  addMakeNew: {
    position: "relative",
    backgroundColor: "#967474",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default AddMakeNew;
