import React , {useState, useEffect, useCallback} from "react";
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Text,
} from "react-native";
import { useNavigation, useRoute, useFocusEffect} from "@react-navigation/native";
import {auth, db} from "../firebase.js";
const AddYours = () => {
  const [dataTest,setDataTest] = useState([]);
  const navigation = useNavigation();
  const [c] = useState(navigation.getParent().getState().routes.find(x=>x.name=="BottomTabsRoot").params.date.toLocaleDateString());
  const [name] = useState(navigation.getParent().getState().routes.find(x=>x.name=="BottomTabsRoot").params.name);
  const uid = auth.currentUser?.uid;
  const route = useRoute();
  //const [cat, setCat] = useState(route.params.name);
  useEffect(() => {
    console.log(c);
    console.log("chuj");
   // console.log(this.props.catName);
    setDataTest([]);
    db.collection('meals').get()
      .then((querySnapshot)=>{
        querySnapshot.forEach((doc)=>{
          if(doc.data().creator.trim()===uid)
          {
            setDataTest(dataTest=>[...dataTest, doc])
          }
        })
      }).catch(error => {
        console.log(error);
      }); 
  }, [c,name]);
  return (
    <View style={styles.addHistory}>
      <View style={styles.list}>
        <Text>{c}</Text>
        <ScrollView>
          {dataTest.map((item,index)=>{
            return (
              <View style={styles.meal} key={index}>
                  <TouchableOpacity onPress={()=>{
                    navigation.navigate("MealProperties",{id: item.id})
                  }}>
                    <Text style={styles.one}>{item.data().name}</Text>
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
    paddingTop: 5,
  },
  list: {
    flex: 1,
    marginHorizontal:"auto", 
    alignItems:"center",
    paddingTop: "10%",
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  meal: {
    position: "relative",
    width: 300,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding:5,
  },
  addHistory: {
    backgroundColor: "#967474",
    position: "relative",
    flexDirection: 'column',
    justifyContent: 'center',
    marginHorizontal: "auto",
    alignItems: 'center',
    width: "100%",
    flex: 1,
    overflow: "hidden",
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
