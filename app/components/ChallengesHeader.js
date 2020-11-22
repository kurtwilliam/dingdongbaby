import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";

import { withTheme } from "react-native-elements";

function ChallengesHeader({ navigation, theme }) {
  const navigateToChallenge = () => {
    console.log("navigate to challenge", navigation);
  };
  return (
    <View style={styles.container(theme)}>
      <Text>Challenges</Text>
    </View>
  );
}

//rnss
const styles = StyleSheet.create({
  container: theme => ({
    position: "relative"
  }),
  top: theme => ({})
});

export default withTheme(ChallengesHeader);
