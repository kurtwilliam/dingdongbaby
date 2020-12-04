import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";

import { withTheme } from "react-native-elements";
import Checkmark from "../assets/svgs/Checkmark";

function ChallengesHeader({ navigation, theme }) {
  const navigateToChallenge = () => {
    console.log("navigate to challenge", navigation);
  };
  return (
    <View style={styles.cont(theme)}>
      <View style={styles.challengesCont(theme)}>
        <Text style={styles.challengesFont(theme)}>Challenges</Text>
        <View style={styles.totalCont(theme)}>
          <View style={styles.checkCont(theme)}>
            <Checkmark stroke={theme.colors.G6} />
          </View>
          <Text style={styles.checkCount(theme)}>12/200</Text>
        </View>
      </View>
    </View>
  );
}

//rnss
const styles = StyleSheet.create({
  challengesCont: theme => ({
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }),
  cont: theme => ({
    position: "relative",
    backgroundColor: "red"
  }),
  challengesFont: theme => ({
    fontSize: 30,
    fontFamily: "SFCompactRoundedBold",
    textTransform: "lowercase"
  }),
  checkCont: theme => ({
    width: 16,
    height: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.G2,
    borderRadius: 50,
    marginRight: 8
  }),
  totalCont: theme => ({
    flexDirection: "row",
    alignItems: "center"
  }),
  checkCount: theme => ({
    fontSize: 14,
    color: theme.colors.G6
  })
});

export default withTheme(ChallengesHeader);
