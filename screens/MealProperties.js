import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable, TextInput, Keyboard, TouchableWithoutFeedback } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { auth, db,firebase } from "../firebase.js";

const MealProperties = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const mid = route.params.id;
  const date = route.params.date;
  const mealCategory = route.params.meal;
  const [meal, setMeal] = useState({});
  const [grams, setGrams] = useState("");
  const uid = auth.currentUser?.uid;
  

  useEffect(() => {
    setMeal({});
    console.log(mid);
    console.log(date);
    console.log(mealCategory)
    db.collection('meals').doc(mid).get()
      .then(
        doc => {
          if (doc.exists) {
            console.log(doc.data().name)
            setMeal(doc.data())
          } else {
            console.log("No such document!")
          }
        }
      ).catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} accessible={false}>
      <View style={styles.mealProperties} >
        <View style={styles.rectangleView}>
          <Text style={styles.facts}>
            <Text style={styles.title}>{meal.name}{'\n'}</Text>
            <Text >Nutrition facts per 100g:{'\n'}</Text>
            <Text >Calories: {meal.calories}{'kcal\n'}</Text>
            <Text >Protein: {meal.protein}{'g\n'}</Text>
            <Text >Fat: {meal.fat}{'g\n'}</Text>
            <Text >Carbo: {meal.carbo}{'g\n'}</Text>
          </Text>
        </View>
        <Text style={styles.eatenGrams}>Eaten grams</Text>
        <TextInput
          style={styles.rectangleTextInput}
          placeholder="Placeholder text"
          keyboardType="number-pad"
          keyboardShouldPersistTaps='handled'
          onChangeText={text => setGrams(text)}
        />
        <Pressable
          style={styles.rectanglePressable}
          onPress={async () => {
            await db.collection('users').doc(uid).collection("daty").doc(date).set({},{merge: true})
            await db.collection('users').doc(uid).collection("daty").doc(date).update({
              [mealCategory]: firebase.firestore.FieldValue.arrayUnion({
                mealId: mid,
                grams: grams
                })
                
            },{merge: true});
            navigation.navigate("MainView")}
          }
            
        >
          <Text style={styles.add}>Add</Text>
        </Pressable>
      </View>
    </TouchableWithoutFeedback>
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
    height: 180,


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
    top: 12,
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
