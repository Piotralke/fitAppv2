import React, { useState, useEffect, useCallback } from "react";
import { Image, StyleSheet, Pressable, View, Text, Keyboard, TouchableOpacity, TouchableWithoutFeedback, Modal, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { auth, db, firebase } from "../firebase.js";

const Settings1 = () => {
  const navigation = useNavigation();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [nutritionsVisible, setNutritionsVisibleVisible] = useState(false);
  const [newPassword, setNewPassword] = useState(null);
  const [calories, setCalories] = useState(null);
  const [protein, setProtein] = useState(null);
  const [fat, setFat] = useState(null);
  const [carbo, setCarbo] = useState(null);
  const [steps, setSteps] = useState(null);
  const uid = auth.currentUser?.uid;
  const changePassword = async (newPass) => {
    try {
      // Pobierz aktualnie zalogowanego użytkownika
      const user = auth.currentUser;

      // Zmiana hasła
      await user.updatePassword(newPass);

      alert('Hasło zostało zmienione pomyślnie');
    } catch (error) {
      alert(error);
    }
  };

  return (

    <View style={styles.settings}>
      <Modal
        animationType="slide"
        visible={passwordVisible}
        transparent={true}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} accessible={false}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => setPasswordVisible(!passwordVisible)}>
                <Text style={styles.textStyle}>X</Text>
              </TouchableOpacity>
              <TextInput
                style={styles.input}
                onChangeText={text => setNewPassword(text)}
                placeholder="Enter new Password"
                keyboardType="default"
              >
              </TextInput>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  if (newPassword !== null) {
                    changePassword(newPassword)
                    setPasswordVisible(!passwordVisible)
                  } else {
                    alert("Wpisz wszystkie wymagane pola!")
                  }

                }}>
                <Text style={styles.textStyle}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <Modal
        animationType="slide"
        visible={nutritionsVisible}
        transparent={true}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} accessible={false}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => setNutritionsVisibleVisible(!nutritionsVisible)}>
                <Text style={styles.textStyle}>X</Text>
              </TouchableOpacity>
              <TextInput
                style={styles.input}
                onChangeText={text => setCalories(text)}
                placeholder="Calories"
                keyboardType="decimal-pad"
              >
              </TextInput>
              <TextInput
                style={styles.input}
                onChangeText={text => setProtein(text)}
                placeholder="Protein"
                keyboardType="decimal-pad"
              >
              </TextInput>
              <TextInput
                style={styles.input}
                onChangeText={text => setFat(text)}
                placeholder="Fat"
                keyboardType="decimal-pad"
              >
              </TextInput>
              <TextInput
                style={styles.input}
                onChangeText={text => setCarbo(text)}
                placeholder="Carbo"
                keyboardType="decimal-pad"
              >
              </TextInput>
              <TextInput
                style={styles.input}
                onChangeText={text => setSteps(text)}
                placeholder="Steps"
                keyboardType="decimal-pad"
              >
              </TextInput>
              <TouchableOpacity
                style={styles.button}
                onPress={async () => {
                  if ([calories, protein, fat, carbo, steps].every(v => v !== null)) {
                    const user = await db.collection("users").doc(uid).get();
                    const userData = user.data();
                    const newData = {
                      calories: calories,
                      carbo: carbo,
                      email: userData.email,
                      fat: fat,
                      proteins: protein,
                      steps: steps
                    }
                    db.collection("users").doc(uid).set(newData);
                    setNutritionsVisibleVisible(!nutritionsVisible)
                  } else {
                    alert("Wpisz wszystkie wymagane pola!")
                  }

                }}>
                <Text style={styles.textStyle}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <TouchableOpacity style={styles.rectangleView} onPress={() => setPasswordVisible(true)} >
        <Text style={styles.text}>Change password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.rectangleView} onPress={() => setNutritionsVisibleVisible(true)} >
        <Text style={styles.text}>Change goals</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,

  },
  input: {
    marginVertical: 10,
    borderStyle: "solid",
    borderColor: "#967474",
    borderWidth: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    width: 140,
    textAlign: "center"
  },
  modalView: {
    margin: 20,
    backgroundColor: "#91c789",
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginVertical: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: '#967474',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  textStyle: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },

  rectangleView: {
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
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10
  },
  text: {
    fontSize: 16,
    fontFamily: "Epilogue",
    color: "#000",
    textAlign: "center",
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    top: 20,
  },
  settings: {
    position: "relative",
    backgroundColor: "#967474",
    flex: 1,
    width: "100%",
    height: "100%",
    overflow: "hidden",
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10
  },
});

export default Settings1;
