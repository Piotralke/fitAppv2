import * as React from "react";
import { StyleSheet, View, Pressable, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const AddYours1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.addYours}>
      <Pressable
        style={styles.rectanglePressable}
        onPress={() =>
          navigation.navigate("DrawerRoot", { screen: "BottomTabsRoot" })
        }
      />

      <View style={styles.frameView}>
        <View style={styles.rectangleView2} />
        <Text style={styles.eggs}>Eggs</Text>
        <Text style={styles.c100kcalP6gF132gCr604}>
          C:100kcal P:6g F:13.2g Cr:60.4g
        </Text>
        <Pressable
          style={styles.iconAddCircle}
          onPress={() => navigation.navigate("MealProperties")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/-icon-add-circle.png")}
          />
        </Pressable>
        <View style={styles.rectangleView3} />
        <Text style={styles.bun}>Bun</Text>
        <Text style={styles.c100kcalP6gF132gCr6041}>
          C:100kcal P:6g F:13.2g Cr:60.4g
        </Text>
        <Image
          style={styles.iconAddCircle1}
          resizeMode="cover"
          source={require("../assets/-icon-add-circle.png")}
        />
        <View style={styles.rectangleView4} />
        <Text style={styles.sausage}>Sausage</Text>
        <Text style={styles.c100kcalP6gF132gCr6042}>
          C:100kcal P:6g F:13.2g Cr:60.4g
        </Text>
        <Image
          style={styles.iconAddCircle2}
          resizeMode="cover"
          source={require("../assets/-icon-add-circle.png")}
        />
        <View style={styles.rectangleView5} />
        <Text style={styles.orangeJuice}>Orange Juice</Text>
        <Text style={styles.c100kcalP6gF132gCr6043}>
          C:100kcal P:6g F:13.2g Cr:60.4g
        </Text>
        <Image
          style={styles.iconAddCircle3}
          resizeMode="cover"
          source={require("../assets/-icon-add-circle.png")}
        />
        <View style={styles.rectangleView6} />
        <Text style={styles.days}>7Days</Text>
        <Text style={styles.c100kcalP6gF132gCr6044}>
          C:100kcal P:6g F:13.2g Cr:60.4g
        </Text>
        <Image
          style={styles.iconAddCircle4}
          resizeMode="cover"
          source={require("../assets/-icon-add-circle.png")}
        />
        <View style={styles.rectangleView7} />
        <Text style={styles.snack}>Snack</Text>
        <Text style={styles.c100kcalP6gF132gCr6045}>
          C:100kcal P:6g F:13.2g Cr:60.4g
        </Text>
        <Image
          style={styles.iconAddCircle5}
          resizeMode="cover"
          source={require("../assets/-icon-add-circle.png")}
        />
      </View>
      <Pressable
        style={styles.iconChevronDown}
        onPress={() => navigation.navigate("MainView")}
      >
        <Image
          style={styles.icon1}
          resizeMode="cover"
          source={require("../assets/-icon-chevron-down24.png")}
        />
      </Pressable>
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector9.png")}
      />
      <Image
        style={styles.iconAdd}
        resizeMode="cover"
        source={require("../assets/-icon-search.png")}
      />
      <View style={styles.rectangleView8} />
      <Text style={styles.youreAddingMealTo2ndBre}>
        You’re adding meal to: 2nd Breakfast
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rectanglePressable: {
    position: "absolute",
    top: 7,
    left: 97,
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
    width: 150,
    height: 85,
  },
  rectanglePressable1: {
    position: "absolute",
    top: 20,
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
    width: 97,
    height: 71,
  },
  rectangleView: {
    position: "absolute",
    top: 16,
    left: 247,
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
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 10,
    width: 143,
    height: 87,
  },
  rectangleView1: {
    position: "absolute",
    top: 55,
    left: 390,
    backgroundColor: "#91c789",
    borderStyle: "solid",
    borderColor: "#fff",
    borderTopWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    width: 390,
    height: 55,
    transform: [
      {
        rotate: "-180deg",
      },
    ],
  },
  rectanglePressable2: {
    position: "absolute",
    top: 7,
    left: 335,
    borderRadius: 54,
    backgroundColor: "#967474",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 40,
    height: 41,
  },
  search: {
    fontSize: 20,
    fontStyle: "italic",
    fontFamily: "Epilogue",
    color: "#fff",
    textAlign: "left",
    width: 74,
    height: 21,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
  },
  search1: {
    position: "absolute",
    left: 49,
    top: 21,
  },
  history: {
    position: "absolute",
    top: 60,
    left: 131,
    fontSize: 24,
    fontStyle: "italic",
    fontFamily: "Epilogue",
    color: "#000",
    textAlign: "left",
  },
  yours: {
    position: "absolute",
    top: 61,
    left: 288,
    fontSize: 24,
    fontStyle: "italic",
    fontFamily: "Epilogue",
    color: "#000",
    textAlign: "left",
  },
  rectangleView2: {
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
  eggs: {
    position: "absolute",
    top: 3,
    left: 22,
    fontSize: 24,
    fontStyle: "italic",
    fontFamily: "Epilogue",
    color: "#000",
    textAlign: "left",
  },
  c100kcalP6gF132gCr604: {
    position: "absolute",
    top: 28,
    left: 22,
    fontSize: 15,
    fontStyle: "italic",
    fontFamily: "Epilogue",
    color: "#000",
    textAlign: "left",
  },
  icon: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  iconAddCircle: {
    position: "absolute",
    left: "84.18%",
    top: "2.08%",
    right: "5.34%",
    bottom: "89.15%",
    width: "10.48%",
    height: "8.78%",
  },
  rectangleView3: {
    position: "absolute",
    top: 73,
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
  bun: {
    position: "absolute",
    top: 76,
    left: 22,
    fontSize: 24,
    fontStyle: "italic",
    fontFamily: "Epilogue",
    color: "#000",
    textAlign: "left",
  },
  c100kcalP6gF132gCr6041: {
    position: "absolute",
    top: 101,
    left: 22,
    fontSize: 15,
    fontStyle: "italic",
    fontFamily: "Epilogue",
    color: "#000",
    textAlign: "left",
  },
  iconAddCircle1: {
    position: "absolute",
    height: "8.78%",
    width: "10.48%",
    top: "18.94%",
    right: "5.34%",
    bottom: "72.29%",
    left: "84.18%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  rectangleView4: {
    position: "absolute",
    top: 149,
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
  sausage: {
    position: "absolute",
    top: 152,
    left: 22,
    fontSize: 24,
    fontStyle: "italic",
    fontFamily: "Epilogue",
    color: "#000",
    textAlign: "left",
  },
  c100kcalP6gF132gCr6042: {
    position: "absolute",
    top: 177,
    left: 22,
    fontSize: 15,
    fontStyle: "italic",
    fontFamily: "Epilogue",
    color: "#000",
    textAlign: "left",
  },
  iconAddCircle2: {
    position: "absolute",
    height: "8.78%",
    width: "10.48%",
    top: "36.49%",
    right: "5.34%",
    bottom: "54.73%",
    left: "84.18%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  rectangleView5: {
    position: "absolute",
    top: 225,
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
  orangeJuice: {
    position: "absolute",
    top: 228,
    left: 22,
    fontSize: 24,
    fontStyle: "italic",
    fontFamily: "Epilogue",
    color: "#000",
    textAlign: "left",
  },
  c100kcalP6gF132gCr6043: {
    position: "absolute",
    top: 253,
    left: 22,
    fontSize: 15,
    fontStyle: "italic",
    fontFamily: "Epilogue",
    color: "#000",
    textAlign: "left",
  },
  iconAddCircle3: {
    position: "absolute",
    height: "8.78%",
    width: "10.48%",
    top: "54.04%",
    right: "5.34%",
    bottom: "37.18%",
    left: "84.18%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  rectangleView6: {
    position: "absolute",
    top: 301,
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
  days: {
    position: "absolute",
    top: 304,
    left: 22,
    fontSize: 24,
    fontStyle: "italic",
    fontFamily: "Epilogue",
    color: "#000",
    textAlign: "left",
  },
  c100kcalP6gF132gCr6044: {
    position: "absolute",
    top: 329,
    left: 22,
    fontSize: 15,
    fontStyle: "italic",
    fontFamily: "Epilogue",
    color: "#000",
    textAlign: "left",
  },
  iconAddCircle4: {
    position: "absolute",
    height: "8.78%",
    width: "10.48%",
    top: "71.59%",
    right: "5.34%",
    bottom: "19.63%",
    left: "84.18%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  rectangleView7: {
    position: "absolute",
    top: 377,
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
  snack: {
    position: "absolute",
    top: 380,
    left: 22,
    fontSize: 24,
    fontStyle: "italic",
    fontFamily: "Epilogue",
    color: "#000",
    textAlign: "left",
  },
  c100kcalP6gF132gCr6045: {
    position: "absolute",
    top: 405,
    left: 22,
    fontSize: 15,
    fontStyle: "italic",
    fontFamily: "Epilogue",
    color: "#000",
    textAlign: "left",
  },
  iconAddCircle5: {
    position: "absolute",
    height: "8.78%",
    width: "10.48%",
    top: "89.15%",
    right: "5.34%",
    bottom: "2.08%",
    left: "84.18%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  frameView: {
    position: "absolute",
    top: 129,
    left: 18,
    width: 354,
    height: 433,
  },
  icon1: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  iconChevronDown: {
    position: "absolute",
    left: "3.96%",
    top: "1.85%",
    right: "90.89%",
    bottom: "94.73%",
    width: "5.15%",
    height: "3.43%",
  },
  vectorIcon: {
    position: "absolute",
    height: "2.37%",
    width: "5.13%",
    top: "2.01%",
    right: "6.41%",
    bottom: "95.62%",
    left: "88.46%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  iconAdd: {
    position: "absolute",
    height: "2.61%",
    width: "5.64%",
    top: "6.75%",
    right: "84.1%",
    bottom: "90.64%",
    left: "10.26%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  rectangleView8: {
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
  youreAddingMealTo2ndBre: {
    position: "absolute",
    top: 806,
    left: 17,
    fontSize: 20,
    fontStyle: "italic",
    fontFamily: "Epilogue",
    color: "#000",
    textAlign: "left",
  },
  addYours: {
    position: "relative",
    backgroundColor: "#967474",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default AddYours1;
