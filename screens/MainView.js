import React , {useState, useEffect} from "react";
import { Image, StyleSheet, Text, View, Pressable, SafeAreaView, ScrollView, TouchableOpacity, LayoutAnimation, Alert, Button} from "react-native";
import {
  Datepicker as RNKDatepicker,
  Icon as RNKIcon,
} from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import {  
  ProgressChart,
} from "react-native-chart-kit";

const ExpandableComponent = ({ item, onClickFunction }) => {
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
    
    <View tyle={{flex:1,top:"46%", marginBottom:"100%",width:"100%", marginHorizontal:"auto", alignItems:"center"}}>
      {/*Header of the Expandable List Item*/}
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onClickFunction}
        style={styles.header}>
          <View style={styles.mainbuttons}>
            <Text style={styles.headerText}>{item.category_name}</Text>
            <TouchableOpacity style={[styles.settings1]} onPress={()=>navigation.navigate("BottomTabsRoot")}>
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
            onPress={() => Alert.alert(item.name, 'Calories: ' + item.Cal + '\nProtein: ' + item.Prot + '\nFat: ' + item.Fat + '\nCarbo: ' + item.Carb, [{text: "Ok"},{ text:"Delete", style:'destructive'}])}>
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
  const [datePicker, setDatePicker] = useState(new Date());
  const navigation = useNavigation();
  const [listDataSource, setListDataSource] = useState(CONTENT);
  const updateLayout = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const array = [...listDataSource];
      array[index]['isExpanded'] = !array[index]['isExpanded'];
    setListDataSource(array);
  };
  const colors = [ 'rgba(255, 0, 0,0.4)', 'rgba(238, 130, 238,0.4)', 'rgba(106, 90, 205,0.4)', 'rgba(60, 179, 113,0.4)', 'rgba(255, 172, 71 , 0.4)'];
  const chartData={labels:["Calories","Protein","Fat","Carbo"],data:[1800/2000,123/452,555/643,76/120]};
  return (
    <View style={styles.mainView} >

      <RNKDatepicker
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
     
      <View style={{flex:1,top:"46%", marginBottom:"100%",width:"100%", marginHorizontal:"auto", alignItems:"center"}}>
        <ScrollView>
        {listDataSource.map((item, key) => (
            <ExpandableComponent
              key={item.category_name}
              onClickFunction={() => {
                updateLayout(key);
              }}
              item={item}
            />
          ))}
        </ScrollView>
      </View>
      <View style={styles.chart}>
      <ProgressChart data={chartData}  width={400}
      height={220}
      strokeWidth={16}
      radius={32}  hideLegend={false} chartConfig={{backgroundColor: "#967474",
      backgroundGradientFrom: "#967474",
      backgroundGradientTo: "#967474",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1, index) => {
        return index != undefined ? colors[index]:`rgba(255, 255, 255, ${opacity})`;
      },
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      }}/>  
      <Text style={{left:"12%"}}>Cal:1800/2000 Prot: 27/100 Fat: 43/50 Carbo:189/300</Text>    
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  chart:{
    position: "absolute",
    top: "5%",
    left: "-10%"
  },
  addMeal:{
    position: "relative",
    justifyContent: "right"
  },
  datePickerValue: {
    position: "absolute",
    top: 289,
    left: 63,
    backgroundColor: "#967474",
  },
  ellipseIcon: {
    position: "absolute",
    top: 49,
    left: 156,
    width: 48,
    height: 48,
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

    borderLeftWidth:10,

    width: "100%",
  },
  ellipseIcon1: {
    position: "absolute",
    top: 112,
    left: 191,
    width: 38,
    height: 38,
  },
  ellipseIcon2: {
    position: "absolute",
    top: 171,
    left: 206,
    width: 38,
    height: 38,
  },
  ellipseIcon3: {
    position: "absolute",
    top: 231,
    left: 191,
    width: 38,
    height: 38,
  },
  calories: {
    position: "absolute",
    top: 52,
    left: 210,
    fontSize: 36,
    fontStyle: "italic",
    fontFamily: "Epilogue",
    color: "#000",
    textAlign: "left",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
  },
  kcal: {
    position: "absolute",
    top: 89,
    left: 210,
    fontSize: 24,
    fontStyle: "italic",
    fontFamily: "Epilogue",
    color: "#fff",
    textAlign: "left",
  },
  g: {
    position: "absolute",
    top: 148,
    left: 234,
    fontSize: 16,
    fontStyle: "italic",
    fontFamily: "Epilogue",
    color: "#fff",
    textAlign: "left",
  },
  g1: {
    position: "absolute",
    top: 211,
    left: 249,
    fontSize: 16,
    fontStyle: "italic",
    fontFamily: "Epilogue",
    color: "#fff",
    textAlign: "left",
  },
  g2: {
    position: "absolute",
    top: 265,
    left: 234,
    fontSize: 16,
    fontStyle: "italic",
    fontFamily: "Epilogue",
    color: "#fff",
    textAlign: "left",
  },
  g3: {
    position: "absolute",
    top: 265,
    left: 234,
    fontSize: 16,
    fontStyle: "italic",
    fontFamily: "Epilogue",
    color: "#fff",
    textAlign: "left",
  },
  protein: {
    position: "absolute",
    top: 117,
    left: 234,
    fontSize: 24,
    fontStyle: "italic",
    fontFamily: "Epilogue",
    color: "#000",
    textAlign: "left",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
  },
  fat: {
    position: "absolute",
    top: 174,
    left: 249,
    fontSize: 24,
    fontStyle: "italic",
    fontFamily: "Epilogue",
    color: "#000",
    textAlign: "left",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
  },
  carbo: {
    position: "absolute",
    top: 234,
    left: 234,
    fontSize: 24,
    fontStyle: "italic",
    fontFamily: "Epilogue",
    color: "#000",
    textAlign: "left",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
  },
  rectangleView: {
    position: "absolute",
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "#91c789",
    borderStyle: "solid",
    borderColor: "#fff",
    borderTopWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    height: 55,
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
  iconLineHorizontal3: {
    position: "absolute",
    left: "2.82%",
    top: "2.01%",
    right: "88.97%",
    bottom: "94.19%",
    width: "8.21%",
    height: "3.79%",
  },
  icon1: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  vector: {
    position: "absolute",
    left: "69.74%",
    top: "93.84%",
    right: "18.21%",
    bottom: "0.36%",
    width: "12.05%",
    height: "5.81%",
  },
  rectangleView1: {
    position: "absolute",
    top: 222,
    left: 0,
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
  },
  dinner: {
    position: "absolute",
    top: 225,
    left: 22,
    fontSize: 24,
    fontStyle: "italic",
    fontFamily: "Epilogue",
    color: "#000",
    textAlign: "left",
  },
  c350kcalP1103gF132gCr: {
    position: "absolute",
    top: 250,
    left: 22,
    fontSize: 15,
    fontStyle: "italic",
    fontFamily: "Epilogue",
    color: "#000",
    textAlign: "left",
  },
  iconAddCircle: {
    position: "absolute",
    height: "10.73%",
    width: "10.48%",
    top: "65.25%",
    right: "5.34%",
    bottom: "24.01%",
    left: "84.18%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  iconChevronDown: {
    position: "absolute",
    height: "3.42%",
    width: "5.92%",
    top: "65.25%",
    right: "63.57%",
    bottom: "31.33%",
    left: "30.51%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  rectangleView2: {
    position: "absolute",
    top: 298,
    left: 0,
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
  },
  supper: {
    position: "absolute",
    top: 301,
    left: 22,
    fontSize: 24,
    fontStyle: "italic",
    fontFamily: "Epilogue",
    color: "#000",
    textAlign: "left",
  },
  c350kcalP1103gF132gCr1: {
    position: "absolute",
    top: 326,
    left: 22,
    fontSize: 15,
    fontStyle: "italic",
    fontFamily: "Epilogue",
    color: "#000",
    textAlign: "left",
  },
  iconAddCircle1: {
    position: "absolute",
    height: "10.73%",
    width: "10.48%",
    top: "86.72%",
    right: "5.34%",
    bottom: "2.54%",
    left: "84.18%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  iconChevronDown1: {
    position: "absolute",
    height: "3.42%",
    width: "5.92%",
    top: "87.01%",
    right: "61.03%",
    bottom: "9.58%",
    left: "33.05%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  breakfast: {
    position: "absolute",
    top: 3,
    left: 22,
    fontSize: 24,
    fontStyle: "italic",
    fontFamily: "Epilogue",
    color: "#000",
    textAlign: "left",
  },
  c350kcalP1103gF132gCr2: {
    position: "absolute",
    top: 28,
    left: 22,
    fontSize: 15,
    fontStyle: "italic",
    fontFamily: "Epilogue",
    color: "#000",
    textAlign: "left",
  },
  iconAddCircle2: {
    position: "absolute",
    height: "10.73%",
    width: "10.48%",
    top: "2.54%",
    right: "5.34%",
    bottom: "86.72%",
    left: "84.18%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  iconChevronDown2: {
    position: "absolute",
    height: "3.42%",
    width: "5.92%",
    top: "2.82%",
    right: "53.69%",
    bottom: "93.76%",
    left: "40.4%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  rectanglePressable: {
    position: "absolute",
    top: 0,
    left: 0,
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
  },
  iconChevronDown3: {
    position: "absolute",
    top: 10,
    left: 147,
    width: 21,
    height: 12,
  },
  breakfast1: {
    fontSize: 24,
    fontStyle: "italic",
    fontFamily: "Epilogue",
    color: "#000",
    textAlign: "left",
  },
  breakfast2: {
    position: "absolute",
    left: 22,
    top: 3,
  },
  c350kcalP1103gF132gCr3: {
    position: "absolute",
    top: 28,
    left: 22,
    fontSize: 15,
    fontStyle: "italic",
    fontFamily: "Epilogue",
    color: "#000",
    textAlign: "left",
  },
  rectanglePressable1: {
    position: "absolute",
    top: 76,
    left: 0,
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
  },
  ndBreakfast: {
    position: "absolute",
    top: 82,
    left: 22,
    fontSize: 24,
    fontStyle: "italic",
    fontFamily: "Epilogue",
    color: "#000",
    textAlign: "left",
  },
  c350kcalP1103gF132gCr4: {
    position: "absolute",
    top: 105,
    left: 22,
    fontSize: 15,
    fontStyle: "italic",
    fontFamily: "Epilogue",
    color: "#000",
    textAlign: "left",
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
  icon2: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  iconAddCircle3: {
    position: "absolute",
    left: "84.18%",
    top: "23.16%",
    right: "5.34%",
    bottom: "66.1%",
    width: "10.48%",
    height: "10.73%",
  },
  rectangleView3: {
    position: "absolute",
    top: 146,
    left: 0,
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
  },
  lunch: {
    position: "absolute",
    top: 149,
    left: 19,
    fontSize: 24,
    fontStyle: "italic",
    fontFamily: "Epilogue",
    color: "#000",
    textAlign: "left",
  },
  c350kcalP1103gF132gCr5: {
    position: "absolute",
    top: 174,
    left: 19,
    fontSize: 15,
    fontStyle: "italic",
    fontFamily: "Epilogue",
    color: "#000",
    textAlign: "left",
  },
  iconAddCircle4: {
    position: "absolute",
    height: "10.73%",
    width: "10.48%",
    top: "43.79%",
    right: "6.19%",
    bottom: "45.48%",
    left: "83.33%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  iconChevronDown4: {
    position: "absolute",
    height: "3.42%",
    width: "5.92%",
    top: "44.07%",
    right: "66.4%",
    bottom: "52.52%",
    left: "27.68%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  iconAddCircle5: {
    position: "absolute",
    height: "10.73%",
    width: "10.48%",
    top: "2.54%",
    right: "5.34%",
    bottom: "86.72%",
    left: "84.18%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  iconChevronDown5: {
    position: "absolute",
    height: "3.42%",
    width: "5.92%",
    top: "24.86%",
    right: "39.28%",
    bottom: "71.72%",
    left: "54.8%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupView: {
    position: "relative",
    width: 354,
    height: 354,
    flexShrink: 0,
  },
  frameView: {
    position: "relative",
    top: 354,
    left: 21,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  
  iconHome: {
    position: "absolute",
    height: "6.95%",
    width: "14.27%",
    top: "93.36%",
    right: "64.96%",
    bottom: "-0.31%",
    left: "20.77%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
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
    subcategory: [
      { id: 1, name: 'Parówa',Cal:100,Prot:50,Fat:20,Carb:150 },
      { id: 3, name: 'Sub Cat 3',Cal:100,Prot:50,Fat:20,Carb:150 },
    ],
  },
  {
    isExpanded: false,
    category_name: '2nd Breakfast',
    subcategory: [
      { id: 4, name: 'Sub Cat 4',Cal:100,Prot:50,Fat:20,Carb:150 },
      { id: 5, name: 'Sub Cat 5',Cal:100,Prot:50,Fat:20,Carb:150 },
    ],
  },
  {
    isExpanded: false,
    category_name: 'Lunch',
    subcategory: [
      { id: 7, name: 'Sub Cat 7',Cal:100,Prot:50,Fat:20,Carb:150 },
      { id: 9, name: 'Sub Cat 9',Cal:100,Prot:50,Fat:20,Carb:150 },
    ],
  },
  {
    isExpanded: false,
    category_name: 'Dinner',
    subcategory: [
      { id: 10, name: 'Sub Cat 10',Cal:100,Prot:50,Fat:20,Carb:150 },
      { id: 12, name: 'Sub Cat 2',Cal:100,Prot:50,Fat:20,Carb:150 },
    ],
  },
  {
    isExpanded: false,
    category_name: 'Supper',
    subcategory: [
      { id: 13, val: 'Sub Cat 13',Cal:100,Prot:50,Fat:20,Carb:150 },
      { id: 15, val: 'Sub Cat 5',Cal:100,Prot:50,Fat:20,Carb:150 },
    ],
  }];

export default MainView;
