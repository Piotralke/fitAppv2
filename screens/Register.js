import * as React from "react";
import { useState, useEffect } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { auth, db } from "../firebase.js";
const Register = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  const handleSignUP = () => {
    if (password === confirmPassword) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
          const user = userCredentials.user;
          db.collection('users').doc(user.uid).set({ 'email': user.email, "calories": 2000, "proteins": 50, "fat": 70, "carbo": 260, "steps": 8000 })
        })
        .catch(error => alert(error.message))

    }
    else { }
  }

  return (
    <View style={styles.register1}>

      <View style={styles.groupView}>
        <TextInput
          onChangeText={text => setEmail(text)}
          style={styles.rectangleTextInput}
          placeholder="E-mail"
          keyboardType="default"
        />
        <TextInput
          style={styles.rectangleTextInput}
          onChangeText={text => setPassword(text)}
          placeholder="Password"
          keyboardType="default"
        />
        <TextInput
          style={styles.rectangleTextInput}
          onChangeText={text => setConfirmPassword(text)}
          placeholder="Confirm password"
          keyboardType="default"
        />
        <Pressable
          style={styles.rectanglePressable}
          onPress={handleSignUP}
        >
          <Text style={styles.register}>Register</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectanglePressable: {
    position: "relative",
    alignSelf: "center",
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
  register: {
    position: "relative",
    top: 10,
    fontSize: 20,
    fontFamily: "Epilogue",
    color: "#000",
    textAlign: "left",
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
    textAlign: "center",
    marginVertical: 30,
  },
  groupView: {
    position: "relative",
    flexDirection: 'column',
    justifyContent: 'center',
    marginHorizontal: "auto",
    alignItems: 'center',
    top: "10%",
    width: "100%",

  },
  register1: {
    position: "relative",
    backgroundColor: "#967474",
    flex: 1,
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
});

export default Register;
