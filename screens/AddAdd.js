import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  Pressable,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const AddAdd = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.addAdd}>
      <View style={styles.groupView}>
      <Text style={styles.name}>Name</Text>
        <TextInput
          style={styles.rectangleTextInput}
          placeholder="Placeholder text"
          keyboardType="default"
        />
        <Text style={styles.nutritionFactsPer100g}>
          Nutrition facts per 100g
        </Text>
        <Text style={styles.calories}>Calories</Text>
        <TextInput style={styles.rectangleTextInput1} 
        placeholder="Placeholder text"
        keyboardType="default"
        />
        <Text style={styles.protein}>Protein</Text>
        <TextInput
          style={styles.rectangleTextInput2}
          placeholder="Placeholder text"
          keyboardType="default"
        />
        <Text style={styles.fat}>Fat</Text>
        <TextInput
          style={styles.rectangleTextInput3}
          placeholder="Placeholder text"
          keyboardType="default"
        />
        <Text style={styles.carbo}>Carbo</Text>
        <TextInput
          style={styles.rectangleTextInput4}
          placeholder="Placeholder text"
          keyboardType="default"
        />
        <Text style={styles.barcode}>Barcode*</Text>
        <View style={{flexDirection: 'row'}}>
          <TextInput
          style={styles.rectangleTextInput5}
          placeholder="Placeholder text"
          keyboardType="default"
         />

            <Pressable onPress={() => navigation.navigate("Scan")}>
            <Image
            style={styles.scan}
            resizeMode="cover"
            source={require("../assets/vector4.png")}
            />
            </Pressable>

        </View>
        
        <Pressable style={styles.rectanglePressable1} onPress={() => navigation.navigate("DrawerRoot", { screen: "MainView" })}>
        <Text style={styles.save}>Save</Text>
            </Pressable>
        
        
        <Text style={styles.notRequired}>*Not required</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#91c789",
    width: 414,
    height: 55,
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
    left: "4.01%",
    top: "1.85%",
    right: "90.95%",
    bottom: "94.78%",
    width: "5.03%",
    height: "3.37%",
  },
  rectanglePressable: {
    position: "absolute",
    top: 7,
    left: 354,
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
  search: {
    position: "absolute",
    top: 21,
    left: 49,
  },
  vectorIcon: {
    position: "absolute",
    height: "2.37%",
    width: "5.13%",
    top: "1.9%",
    right: "7.19%",
    bottom: "95.73%",
    left: "87.68%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  rectangleView1: {
    position: "absolute",
    right: 0,
    bottom: 786,
    left: 0,
    backgroundColor: "#91c789",
    height: 55,
  },
  youreAddingMealTo2ndBre: {
    position: "absolute",
    top: 66,
    left: 26,
    fontSize: 20,
    fontStyle: "italic",
    fontFamily: "Epilogue",
    color: "#000",
    textAlign: "left",
    undefined: "",
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
  },
  name: {
    position: "relative",
    fontSize: 16,
    fontStyle: "italic",
    fontFamily: "Epilogue",
    color: "#fff",
    textAlign: "left",
  },
  rectangleTextInput1: {
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
  },
  calories: {
    position: "relative",
    fontSize: 16,
    fontStyle: "italic",
    fontFamily: "Epilogue",
    color: "#fff",
    textAlign: "left",
  },
  rectangleTextInput2: {
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
  },
  protein: {
    position: "relative",
    fontSize: 16,
    fontStyle: "italic",
    fontFamily: "Epilogue",
    color: "#fff",
    textAlign: "left",
  },
  rectangleTextInput3: {
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
  },
  fat: {
    position: "relative",
    fontSize: 16,
    fontStyle: "italic",
    fontFamily: "Epilogue",
    color: "#fff",
    textAlign: "left",
  },
  rectangleTextInput4: {
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
  },
  carbo: {
    position: "relative",
    fontSize: 16,
    fontStyle: "italic",
    fontFamily: "Epilogue",
    color: "#fff",
    textAlign: "left",
  },
  rectangleTextInput5: {
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
    width: 285,
    height: 40,
  },
  barcode: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  barcode1: {
    position: "relative",
    fontSize: 16,
    fontStyle: "italic",
    fontFamily: "Epilogue",
    color: "#fff",
    textAlign: "left",
  },
  notRequired: {
    position: "relative",
    fontSize: 16,
    fontStyle: "italic",
    fontFamily: "Epilogue",
    color: "#fff",
    textAlign: "left",
    right: 0,
    bottom: 0,
  },
  nutritionFactsPer100g: {
    position: "relative",
    fontSize: 16,
    fontStyle: "italic",
    fontFamily: "Epilogue",
    color: "#fff",
    textAlign: "left",
  },
  rectanglePressable1: {
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
    marginTop: 10,
  },
  save: {
    position: "relative",
    fontSize: 20,
    fontFamily: "Epilogue",
    color: "#000",
    textAlign: "center",
    marginHorizontal: "auto",
    top:15,
  },
  rectanglePressable2: {
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
    width: 30,
    height: 31,
  },
  vectorIcon1: {
    position: "relative",
    height: "2.17%",
    width: "4.23%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupView: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginHorizontal: "auto",
    alignItems: 'center',
    top: "5%",
    width: "100%",
    paddingTop: 10,
  },
  addAdd: {
    position: "relative",
    backgroundColor: "#967474",
    flex: 1,
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  scan: {
    marginLeft:8,
    marginTop:10,
  },
});

export default AddAdd;
