import * as React from "react";
import { useState } from "react";
import Settings from "../components/Settings";
import RectangleComponent from "../components/Rectangle32";
import {
  Text,
  StyleSheet,
  Pressable,
  Image,
  View,
  SafeAreaView,
  TouchableOpacity
} from "react-native";
import {auth, db} from "../firebase.js";
const Menu = ({ state, navigation }) => {
  return (
    <SafeAreaView style={styles.menu}>      
      <View style={styles.view}>
      <Text style={[styles.helloUser]}>Hello, user</Text>
        <Image
          style={styles.iconPerson}
          resizeMode="cover"
          source={require("../assets/-icon-person.png")}
        />
        <TouchableOpacity style={[styles.settings1]} onPress={()=>navigation.navigate("Steps")}>
        <View style={{flexDirection: 'row'}}>
        <Image style={styles.iconSettings} resizeMode="cover" source={require('../assets/vector2.png')} />
        <Text style={styles.settings}>Steps</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.settings1]} onPress={()=>navigation.navigate("Settings")}>
        <View style={{flexDirection: 'row'}}>
        <Image style={styles.iconSettings} resizeMode="cover" source={require('../assets/-icon-settings.png')} />
        <Text style={styles.settings}>Settings</Text>
          </View>
        </TouchableOpacity> 
        <TouchableOpacity
        style={[styles.rectanglePressable]}
        onPress={() => {auth.signOut();
          navigation.navigate("Login")}
        
        }> 
          
        <Text style={styles.logout}>Logout</Text>
        </TouchableOpacity> 
      </View>
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    backgroundColor: "#91c789",
  },
  settings: {
    fontSize: 20,
    fontStyle: "italic",
    fontFamily: "Epilogue",
    color: "#000",
    textAlign: "left",
  },
  iconSettings: {
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  settings1: {
    position: "relative",
    paddingTop: 10,
  },
  rectanglePressable: {
    position: "relative",
    borderRadius: 54,
    backgroundColor: "#000",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 139,
    height: 44,
    alignItems: "center",
  },
  iconPerson: {
    position: "relative",
    paddingTop: 10,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  helloUser: {
    position: "relative",
    fontSize: 24,
    fontStyle: "italic",
    fontFamily: "Epilogue",
    color: "#000",
    textAlign: "left",
  },
  logout: {
    fontSize: 20,
    fontStyle: "italic",
    fontFamily: "Epilogue",
    color: "#ff0000",
    textAlign: "center",
  },
  view: {
    position: "relative",
    top:"3%",
    backgroundColor: "#91c789",
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default Menu;
