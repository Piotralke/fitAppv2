import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const MealProperties = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mealProperties}>
      <View style={styles.rectangleView} />
      <Text style={styles.eggs}>Eggs</Text>
      <Text style={styles.nutritionFactsPer100gCalo}>
        <Text style={styles.nutritionFactsPer}>Nutrition facts per 100g:</Text>
        <Text style={styles.calories100kcal}>Calories: 100kcal</Text>
        <Text style={styles.protein6g}>Protein: 6g</Text>
        <Text style={styles.fat132g}>Fat: 13.2g</Text>
        <Text style={styles.carbo604g}>Carbo:60.4g</Text>
      </Text>
      
      <View style={styles.rectangleView1} />
      <Text style={styles.youreAddingMealTo2ndBre}>
        You’re adding meal to: 2nd Breakfast
      </Text>
      <View style={styles.rectangleView2} />
      <Text style={styles.eatenGrams}>Eaten grams:</Text>
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("MainView")}
      />
      <Text style={styles.add}>Add</Text>
      <Pressable
        style={styles.rectanglePressable1}
        onPress={() => navigation.navigate("MainView")}
      />
      <Text style={styles.add1}>Add</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleView: {
    position: "absolute",
    top: 60,
    left: 18,
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
    width: 354,
    height: 241,
  },
  eggs: {
    position: "absolute",
    top: 63,
    left: 159,
    fontSize: 24,
    fontStyle: "italic",
    fontFamily: "Epilogue",
    color: "#000",
    textAlign: "left",
  },
  nutritionFactsPer: {
    marginBlockStart: 0,
    marginBlockEnd: 18,
  },
  calories100kcal: {
    marginBlockStart: 0,
    marginBlockEnd: 18,
  },
  protein6g: {
    marginBlockStart: 0,
    marginBlockEnd: 18,
  },
  fat132g: {
    marginBlockStart: 0,
    marginBlockEnd: 18,
  },
  carbo604g: {
    margin: 0,
  },
  nutritionFactsPer100gCalo: {
    position: "absolute",
    top: 92,
    left: 40,
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
    left: "7.18%",
    top: "2.25%",
    right: "89.72%",
    bottom: "95.27%",
    width: "3.1%",
    height: "2.48%",
  },
  rectangleView1: {
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
  rectangleView2: {
    position: "absolute",
    top: 342,
    left: 40,
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
  eatenGrams: {
    position: "absolute",
    top: 328,
    left: 51,
    fontSize: 16,
    fontStyle: "italic",
    fontFamily: "Epilogue",
    color: "#fff",
    textAlign: "left",
  },
  rectanglePressable: {
    position: "absolute",
    top: 435,
    left: 63,
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
  add: {
    position: "absolute",
    top: 452,
    left: 164,
    fontSize: 20,
    fontFamily: "Epilogue",
    color: "#fff",
    textAlign: "left",
  },
  rectanglePressable1: {
    position: "absolute",
    top: 435,
    left: 63,
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
  add1: {
    position: "absolute",
    top: 452,
    left: 164,
    fontSize: 20,
    fontFamily: "Epilogue",
    color: "#000",
    textAlign: "left",
  },
  mealProperties: {
    position: "relative",
    backgroundColor: "#967474",
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default MealProperties;
