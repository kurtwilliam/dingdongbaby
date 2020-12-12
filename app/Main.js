import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { ThemeProvider } from "react-native-elements";
import { withTheme } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import { AppLoading } from "expo";
import axios from "axios";

import UserContext from "./state/UserContext";
import AppContext from "./state/AppContext";
import SettingsContext from "./state/SettingsContext";
import {
  storeUserData,
  getUserData,
  getAppData,
  storeAppData,
  clearAll
} from "./storage";
import HomeScreen from "./screens/HomeScreen";
import IntroScreen from "./screens/IntroScreen";
import SettingsScreen from "./screens/SettingsScreen";
import SettingScreen from "./screens/SettingScreen";
import ChallengeScreen from "./screens/ChallengeScreen";
import theme from "./theme";
import storageHelpers from "./helpers/storageHelpers";
import { allSettings } from "./helpers/appData";

const Stack = createStackNavigator();
// const isTesting = true;
// if (isTesting) {
axios.defaults.baseURL = `https://dindongbaby.loca.lt`;
// } else {
// TODO: Add server url
//}

//rsf
const Main = props => {
  const [app, setApp] = useState({});
  const [user, setUser] = useState({});
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  const [selectedSetting, setSelectedSetting] = useState({});
  const [fontLoaded] = useFonts({
    SFCompactRoundedBold: require("../assets/fonts/SF-Compact-Rounded-Bold.otf")
  });

  useEffect(() => {
    async function fetchData() {
      // const ip = await storageHelpers.getIPFromAmazon();
      // setIpAddress(ip.trim());
      let appCacheData;
      await getAppData()
        .then(data => {
          console.log("getAppData", data);
          if (Object.keys(data).length) {
            console.log("setApp", data);
            setApp(data);
            return (appCacheData = data);
          } else {
            let newApp = storageHelpers.setInitialApp;
            console.log("storeAppData", newApp);
            setApp(newApp);
            storeAppData(newApp);
            return (appCacheData = newApp);
          }
        })
        .catch(err => console.log(err));

      await getUserData()
        .then(data => {
          console.log("storageData", data);
          if (Object.keys(data).length) {
            setUser(data);
            console.log("setUser", data);
            return;
          } else {
            let newUser = storageHelpers.setInitialUser;
            setUser(newUser);
            return;
          }
        })
        .catch(err => console.log(err));

      // TODO fetch data from server from DB if Authenticated

      // want to see if server or cache is more recent
      // let serverUser;
      // console.log("CACHE DATA", cacheData);
      // if (Object.keys(cacheData).length) {
      //   serverUser = await storageHelpers.postIsCacheOrServerNewer(cacheData);
      // } else serverUser = await storageHelpers.getUserFromServer(newServerUrl);

      // if (Object.keys(serverUser).length) setUser(serverUser);
    }
    fetchData();
  }, []);

  // useEffect(() => {
  //   async function saveStorage() {
  //     saveToStorage();
  //   }

  //   saveStorage();
  // }, [settings]);
  useEffect(() => {
    async function storeUserDataAsync() {
      return storeUserData(user);
    }
    storeUserDataAsync();
  }, [user]);

  const updateUser = (value, name) => {
    let newUser = JSON.parse(JSON.stringify(user));
    newUser[name] = value;
    setUser(newUser);
  };

  if (!fontLoaded || !user) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <UserContext.Provider value={{ user, setUser, updateUser }}>
          <AppContext.Provider
            value={{ selectedChallenge, setSelectedChallenge, app }}
          >
            <SettingsContext.Provider
              value={{ selectedSetting, setSelectedSetting, allSettings }}
            >
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
                    name="Challenge"
                    component={ChallengeScreen}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="Settings"
                    component={SettingsScreen}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="Setting"
                    component={SettingScreen}
                    options={{ headerShown: false }}
                  />
                </Stack.Navigator>
              </SafeAreaView>
            </SettingsContext.Provider>
          </AppContext.Provider>
        </UserContext.Provider>
      </ThemeProvider>
    </NavigationContainer>
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
