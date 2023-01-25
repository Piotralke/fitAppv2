import * as React from "react";
import { Text, Image, StyleSheet, View, Pressable, Button } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useState, useEffect } from 'react';
import { auth, db, firebase } from "../firebase.js";
import { QuerySnapshot } from "firebase/firestore";
const Scan = () => {
  const navigation = useNavigation();
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const route = useRoute();
  const name = route.params.name;
  const date = route.params.date;

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    console.log("skaaaaaaaaan")
    let bool = false;
    
    db.collection("meals").get().then(queryS=>{
      queryS.forEach(doc=>{
        if(doc.data().barcode==data && bool!=true)
        {
          console.log(doc.data().barcode)
          bool=true;
          navigation.navigate("MealProperties",{id: doc.id, date: date, meal: name})

        }
        
      })
      if(!bool)
    {
      navigation.navigate("AddAdd", { barcode: data })
    }
    })
    
  };
  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.scan}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      <Pressable
        style={styles.iconChevronDown}
        onPress={() =>
          navigation.navigate("BottomTabsRoot", { name: name, date: date })
        }
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/-icon-chevron-down.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIcon: {
    position: "absolute",
    height: "20.14%",
    width: "43.59%",
    top: "39.93%",
    right: "28.21%",
    bottom: "39.93%",
    left: "28.21%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  icon: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  iconChevronDown: {
    position: "relative",
    left: "8.21%",
    top: "10%",
    width: "3.1%",
    height: "2.48%",
  },
  scan: {
    position: "relative",
    backgroundColor: "#967474",
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default Scan;
