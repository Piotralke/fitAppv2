import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Text,
  Pressable
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { auth, db } from "../firebase";

const AddHistory = () => {
  const [dataTest, setDataTest] = useState([]);
  const navigation = useNavigation();
  const [c] = useState(navigation.getParent().getState().routes.find(x => x.name == "BottomTabsRoot").params.date);
  const [name] = useState(navigation.getParent().getState().routes.find(x => x.name == "BottomTabsRoot").params.name);
  const uid = auth.currentUser?.uid;
  const route = useRoute();
  const [search, setSearch] = useState("")

  //const [cat, setCat] = useState(route.params.name);
  useEffect(()=>{
    navigation.setOptions({
      headerTitle: () => (
        <TextInput 
        style={styles.search} 
          placeholder="Search"
          keyboardType="default"
          placeholderTextColor="#fff"
          onChangeText={text=>setSearch(text)}
        />
      ),
      headerRight: () =>(
        <Pressable onPress={() => navigation.navigate("Scan",{name:name,date:c})}>
        <Image
        style={styles.scan}
        resizeMode="cover"
        source={require("../assets/vector4.png")}
        />
        </Pressable>
      ),
    })
  },[]);

  useEffect(() => {
    console.log(search)
  }, [search])
  useEffect(() => {
    console.log(c);
    console.log("chuj");
    // console.log(this.props.catName);
    setDataTest([]);
    if (search.length === 0) {
      const today = new Date();
      const set = new Set();
      const dbData = db.collection("users").doc(uid).collection("daty").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(doc.id)
          const dateArr = doc.id.split(".");
          const date = new Date(dateArr[2], dateArr[1] - 1, dateArr[0]);
      //    console.log(today.getVarDate()-7)
          if(today-7 * 86400000 <date)
          {
            Object.keys(doc.data()).forEach((i)=>{
              doc.data()[i].forEach(meal=>{
                set.add(meal.mealId)
                // dodawanie do seta i pozniej poobieranie tych wszystkich z seta
              })
            })
            console.log(set)
            const meals = db.collection("meals").get().then(querySnapshot=>{
              querySnapshot.forEach(doc=>{
                if(set.has(doc.id))
                {
                  setDataTest(dataTest => [...dataTest, doc])
                  set.delete(doc.id)
                }
                    
              })
            })
            //doc.data() .forEach(el=>{
            //  console.log(el)
            //})
          }
        })
      }

      )
    } else {
      db.collection('meals').get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {

            if (doc.data().name.toUpperCase().indexOf(search.toUpperCase()) > -1) {
              setDataTest(dataTest => [...dataTest, doc])
            }
          })
        }).catch(error => {
          console.log(error);
        });
    }

  }, [c, name, search]);
  return (
    <View style={styles.addHistory}>
      <View style={styles.list}>
        <Text>{c}</Text>
        <ScrollView>
          {dataTest.map((item, index) => {
            return (
              <View style={styles.meal} key={index}>
                <TouchableOpacity onPress={() => {
                  navigation.navigate("MealProperties", { id: item.id, date: c, meal: name })
                }}>
                  <Text style={styles.one}>{item.data().name}</Text>
                </TouchableOpacity>
              </View>

            )

          })}
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
    marginHorizontal: "auto",
    alignItems: "center",
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
    padding: 5,
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
    Cal: 100,
    Prot: 50,
    Fat: 20,
    Carb: 150
  },
  {
    name: 'Bread',
    Cal: 100,
    Prot: 50,
    Fat: 20,
    Carb: 150
  },
  {
    name: 'Sausage',
    Cal: 100,
    Prot: 50,
    Fat: 20,
    Carb: 150
  },
  {
    name: 'Biscuits',
    Cal: 100,
    Prot: 50,
    Fat: 20,
    Carb: 150
  },

  {
    name: 'Banana',
    Cal: 100,
    Prot: 50,
    Fat: 20,
    Carb: 150
  }];
export default AddHistory;
