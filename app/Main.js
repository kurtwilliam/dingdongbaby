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
import CaptionsScreen from "./screens/CaptionsScreen";
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
  const [selectedHomeScreen, setSelectedHomeScreen] = useState("challenges");
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
          console.log("getAppData");
          if (data && Object.keys(data).length) {
            console.log("setApp");
            setApp(data);
            return (appCacheData = data);
          } else {
            let newApp = storageHelpers.setInitialApp;
            console.log("storeAppData");
            storeAppData(newApp);
            return (appCacheData = newApp);
          }
        })
        .catch(err => console.log(err));

      let userCacheData;
      await getUserData()
        .then(data => {
          console.log("storageData");
          if (data && Object.keys(data).length) {
            console.log("setUser");
            return (userCacheData = data);
          } else {
            let newUser = storageHelpers.setInitialUser;
            storeUserData(newUser);
            return (userCacheData = newUser);
          }
        })
        .catch(err => console.log(err));
      console.log(
        "userCacheData.length, appCacheData.length",
        userCacheData.length,
        appCacheData.length
      );

      if (
        Object.keys(userCacheData).length &&
        Object.keys(appCacheData).length
      ) {
        setPhotoForHomeChallenge(userCacheData, appCacheData);
      } else {
        setApp(appCacheData);
        setUser(userCacheData);
      }

      // TODO fetch data from server from DB if Authenticated

      // want to see if server or cache is more recent
      // let serverUser;
      // console.log("CACHE DATA", cacheData);
      // if (Object.keys(cacheData).length) {
      //   serverUser = await storageHelpers.postIsCacheOrServerNewer(cacheData);
      // } else serverUser = await storageHelpers.getUserFromServer(newServerUrl);

      // if (Object.keys(serverUser).length) setUser(serverUser);
    }
    // clearAll();
    if (!Object.keys(app).length || !Object.keys(user).length) {
      fetchData();
    }
  }, []);

  useEffect(() => {
    const storeUserDataAsync = async () => await storeUserData(user);
    storeUserDataAsync();
  }, [user]);

  const updateUser = (value, name) => {
    let newUser = JSON.parse(JSON.stringify(user));
    newUser[name] = value;
    setUser(newUser);
  };

  const updateCompletedChallenge = (value, name, id) => {
    let newUser = JSON.parse(JSON.stringify(user));
    const thisChallengeIndex = newUser.completedChallenges.findIndex(
      chal => chal.id === id
    );
    newUser.completedChallenges[thisChallengeIndex][name] = value;
    console.log("newUsernewUsernewUser", newUser);
    setUser(newUser);
  };

  const setPhotoForHomeChallenge = (userParam, appParam) => {
    let newUser = JSON.parse(JSON.stringify(userParam));
    let newApp = JSON.parse(JSON.stringify(appParam ? appParam : app));
    newUser.completedChallenges.forEach(compChal => {
      const matchingChalIndex = newApp.challenges.findIndex(
        chal => chal.id === compChal.challengeId
      );

      if (matchingChalIndex > -1) {
        return (newApp.challenges[matchingChalIndex].photo = compChal.path);
      }
    });
    setApp(newApp);
    setUser(newUser);
  };

  if (!fontLoaded || !user) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <UserContext.Provider
          value={{
            user,
            setUser,
            updateUser,
            setPhotoForHomeChallenge,
            updateCompletedChallenge
          }}
        >
          <AppContext.Provider
            value={{
              selectedChallenge,
              setSelectedChallenge,
              app,
              selectedHomeScreen,
              setSelectedHomeScreen
            }}
          >
            <SettingsContext.Provider
              value={{ selectedSetting, setSelectedSetting, allSettings }}
            >
              <SafeAreaView style={styles.container(theme)}>
                <Stack.Navigator>
                  {user.hasViewedIntro ? (
                    []
                  ) : (
                    <Stack.Screen
                      name="Intro"
                      component={IntroScreen}
                      options={{ headerShown: false }}
                    />
                  )}
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
                  <Stack.Screen
                    name="Captions"
                    component={CaptionsScreen}
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
