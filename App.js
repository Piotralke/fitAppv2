const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer} from "@react-navigation/native";
import { useFonts } from "expo-font";
import Login from "./screens/Login";
import Scan from "./screens/Scan";
import Settings1 from "./screens/Settings1";
import Register from "./screens/Register";
import Menu from "./screens/Menu";
import Steps from "./screens/Steps";
import MainView from "./screens/MainView";
import MealProperties from "./screens/MealProperties";
import AddAdd from "./screens/AddAdd";
import AddYours from "./screens/AddYours";
import AddHistory from "./screens/AddHistory";
import AddMakeNew from "./screens/AddMakeNew";
import AddSearch from "./screens/AddSearch";
import Yours1 from "./components/Yours1";
import Yours from "./components/Yours";
import Add1 from "./components/Add1";
import Add from "./components/Add";
import History from "./components/History";
import History1 from "./components/History1";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { IconRegistry, ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { useNavigation, useRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  Button,
} from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";



const Drawer = createDrawerNavigator();

const Tab = createBottomTabNavigator();

function DrawerRoot({ navigation }) {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false, drawerStyle: { width: 207 },unmountOnBlur: true }}
      drawerContent={(props) => <Menu {...props} />}
    >

      <Drawer.Screen name="BottomTabsRoot" 
      component={BottomTabsRoot} 
      screenOptions={{ unmountOnBlur: true }}
      />
      
      <Stack.Screen
        name="Settings"
        component={Settings1}
        options={{ headerShown: true,
          title: "",
          headerStyle: {backgroundColor:"#91c789"}}}
      />

      <Stack.Screen
        name="MainView"
        component={MainView}
        options={{ headerShown: true,
          title: "",
         headerStyle: {backgroundColor:"#91c789"}}}
      />
      
    </Drawer.Navigator>
  );
}
function BottomTabsRoot({ navigation }) {
  const route = useRoute();
  const cat_name = route.params.name;
  const date = route.params.date;
  console.log(cat_name);
  console.log(route.params.date);
  
  const [bottomTabItemsNormal] = React.useState([
    <Yours/>,
    <Add />,
    <History />,
  ]);
  const [bottomTabItemsActive] = React.useState([
    <Yours1/>,
    <Add1 />,
    <History1 />,
  ]);
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, unmountOnBlur: true }}
      tabBar={({ state, descriptors, navigation }) => {
        const activeIndex = state.index;
        return (
          <View
            style={{
              width: 414,
              height: 55,
              flexDirection: "row",
              paddingLeft: "10%",
              backgroundColor: "#91c789",
            }}
          >
            {bottomTabItemsNormal.map((item, index) => {
              const isFocused = state.index === index;
              return (
                <Pressable
                  onPress={() => {
                    navigation.navigate({
                      name: state.routes[index].name,
                      catName: {cat_name},
                      merge: true,
                    });
                  }}
                >
                  {activeIndex === index
                    ? bottomTabItemsActive[index] || item
                    : item}
                </Pressable>
              );
            })}
          </View>
        );
      }}
    >
      <Tab.Screen
        name="AddYours"
        component={AddYours}
        options={{ 
          unmountOnBlur: true,
          headerShown: true,
          headerLeft: () => (
            <Pressable
             onPress={() => navigation.navigate("MainView", {date: date})}
            >
            <Image
            style={styles.back}
            resizeMode="cover"
            source={require("./assets/-icon-chevron-down14.png")}
        />
          </Pressable>
          ),
          headerTitle: () => (
          <TextInput 
          style={styles.search} 
            placeholder="Search"
            keyboardType="default"
            placeholderTextColor="#fff"
          />
          ),
          headerRight: () =>(
            <Pressable onPress={() => navigation.navigate("Scan")}>
            <Image
            style={styles.scan}
            resizeMode="cover"
            source={require("./assets/vector4.png")}
            />
            </Pressable>
          ),
          headerStyle: {backgroundColor:"#91c789"}}}
      />
      <Tab.Screen
        name="AddAdd"
        component={AddAdd}
        options={{ 
          unmountOnBlur: true ,
          headerShown: true,
          headerLeft: () => (
            <Pressable
             onPress={() => navigation.navigate("MainView", {date: date})}
            >
            <Image
            style={styles.back}
          resizeMode="cover"
          source={require("./assets/-icon-chevron-down14.png")}
        />
          </Pressable>
          ),
          headerTitle: "",
          headerStyle: {backgroundColor:"#91c789"}}}
      />
      <Tab.Screen
        name="AddHistory"
        component={AddHistory}
        options={{ 
          unmountOnBlur: true ,
          headerShown: true,
          headerLeft: () => (
            <Pressable
             onPress={() => navigation.navigate("MainView", {date: date})}
            >
            <Image
            style={styles.back}
          resizeMode="cover"
          source={require("./assets/-icon-chevron-down14.png")}
        />
          </Pressable>
          ),
          headerTitle: () => (
          <TextInput  
            style={styles.search}
            placeholder="Search"
            keyboardType="default"
            placeholderTextColor="#fff"
          />
          ),
          headerRight: () =>(
            <Pressable onPress={() => navigation.navigate("Scan")}>
            <Image
            style={styles.scan}
            resizeMode="cover"
            source={require("./assets/vector4.png")}
            />
            </Pressable>
          ),
          headerStyle: {backgroundColor:"#91c789"}}}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  useFonts({
    Epilogue: require("./assets/fonts/Epilogue.ttf"),
    Roboto: require("./assets/fonts/Roboto.ttf"),
    Inter: require("./assets/fonts/Inter.ttf"),
  });

  function MaterialIcon({ name, style }) {
    const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style);
    return (
      <MIcon name={name} size={height} color={tintColor} style={iconStyle} />
    );
  }

  const IconProvider = (name) => ({
    toReactElement: (props) => MaterialIcon({ name, ...props }),
  });

  function createIconsMap() {
    return new Proxy(
      {},
      {
        get(target, name) {
          return IconProvider(name);
        },
      }
    );
  }
  const MaterialIconsPack = {
    name: "material",
    icons: createIconsMap(),
  };
  return (
    <>
      <IconRegistry icons={[MaterialIconsPack]} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          {hideSplashScreen ? (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
              />

              <Stack.Screen name="DrawerRoot" component={DrawerRoot} />

              <Stack.Screen
                name="Scan"
                component={Scan}
                options={{ headerShown: false }}
              />
              
              <Stack.Screen
                name="Register"
                component={Register}
                options={{ headerShown: false }}
              />

              <Stack.Screen
                name="Steps"
                component={Steps}
                options={{ headerShown: true,
                  title: "",
                  headerStyle: {backgroundColor:"#91c789"}}}
              />

              
              <Stack.Screen
                name="MealProperties"
                component={MealProperties}
                options={{ headerShown: true,
                  title: "",
                  headerStyle: {backgroundColor:"#91c789"}}}
              />
              
              <Stack.Screen
                name="AddMakeNew"
                component={AddMakeNew}
                options={{ headerShown: true,
                  title: "",
                  headerStyle: {backgroundColor:"#91c789"}}}
              />
              <Stack.Screen
                name="AddSearch"
                component={AddSearch}
                options={{ headerShown: true,
                  title: "",
                  headerStyle: {backgroundColor:"#91c789"}}}
              />
            </Stack.Navigator>
          ) : null}
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};
const styles = StyleSheet.create({
  rectangleView1: {
    backgroundColor: "#91c789",
    height: 55,
  },
  scan: {
    marginRight:12,
  },
  back: {
    marginLeft:12,
    marginTop:4,
  },
  search:{
    height: 30,
  },
  rectanglePressable: {
    position: "absolute",
    top: 7,
    left: 354,
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
}
);
export default App;
