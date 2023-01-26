import * as React from "react";
import { useState, useEffect } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  ImageBackground,
  TextInput,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { auth, db } from "../firebase.js";
const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setPassword("");
        setEmail("");
        navigation.navigate("DrawerRoot", { screen: "MainView" })
      }
    })
    return unsubscribe
  }, [])

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
      })
      .catch(error => alert(error.message))
  }




  return (
    <View style={styles.login}>


      <ImageBackground
        style={styles.logo1Icon}
        resizeMode="center"
        source={require("../assets/logo1.png")}
      />
      <View style={styles.groupView}>
        <TextInput
          value={email}
          style={styles.rectangleTextInput}
          onChangeText={text => setEmail(text)}
          placeholder="email"
          keyboardType="default"
        />
        <TextInput
          value={password}
          style={styles.rectangleTextInput1}
          onChangeText={text => setPassword(text)}
          placeholder="password"
          keyboardType="default"
          secureTextEntry={true}
        />
        <Pressable
          style={styles.rectanglePressable}
          onPress={handleLogin}>
          <Text style={styles.logIn}>Log in</Text>
        </Pressable>
        <Pressable
          style={styles.dontHaveAccountRegister}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.dontHaveAccount}>{`Don’t have account? `}</Text>
          <Text style={styles.register}>Register</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectanglePressable: {
    position: "relative",
    top: 100,
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
    alignItems: "center",
  },
  logIn: {
    position: "relative",
    top: 10,
    fontSize: 20,
    color: "#000",
    textAlign: "center",
  },
  dontHaveAccount: {
    color: "#000",
  },
  register: {
    color: "#91c789",
  },
  dontHaveAccountRegister: {
    top: 110,
    position: "relative",
    fontSize: 15,

    textAlign: "center",
  },
  logo1Icon: {
    position: "absolute",
    marginLeft: -101,
    top: 108,
    left: "50%",
    width: 201,
    height: 202,
    justifyContent: "center",
  },
  rectangleTextInput: {
    top: 0,
    borderRadius: 10,
    backgroundColor: "#967474",
    textAlign: "center",
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
  rectangleTextInput1: {
    top: 50,
    borderRadius: 10,
    backgroundColor: "#967474",
    textContentType: 'password',
    textAlign: "center",
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
  groupView: {
    position: "relative",
    flexDirection: 'column',
    justifyContent: 'center',
    marginHorizontal: "auto",
    alignItems: 'center',
    top: "50%",
    width: "100%",
  },
  login: {
    position: "relative",
    backgroundColor: "#967474",
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
});

export default Login;
