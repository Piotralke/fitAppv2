import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

const MealProperties = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mealProperties}>
      <View style={styles.rectangleView}>
      <Text style={styles.facts}>
        <Text style={styles.title}>Eggs{'\n'}</Text>
        <Text >Nutrition facts per 100g:{'\n'}</Text>
        <Text >Calories: 100kcal{'\n'}</Text>
        <Text >Protein: 6g{'\n'}</Text>
        <Text >Fat: 13.2g{'\n'}</Text>
        <Text >Carbo: 60.4g{'\n'}</Text>
      </Text>
      </View>
      <Text style={styles.eatenGrams}>Eaten grams</Text>
      <TextInput
          style={styles.rectangleTextInput}
          placeholder="Placeholder text"
          keyboardType="number-pad"
        />
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("MainView")}
      >
      <Text style={styles.add}>Add</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleView: {
    position: "relative",
    top: 0,
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
  title: {
    fontWeight: 'bold',
  },
  facts: {
    position: "relative",
    fontSize: 24,
    fontStyle: "italic",
    fontFamily: "Epilogue",
    color: "#000",
    textAlign: "center",
  },
  rectangleTextInput: {
    position: "relative",
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
    marginBottom: 10,
    textAlign: "center",
  },
  eatenGrams: {
    position: "relative",
    fontSize: 16,
    fontStyle: "italic",
    fontFamily: "Epilogue",
    color: "#fff",
    marginTop: 10,
  },
  rectanglePressable: {
    position: "relative",
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
    marginVertical: 10,
  },
  add: {
    position: "relative",
    top :12,
    textAlign: "center",
    fontSize: 20,
    fontFamily: "Epilogue",
    color: "#000",
  },
  mealProperties: {
    position: "relative",
    flexDirection: 'column',
    justifyContent: 'center',
    marginHorizontal: "auto",
    alignItems: 'center',
    width: "100%",
    backgroundColor: "#967474",
    flex: 1,
    overflow: "hidden",
  },
});

export default MealProperties;
