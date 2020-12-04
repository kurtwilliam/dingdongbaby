import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { withTheme } from "react-native-elements";
import ChallengesHeader from "./ChallengesHeader";
import ChallengesContext from "../state/ChallengesContext";
import HomeChallenge from "./HomeChallenge";
import HomeUpsellContainer from "./HomeUpsellContainer";
import UnlockChallengesHeader from "./UnlockChallengesHeader";

function UnlockChallengesContainer({ theme }) {
  const { challenges } = useContext(ChallengesContext);

  console.log("ah");
  return (
    <View style={styles.container(theme)}>
      <UnlockChallengesHeader />
      <HomeUpsellContainer />

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
    paddingLeft: 16,
    paddingRight: 16,
    flex: 1,
    flexDirection: "column"
  })
});

export default withTheme(UnlockChallengesContainer);
