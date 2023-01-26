import * as React from "react";
import { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  BarChart,
  ProgressChart
} from "react-native-chart-kit";
import { Pedometer } from 'expo-sensors';
import { auth, db, firebase } from "../firebase.js";
const Steps = () => {
  const [isPedometerAvailable, setIsPedometerAvailable] = useState('checking');
  const navigation = useNavigation();
  const [dataTest, setDataTest] = useState([0, 0, 0, 0, 0, 0, 0]);
  const [steps, setSteps] = useState(8000)
  const uid = auth.currentUser?.uid;
  const [data, setData] = useState({
    labels: ["08.12", "09.12", "10.12", "11.12", "12.12", "13.12", "14.12"],
    datasets: [
      {
        data: [4507, 7950, 5522, 7835, 6432, 7925, 5135]
      }
    ]
  })
  const subscribe = async () => {
    const user = await db.collection("users").doc(uid).get();
    const userData = user.data();
    setSteps(userData.steps);
    const isAvailable = await Pedometer.isAvailableAsync();
    setIsPedometerAvailable(String(isAvailable));
    if (isAvailable) {
      const date = new Date();
      let data = []
      let dateArray = []
      for (let i = -1; i < 6; i++) {
        const test = await Pedometer.getStepCountAsync(new Date(date.getFullYear(), date.getMonth(), date.getDate() - (i + 1)), new Date(date.getFullYear(), date.getMonth(), date.getDate() - i));
        if (test) {
          data.unshift(test.steps)
          dateArray.unshift(`${date.getDate() - (i + 1) < 10 ? "0" + date.getDate() - (i + 1) : date.getDate() - (i + 1)}.${date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1}`)
        }
      }

      setDataTest(data)
      setData({
        labels: dateArray,
        datasets: [{
          data: data
        }]
      })
    }
  }
  useEffect(() => {
    
    const subscription = subscribe();
    return () => subscription;
  }, []);

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };
  return (
    <View style={styles.steps1}>
      <View>
        <ProgressChart
          style={styles.ringChart}
          data={[(dataTest[6] / steps>1)?1:dataTest[6] / steps]}
          width={300}
          height={220}
          chartConfig={chartConfig}
          verticalLabelRotation={0}
          showValuesOnTopOfBars={true}
        />
      </View>
      <View>
        <BarChart
          style={styles.barChart}
          data={data}
          width={300}
          height={220}
          chartConfig={chartConfig}
          verticalLabelRotation={0}
          showValuesOnTopOfBars={true}
        />
      </View>
      <Text style={styles.steps}>Steps today: {dataTest[6]}/{steps}</Text>
      <View style={styles.average}>
        <View style={styles.rectangleView2}>
          <Text style={styles.yourAverageStepsForWeek}>
            Your average steps for week:
          </Text>
          <Text style={styles.text20}>{(dataTest.reduce((a, b) => a + b, 0) / dataTest.length).toFixed(0)}</Text>
        </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  barChart: {
    position: "absolute",
    top: 50,
    left: "10%"
  },
  average:
  {
    position: "absolute"
  },
  ringChart: {
    position: "relative",
    top: 30,
    left: "10%"
  },
  bottomText: {
    position: "absolute",
    top: 289,
    left: 44,
    width: 244,
    height: 13,
  },
  view: {
    position: "absolute",
    top: 114,
    left: 0,
    backgroundColor: "#92c789",
    width: 20,
    height: 149,
  },

  steps: {
    position: "relative",
    fontSize: 20,
    fontStyle: "italic",
    fontFamily: "Epilogue",
    color: "#000",
    textAlign: "center",
  },


  rectangleView2: {
    position: "relative",
    top: 500,
    left: 82,
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
    width: 225,
    height: 154,
  },
  text20: {
    position: "relative",
    fontSize: 64,
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "center",
  },
  yourAverageStepsForWeek: {
    paddingTop: "10%",
    position: "relative",
    fontSize: 15,
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "center",
  },
  steps1: {
    position: "relative",
    backgroundColor: "#967474",
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default Steps;
