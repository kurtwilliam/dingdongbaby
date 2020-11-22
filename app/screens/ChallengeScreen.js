import React, { useContext } from "react";
import { StyleSheet, View, SafeAreaView, ScrollView, Text } from "react-native";
import { withTheme } from "react-native-elements";

import { UserContext } from "../state/UserContext";
import DailyChallengeContainer from "../components/DailyChallengeContainer";
import ChallengesContainer from "../components/ChallengesContainer";
import NavigationButtons from "../components/NavigationButtons";

//rsf
function ChallengeScreen({ navigation, theme }) {
  // const { user } = useContext(UserContext);
  console.log("here");
  // const { id, emoji, name, difficulty } = challenge;

  return (
    <SafeAreaView style={styles.safeArea(theme)}>
      <Text>ho</Text>
      {/* <ImageBackground
        source={require("../assets/AppBackground.png")}
        style={styles.appBg}
      > */}

      {/* <View style={styles.containerLeft(theme)}>
        <Text>{name}</Text>
        <View style={styles.containerLeftDetails(theme)}>
          <View style={styles.favContainer(theme)}>
            <Text>{id}</Text>
            <View style={styles.fav(theme)}></View>
          </View>
          <View style={styles.difficultyContainer(theme)}>
            {[...Array(difficulty)].map((e, i) => (
              <View key={i} style={styles.difficultyCircle(theme)} />
            ))}
          </View>
        </View>
      </View>
      <View style={styles.containerRight(theme)}>
        <Text>{emoji}</Text>
      </View> */}

      {/* <PhotoButton /> */}

      {/* </ImageBackground> */}
    </SafeAreaView>
  );
}

//rnss
const styles = StyleSheet.create({
  container: theme => ({
    position: "relative",
    flexDirection: "column",
    flex: 1,
    padding: 8,
    paddingTop: 115,
    background: "blue"
  }),
  containerView: theme => ({
    position: "relative",
    flexDirection: "column",
    justifyContent: "space-between",
    flex: 1,
    minHeight: "100vh",
    backgroundColor: "red"
  }),
  safeArea: theme => ({
    backgroundColor: theme.colors.Black,
    flex: 1
  })
});

export default withTheme(ChallengeScreen);
