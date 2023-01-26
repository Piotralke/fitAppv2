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
  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <TextInput
          style={styles.search}
          placeholder="Search"
          keyboardType="default"
          placeholderTextColor="#fff"
          onChangeText={text => setSearch(text)}
        />
      ),
      headerRight: () => (
        <Pressable onPress={() => navigation.navigate("Scan", { name: name, date: c })}>
          <Image
            style={styles.scan}
            resizeMode="cover"
            source={require("../assets/vector4.png")}
          />
        </Pressable>
      ),
    })
  }, []);
  useEffect(() => {

    setDataTest([]);
    if (search.length === 0) {
      const today = new Date();
      const set = new Set();
      const dbData = db.collection("users").doc(uid).collection("daty").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const dateArr = doc.id.split(".");
          const date = new Date(dateArr[2], dateArr[1] - 1, dateArr[0]);
          if (today - 7 * 86400000 < date) {
            Object.keys(doc.data()).forEach((i) => {
              doc.data()[i].forEach(meal => {
                set.add(meal.mealId)
              })
            })
            const meals = db.collection("meals").get().then(querySnapshot => {
              querySnapshot.forEach(doc => {
                if (set.has(doc.id)) {
                  setDataTest(dataTest => [...dataTest, doc])
                  set.delete(doc.id)
                }

              })
            })
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
      <ScrollView>
        <View style={styles.container}>
          {dataTest.map((item) => {
            return (
              <View style={styles.meal} key={item.id}>
                <TouchableOpacity onPress={() => {
                  navigation.navigate("MealProperties", { id: item.id, date: c, meal: name })
                }}>
                  <Text style={styles.one}>{item.data().name}</Text>
                </TouchableOpacity>
              </View>

            )

          })}
        </View>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  one:
  {
    fontSize: 30,
    textAlign: "center",
    position: "relative",
    width: 248,
    height: 56,
    paddingTop: 5,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10
  },
  itemContainer: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f9f9f9',
    marginVertical: 10
  },

  meal: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    shadowOpacity: 1,
    borderRadius: 54,
    backgroundColor: "#91c789",
    position: "relative",
    width: 300,
    flexDirection: 'column',

    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#91c789",
    marginVertical: 10

  },
  search: {
    height: 30,
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
  scan: {
    marginRight: 12,
  },
});
export default AddHistory;
