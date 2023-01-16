import * as React from "react";
import { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  BarChart,
  ProgressChart
} from "react-native-chart-kit";
import { Pedometer } from 'expo-sensors';
const Steps = () => {
  const [isPedometerAvailable, setIsPedometerAvailable] = useState('checking');
  const [pastStepCount, setPastStepCount] = useState(0);
  const navigation = useNavigation();

    const isAvailable = Pedometer.isAvailableAsync();
    setIsPedometerAvailable(String(isAvailable));
    const dataTest = [];
    if (isAvailable) {
      const date = new Date();
      const end = new Date();
      const start = new Date();
      start.setDate(end.getDate() - 1);

      for(let i = 0; i < 7 ; i++){
        if(Pedometer.getStepCountAsync(date.getDate-(i+1), date.getDate-i))
          dataTest.push(Pedometer.getStepCountAsync(date.getDate-(i+1), date.getDate-i));
      }

      for(let test of dataTest){
        console.log(test);
      }
    }

  const data = {
    labels: ["08.12", "09.12", "10.12", "11.12", "12.12","13.12","14.12"],
    datasets: [
      {
        data: [4507, 7950, 5522, 7835, 6432, 7925,5135]
      }
    ]
  };
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
        data={[dataTest.indexOf(0)/8000]}
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
      <Text style={styles.steps}>Steps today: 5135/8000</Text>
      <View style={styles.average}>
        <View style={styles.rectangleView2}>
            <Text style={styles.yourAverageStepsForWeek}>
              Your average steps for week:
            </Text>
            <Text style={styles.text20}>6427</Text>
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
