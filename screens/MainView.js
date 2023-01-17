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
