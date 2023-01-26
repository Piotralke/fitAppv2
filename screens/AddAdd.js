import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  Pressable,
  TextInput,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { auth, db } from "../firebase.js";
import { useState, useEffect } from "react";
const AddAdd = () => {
  const [name, setName] = useState(null);
  const [calories, setCalories] = useState(null);
  const [protein, setProtein] = useState(null);
  const [fat, setFat] = useState(null);
  const [carbo, setCarbo] = useState(null);
  const [barcode, setBarcode] = useState("");
  const navigation = useNavigation();
  const uid = auth.currentUser?.uid;
  const route = useRoute();
  const scannedBarcode = route.params.barcode;
  const [c] = useState(navigation.getParent().getState().routes.find(x => x.name == "BottomTabsRoot").params.date);
  const [cat_name] = useState(navigation.getParent().getState().routes.find(x => x.name == "BottomTabsRoot").params.name);

  useEffect(() => {
  }, [])
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} accessible={false}>
      <View style={styles.addAdd}>
        <View style={styles.groupView}>
          <Text style={styles.name}>Name</Text>
          <TextInput
            style={styles.rectangleTextInput}
            placeholder="Enter name"
            keyboardType="default"
            onChangeText={text => setName(text)}
          />
          <Text style={styles.name}>
            Nutrition facts per 100g
          </Text>
          <Text style={styles.name}>Calories</Text>
          <TextInput style={styles.rectangleTextInput}
            placeholder="Enter calories"
            keyboardType="decimal-pad"
            onChangeText={text => setCalories(text)}
          />
          <Text style={styles.name}>Protein</Text>
          <TextInput
            style={styles.rectangleTextInput}
            placeholder="Enter protein"
            keyboardType="decimal-pad"
            onChangeText={text => setProtein(text)}
          />
          <Text style={styles.name}>Fat</Text>
          <TextInput
            style={styles.rectangleTextInput}
            placeholder="Enter fat"
            keyboardType="decimal-pad"
            onChangeText={text => setFat(text)}
          />
          <Text style={styles.name}>Carbo</Text>
          <TextInput
            style={styles.rectangleTextInput}
            placeholder="Enter carbo"
            keyboardType="decimal-pad"
            onChangeText={text => setCarbo(text)}
          />
          <Text style={styles.name}>Barcode*</Text>
          <View style={{ flexDirection: 'row' }}>
            <TextInput
              style={styles.rectangleTextInput2}
              placeholder="Enter barcode"
              keyboardType="decimal-pad"
              onChangeText={text => setBarcode(text)}
              value={scannedBarcode ? scannedBarcode : ""}
            />

            <Pressable onPress={() => navigation.navigate("Scan", { name: cat_name, date: c })}>
              <Image
                style={styles.scan}
                resizeMode="cover"
                source={require("../assets/vector4.png")}
              />
            </Pressable>

          </View>
          <Pressable style={styles.rectanglePressable1} onPress={async () => {

            if ([calories, protein, fat, carbo].every(v => v !== null)) {
              const meal = await db.collection('meals').add({
                name: name,
                calories: calories.replace(",", "."),
                protein: protein.replace(",", "."),
                fat: fat.replace(",", "."),
                carbo: carbo.replace(",", "."),
                barcode: scannedBarcode,
                creator: uid.trim(),
              });
              navigation.replace("DrawerRoot", { screen: "MainView" })
            } else {
              alert("Wpisz wszystkie wymagane pola!")
            }

          }}>
            <Text style={styles.save}>Save</Text>
          </Pressable>


          <Text style={styles.name}>*Not required</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
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
    textAlign: "center",
  },
  name: {
    position: "relative",
    fontSize: 16,
    fontStyle: "italic",
    fontFamily: "Epilogue",
    color: "#fff",
    textAlign: "center",
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
    width: 285,
    height: 40,
    textAlign: "center",
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
    top: 15,
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
    marginLeft: 8,
    marginTop: 10,
  },
});

export default AddAdd;
