import React , {useState} from "react";
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const AddYours = () => {
  const navigation = useNavigation();

  
  return (
    <View style={styles.addHistory}>
      <View style={styles.list}>
        <ScrollView>
          {CONTENT.map((item,index)=>{
            return (
              <View style={styles.meal} key={index}>
                  <TouchableOpacity onPress={()=>{
                    navigation.navigate("MealProperties")
                  }}>
                    <Text style={styles.one}>{item.name}</Text>
                  </TouchableOpacity>
              </View>
              
            )
            
          }) }
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  one:
  {
    fontSize: 30,
    textAlign: "center",
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
  list: {
    flex: 1,
    marginHorizontal:"auto", 
    alignItems:"center",
    paddingTop: "10%",
    
  },
  meal: {
    position: "relative",
    width: 300,
    padding: 10,

    
  },
  addHistory: {
    position: "relative",
    backgroundColor: "#967474",
    width: "100%",
    flex: 1,
  },
});
const CONTENT = [
  {
    name: 'Egg',
    Cal:100,
    Prot:50,
    Fat:20,
    Carb:150
  },
  {
    name: 'Bread',
    Cal:100,
    Prot:50,
    Fat:20,
    Carb:150
  },
  {
    name: 'Sausage',
    Cal:100,
    Prot:50,
    Fat:20,
    Carb:150
  },
  {
    name: 'Biscuits',
    Cal:100,
    Prot:50,
    Fat:20,
    Carb:150
  },

  {
    name: 'Banana',
    Cal:100,
    Prot:50,
    Fat:20,
    Carb:150
  }];
export default AddYours;
