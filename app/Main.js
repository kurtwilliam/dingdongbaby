import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { ThemeProvider } from "react-native-elements";
import { withTheme } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import axios from "axios";

import ChallengesContext from "./state/ChallengesContext";
import UserContext from "./state/UserContext";
import AppContext from "./state/AppContext";
import { storeData, getData } from "./storage";
import HomeScreen from "./screens/HomeScreen";
import IntroScreen from "./screens/IntroScreen";
import SettingsScreen from "./screens/SettingsScreen";
import ChallengeScreen from "./screens/ChallengeScreen";

import storageHelpers from "./helpers/storageHelpers";

const Stack = createStackNavigator();
// const isTesting = true;
// if (isTesting) {
axios.defaults.baseURL = `https://dindongbaby.loca.lt`;
// } else {
// TODO: Add server url
//}

//rsf
const Main = props => {
  // const [settings, setSettings] = useState([]);
  const [challenges, setChallenges] = useState([]);
  const [user, setUser] = useState({});
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  // const [ipAddress, setIpAddress] = useState();

  let theme = {
    colors: {
      primary: "#EAE6E1",
      Beige1: "#EAE6E1"
    }
  };

  useEffect(() => {
    async function fetchData() {
      let newServerUrl;
      // const ip = await storageHelpers.getIPFromAmazon();
      // setIpAddress(ip.trim());
      // const storageState = await getData().catch(err => console.log(err));
      // const { settings } = storageState;

      // TODO fetch data from server from DB

      // setSettings(
      //   Object.keys(settings).length > 0
      //     ? settings
      //     : [
      //         {
      //           id: "darkMode",
      //           title: "Dark Mode",
      //           selected: false,
      //           description: "Makes the UI dark.",

      //           selectedSlant: Math.random() > 0.5 ? "-1deg" : "1deg"
      //         }
      //       ]
      // );
      setChallenges([
        {
          id: 1,
          name: `Bring me my mount`,
          desc: `Do your best to capture baby upon the household steed (pet). If you don't have a pet try their favourite stuffed animal, vegetable or a loaf of fresh bread.`,
          emoji: `🏇`,
          captions: ["I shall protect you, mother! TO WAR!!"],
          hashtags: [],
          warning:
            "Ride your pet ride it irig did id i didn't even know that holy guacamoe",
          tip:
            "Ride your pet ride it irig did id i didn't even know that holy guacamoeRide your pet ride it irig did id i didn't even know that holy guacamoe",
          difficulty: 2
        },
        {
          id: 2,
          name: `Lil Muscle`,
          desc: `Use makeup to contour muscles, add a headband for extra effect.`,
          emoji: `🥋`,
          captions: ["I traine very day lol"],
          hashtags: ["muscle", "train", "yoyo"],
          warning: "MUSCLEEEEEEEEEE MUSCLE MUCLSE MUSLCEM MULSCEL",
          tip:
            "Ride your pet ride it irig did id i didn't even know that holy guacamoe",
          difficulty: 1
        },
        {
          id: 3,
          name: `Baby Daddy`,
          desc: `Your baby is now daddy. Please make them look like daddy (but ideally more handsome).`,
          emoji: `🧍‍♂️`,
          captions: ["I shall protect you, mother! TO WAR!!"],
          hashtags: [],
          warning: "",
          tip: "",
          difficulty: 2
        },
        {
          id: 4,
          name: `Mini Gordon Ramsay`,
          desc: `BACK TO THE KITCHEN! Dress your baby as a chef then feed them food they dislike, so they look like a food critic eating something revolting.`,
          emoji: `🏇`,
          captions: [
            "GRANDMA COULD MAKE BETTER FOOD THAN THIS",
            "Mom I told you more sugar. What is this?!"
          ],
          hashtags: [],
          warning: "",
          tip: "",
          difficulty: 2
        },
        {
          id: 5,
          name: `Bugah want rock`,
          desc: `Me baby. Me caveman. Want thick eyebrow, soft loincloth, good rocks for make play.`,
          emoji: `🏇`,
          captions: [""],
          hashtags: [],
          warning: "",
          tip: "",
          difficulty: 1
        }
      ]);

      const serverUser = await storageHelpers.getUserFromServer(newServerUrl);

      setUser(serverUser);
    }
    fetchData();
  }, []);

  // useEffect(() => {
  //   async function saveStorage() {
  //     saveToStorage();
  //   }

  //   saveStorage();
  // }, [settings]);

  // const saveToStorage = async () =>
  //   await storeData({
  //     settings
  //   });
  console.log(user);
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <ChallengesContext.Provider value={{ challenges, setChallenges }}>
          <UserContext.Provider value={{ user, setUser }}>
            <AppContext.Provider
              value={{ selectedChallenge, setSelectedChallenge }}
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
                </Stack.Navigator>
              </SafeAreaView>
            </AppContext.Provider>
          </UserContext.Provider>
        </ChallengesContext.Provider>
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
