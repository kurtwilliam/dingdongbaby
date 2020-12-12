import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { withTheme } from "react-native-elements";
import ChallengesHeader from "./ChallengesHeader";
import AppContext from "../state/AppContext";
import HomeChallenge from "./HomeChallenge";

function ChallengesContainer({ theme }) {
  const { app } = useContext(AppContext);
  const { challenges } = app;

  return (
    <View style={styles.container(theme)}>
      <View style={styles.challengesScroll(theme)}>
        {challenges.map(challenge => (
          <HomeChallenge key={challenge.id} challenge={challenge} />
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
  challengesScroll: theme => ({
    width: "100%",
    flex: 1,
    flexDirection: "column"
  })
});

export default withTheme(ChallengesContainer);
