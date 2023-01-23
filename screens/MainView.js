import React, { useState, useEffect  } from "react";
import { Image, StyleSheet, Text, View, Pressable, SafeAreaView, ScrollView, TouchableOpacity, LayoutAnimation, Alert, Button } from "react-native";
import { auth, db, firebase } from "../firebase.js";
import {
  Datepicker as RNKDatepicker,
  Icon as RNKIcon,
} from "@ui-kitten/components";
import { useNavigation, useRoute  } from "@react-navigation/native";
import {
  ProgressChart,
} from "react-native-chart-kit";

const ExpandableComponent = ({ item, onClickFunction, date }) => {
  //Custom Component for the Expandable List
  const [layoutHeight, setLayoutHeight] = useState(0);
  const navigation = useNavigation();
  useEffect(() => {

    if (item.isExpanded) {
      setLayoutHeight(null);
    } else {
      setLayoutHeight(0);
    }
  }, [item.isExpanded]);

  return (

    <View tyle={{ flex: 1, top: "46%", marginBottom: "100%", width: "100%", marginHorizontal: "auto", alignItems: "center" }}>
      {/*Header of the Expandable List Item*/}
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onClickFunction}
        style={styles.header}>
        <View style={styles.mainbuttons}>
          <Text style={styles.headerText}>{item.category_name}</Text>
          <TouchableOpacity style={[styles.settings1]} onPress={() => navigation.navigate("BottomTabsRoot", { name: item.category_name, date: date.toLocaleDateString() })}>
            <Image style={styles.iconSettings} resizeMode="cover" source={require('../assets/-icon-add-circle.png')} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <View
        style={{
          height: layoutHeight,
          overflow: 'hidden',
        }}>
        {/*Content under the header of the Expandable List Item*/}
        {item.subcategory.map((item, key) => (
          <TouchableOpacity
            key={key}
            style={styles.content}
            onPress={() => Alert.alert(item.name, 'Calories: ' + item.Cal.toFixed(1) + '\nProtein: ' + item.Prot.toFixed(1) + '\nFat: ' + item.Fat.toFixed(1) + '\nCarbo: ' + item.Carb.toFixed(1), [{ text: "Ok" }, { text: "Delete", style: 'destructive' }])}>
            <Text style={styles.text}>
              {item.name}
            </Text>
            <View style={styles.separator} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const MainView = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [datePicker, setDatePicker] = useState(()=>{
    if(route.params){
      const dateArr = route.params.date.split(".");
      return new Date(dateArr[2],dateArr[1]-1,dateArr[0])
    }
    return new Date()  
  });
  const [listDataSource, setListDataSource] = useState(CONTENT);
  const updateLayout = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const array = [...listDataSource];
    array[index]['isExpanded'] = !array[index]['isExpanded'];
    setListDataSource(array);
  };
  const uid = auth.currentUser?.uid;
  const [maximums,setMaximums] =useState({
      calories:2000,
      proteins:50,
      fat:70,
      carbo:260
  }) 
  const colors = ['rgba(255, 0, 0,0.4)', 'rgba(238, 130, 238,0.4)', 'rgba(106, 90, 205,0.4)', 'rgba(60, 179, 113,0.4)', 'rgba(255, 172, 71 , 0.4)'];
  const [chartData, setChartData] = useState({labels:["Calories", "Protein", "Fat", "Carbo"], 
  data: [0,0,0,0]});
  const [nutritions,setNutritions] = useState([0,0,0,0])

  useEffect(()=>{
    async function fetchData(){
      
    console.log("aaaaaa");
    const ref = db.collection('users').doc(uid);
    const doc = await ref.get();
    if(doc.exists)
    {
      console.log(doc.data())
      setMaximums(doc.data());
    }
    }
    
    fetchData()
  },[])

  useEffect(() => {
    async function fetchData() {
      setChartData({labels:["Calories", "Protein", "Fat", "Carbo"], 
      data: [0,0,0,0]})
      setNutritions([0,0,0,0])
      const list = [
        {
          isExpanded: false,
          category_name: 'Breakfast',
          subcategory: [],
        },
        {
          isExpanded: false,
          category_name: '2nd Breakfast',
          subcategory: [],
        },
        {
          isExpanded: false,
          category_name: 'Lunch',
          subcategory: [],
        },
        {
          isExpanded: false,
          category_name: 'Dinner',
          subcategory: [],
        },
        {
          isExpanded: false,
          category_name: 'Supper',
          subcategory: [],
        }];
        setListDataSource(list)
      const z = await db.collection('users').doc(uid).collection("daty").doc(datePicker.toLocaleDateString()).get()
      const y = await db.collection('meals').get();
      const idArray = y.docs.map(doc=>doc.id);
      const dataArray = y.docs.map(doc=>doc.data());
      const x = z.data()
      let sumCal = 0;
      let sumProt = 0;
      let sumFat = 0;
      let sumCarb = 0;
      if(x)
      {
        list.forEach(element => {
          if(x.hasOwnProperty(element.category_name))
          {
            x[element.category_name].forEach(async el => {
              const meal = dataArray.at(idArray.indexOf(el.mealId))
              const multiply = el.grams/100;
              element.subcategory.push({
                id: x[element.category_name].indexOf(el),
                name: meal.name,
                Cal: meal.calories*multiply,
                Prot: meal.protein*multiply,
                Fat: meal.fat*multiply,
                Carb: meal.carbo*multiply
              })
              sumCal+=meal.calories*multiply
              sumProt+=meal.protein*multiply
              sumFat+=meal.fat*multiply
              sumCarb+=meal.carbo*multiply
            });
          }
          
        });
       
        setChartData({
          labels:["Calories", "Protein", "Fat", "Carbo"], 
          data: [sumCal/maximums.calories<1.0?sumCal/maximums.calories:1.0,sumProt/ maximums.proteins<1.0?sumProt/ maximums.proteins:1.0,sumFat/ maximums.fat<1.0?sumFat/ maximums.fat:1.0,sumCarb/maximums.carbo<1.0?sumCarb/maximums.carbo:1.0]
        })
        setNutritions([sumCal,sumProt,sumFat,sumCarb])
        console.log(list)
        setListDataSource(list)
        
      }
      
      console.log("maximums")
      console.log(maximums)
    }
    fetchData();
  }, [datePicker])

  return (
    <View style={styles.mainView} >

      <RNKDatepicker
        style = {{left: "-10%"}}
        accessoryLeft={<RNKIcon name="calendar-outline" pack="material" />}
        date={datePicker}
        onSelect={setDatePicker}
        controlStyle={styles.datePickerValue}
      />
      <Image
        style={styles.frameIcon}
        resizeMode="cover"
        source={require("../assets/frame-1.png")}
      />

      <View style={{ flex: 1, top: "46%", marginBottom: "100%", width: "100%", marginHorizontal: "auto", alignItems: "center" }}>
        <ScrollView>
          {listDataSource.map((item, key) => (
            <ExpandableComponent
              key={item.category_name}
              onClickFunction={() => {
                updateLayout(key);
              }}
              item={item}
              date={datePicker}
            />
          ))}
        </ScrollView>
      </View>
      <View style={styles.chart}>
        <ProgressChart data={chartData} width={400}
          height={220}
          strokeWidth={16}
          radius={32} hideLegend={false} chartConfig={{
            backgroundColor: "#967474",
            backgroundGradientFrom: "#967474",
            backgroundGradientTo: "#967474",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1, index) => {
              return index != undefined ? colors[index] : `rgba(255, 255, 255, ${opacity})`;
            },
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            },
          }} />
        <Text style={{ position:"relative", left: "12%" }}>Cal:{nutritions[0].toFixed(1)}/{maximums.calories}</Text>
        <Text style={{ position:"relative",left: "12%" }}>Prot: {nutritions[1].toFixed(1)}/{maximums.proteins}</Text>
        <Text style={{ position:"relative", left: "12%" }}>Fat: {nutritions[2].toFixed(1)}/{maximums.fat}</Text>
        <Text style={{ position:"relative",left: "12%" }}>Carbo:{nutritions[3].toFixed(1)}/{maximums.carbo}</Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  chart: {
    position: "absolute",
    top: "0%",
    left: "-10%"
  },
  addMeal: {
    position: "relative",
    justifyContent: "right"
  },
  datePickerValue: {
    position: "absolute",
    top: 289,
    left: 63,
    backgroundColor: "#967474",
  },
  text: {
    fontSize: 20
  },
  content: {
    borderStyle: "solid",
    padding: 8,
    textAlign: 'left',
    marginHorizontal: "auto",
    backgroundColor: "#968675",
    borderColor: "#91c789",
    left: 10,
    borderLeftWidth: 10,
    width: "100%",
  },
  frameIcon: {
    position: "absolute",
    top: 319,
    left: 11,
    width: 374,
    height: 21,
  },
  icon: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  mainbuttons: {
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
    height: 56,
    flexDirection: 'row',
  },
  header: {
    backgroundColor: '#967474', //braz
    padding: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: '500',
    backgroundColor: '#91C789',
    textAlign: "left",
  },
  mainView: {
    position: "relative",
    backgroundColor: "#967474",
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
  iconSettings: {
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  settings1: {
    position: "relative",
  },
});

const CONTENT = [
  {
    isExpanded: false,
    category_name: 'Breakfast',
    subcategory: [],
  },
  {
    isExpanded: false,
    category_name: '2nd Breakfast',
    subcategory: [],
  },
  {
    isExpanded: false,
    category_name: 'Lunch',
    subcategory: [],
  },
  {
    isExpanded: false,
    category_name: 'Dinner',
    subcategory: [],
  },
  {
    isExpanded: false,
    category_name: 'Supper',
    subcategory: [],
  }];

export default MainView;
