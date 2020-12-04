import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";

import { withTheme } from "react-native-elements";

function ChallengesHeader({ navigation, theme }) {
  const navigateToChallenge = () => {
    console.log("navigate to challenge", navigation);
  };
  return (
    <View style={styles.container(theme)}>
      <Text style={styles.challengesFont(theme)}>Challenges</Text>
    </View>
  );
}

//rnss
const styles = StyleSheet.create({
  container: theme => ({
    position: "relative",
    backgroundColor: "red"
  }),
  challengesFont: theme => ({
    fontSize: 30,
    fontFamily: "SFCompactRoundedBold"
  }),
  top: theme => ({})
});

export default withTheme(ChallengesHeader);
