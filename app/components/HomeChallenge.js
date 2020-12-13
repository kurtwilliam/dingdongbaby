import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AppContext from "../state/AppContext";
import ChallengeDetails from "./ChallengeDetails";

import { withTheme } from "react-native-elements";

function HomeChallenge({ theme, challenge, locked }) {
  const { setSelectedChallenge } = useContext(AppContext);
  const navigation = useNavigation();

  const navigateToChallenge = () => {
    setSelectedChallenge(challenge.id);
    return navigation.navigate("Challenge");
  };

  // TODO: refactor color of difficulty
  return (
    <Pressable onPress={() => (locked ? null : navigateToChallenge())}>
      <View style={styles.container(theme)}>
        <ChallengeDetails challenge={challenge} homeChallenge={true} />
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
    backgroundColor: theme.colors.PureWhite,
    padding: 12,
    marginBottom: 4
  })
});

export default withTheme(HomeChallenge);
