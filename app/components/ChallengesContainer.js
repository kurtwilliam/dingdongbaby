import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { withTheme } from "react-native-elements";
import ChallengesHeader from "./ChallengesHeader";
import ChallengesContext from "../state/ChallengesContext";
import UserContext from "../state/UserContext";
import Challenge from "./Challenge";

function ChallengesContainer({ navigation, theme }) {
  const challenges = useContext(ChallengesContext);
  const user = useContext(UserContext);

  const navigateToChallenge = () => {
    console.log("navigate to challenge", navigation);
  };
  return (
    <View style={styles.container(theme)}>
      <ChallengesHeader style={styles.top(theme)} />
      <View style={styles.challengesScroll(theme)}>
        {challenges.map(challenge => (
          <Challenge
            key={challenge.id}
            onPress={() => navigateToChallenge()}
            challenge={challenge}
          />
        ))}
      </View>
    </View>
  );
}

//rnss
const styles = StyleSheet.create({
  container: theme => ({
    position: "relative",
    flex: 1
  }),
  top: theme => ({}),
  challengesScroll: theme => ({
    width: "100%",
    paddingLeft: 16,
    paddingRight: 16,
    flex: 1,
    flexDirection: "column"
  })
});

export default withTheme(ChallengesContainer);
