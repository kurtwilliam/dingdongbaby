import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { withTheme } from "react-native-elements";
import ChallengesHeader from "./ChallengesHeader";
import AppContext from "../state/AppContext";
import HomeChallenge from "./HomeChallenge";
import UpsellContainer from "./UpsellContainer";
import UnlockChallengesHeader from "./UnlockChallengesHeader";

function UnlockChallengesContainer({ theme }) {
  const { app } = useContext(AppContext);
  return (
    <View style={styles.container(theme)}>
      <UnlockChallengesHeader />
      <UpsellContainer />

      <View style={styles.challengesScroll(theme)}>
        {app.lockedChallenges.map(challenge => (
          <HomeChallenge
            key={challenge.id}
            challenge={challenge}
            locked={true}
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
  challengesScroll: theme => ({
    width: "100%",
    flex: 1,
    flexDirection: "column"
  })
});

export default withTheme(UnlockChallengesContainer);
