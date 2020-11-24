import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AppContext from "../state/AppContext";
import ChallengeDetails from "./ChallengeDetails";

import { withTheme } from "react-native-elements";

function Challenge({ theme, challenge }) {
  const { setSelectedChallenge } = useContext(AppContext);
  const navigation = useNavigation();

  const navigateToChallenge = () => {
    console.log("navigate to challenge", navigation);
    setSelectedChallenge(challenge.id);
    return navigation.navigate("Challenge");
  };

  // TODO: refactor color of difficulty
  return (
    <Pressable onPress={() => navigateToChallenge()}>
      <View style={styles.container(theme)}>
        <ChallengeDetails challenge={challenge} />
      </View>
    </Pressable>
  );
}

//rnss
const styles = StyleSheet.create({
  container: theme => ({
    position: "relative",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    borderRadius: 12,
    background: "#FFFFFF",
    paddingTop: 12,
    paddingLeft: 12,
    paddingBottom: 12,
    paddingRight: 12
  })
});

export default withTheme(Challenge);
