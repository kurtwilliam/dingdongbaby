import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { ThemeProvider } from "react-native-elements";
import { withTheme } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import PouchDB from "pouchdb-react-native";

import { ChallengesContext } from "./state/ChallengesContext";
import { storeData, getData } from "./storage";
import HomeScreen from "./screens/HomeScreen";
import IntroScreen from "./screens/IntroScreen";
// import CountersScreen from "./screens/CountersScreen";
import SettingsScreen from "./screens/SettingsScreen";

const Stack = createStackNavigator();

const db = new PouchDB("mydb");
console.log("db.adapter", db.adapter);
db.get("4711").then(doc => console.log("hello i am doc", doc));

//rsf
const Main = props => {
  const [settings, setSettings] = useState([]);

  let theme = {
    colors: {
      primary: "#EAE6E1",
      Beige1: "#EAE6E1"
    }
  };

  useEffect(() => {
    async function fetchData() {
      const storageState = await getData().catch(err => console.log(err));
      const { settings } = storageState;

      setSettings(
        Object.keys(settings).length > 0
          ? settings
          : [
              {
                id: "darkMode",
                title: "Dark Mode",
                selected: false,
                description: "Makes the UI dark.",

                selectedSlant: Math.random() > 0.5 ? "-1deg" : "1deg"
              }
            ]
      );
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function saveStorage() {
      saveToStorage();
    }

    saveStorage();
  }, [settings]);

  const saveToStorage = async () =>
    await storeData({
      settings
    });

  return (
    <ThemeProvider theme={theme}>
      <ChallengesContext.Provider
        value={{
          settings,
          setSettings
        }}
      >
        <NavigationContainer>
          <SafeAreaView style={styles.container(theme)}>
            <Stack.Navigator>
              <Stack.Screen
                name="Intro"
                component={IntroScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Settings"
                component={SettingsScreen}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </SafeAreaView>
        </NavigationContainer>
      </ChallengesContext.Provider>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: theme => ({
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: theme.colors.Black
  })
});

export default withTheme(Main);
