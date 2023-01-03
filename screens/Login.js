import * as React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  ImageBackground,
  TextInput,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.login}>
      
      
      <ImageBackground
        style={styles.logo1Icon}
        resizeMode="center"
        source={require("../assets/logo1.png")}
      />
      <View style={styles.groupView}>
        <TextInput
          style={styles.rectangleTextInput}
          placeholder="login"
          keyboardType="default"
        />
        <TextInput
          style={styles.rectangleTextInput1}
          placeholder="password"
          keyboardType="default"
        />
        <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("DrawerRoot", { screen: "MainView" })}>
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
    top:100,
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
    top :10,
    fontSize: 20,
    fontFamily: "Epilogue",
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
    top:110,
    position: "relative",
    fontSize: 15,
    fontFamily: "Epilogue",
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
