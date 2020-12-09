import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AppContext from "../state/AppContext";
import GradientButton from "./GradientButton";
import CircleBar from "./CircleBar";

import { withTheme } from "react-native-elements";

function HomeUpsellContainer({ theme, challenge }) {
  // const { setSelectedChallenge } = useContext(AppContext);
  // const navigation = useNavigation();

  // const navigateToChallenge = () => {
  //   console.log("navigate to challenge", navigation);
  //   setSelectedChallenge(challenge.id);
  //   return navigation.navigate("Challenge");
  // };

  // TODO: refactor color of difficulty
  return (
    <View style={styles.cont(theme)}>
      <GradientButton copy="unlock challenges" />
      <View style={styles.spacer}></View>
      <CircleBar />
      <Text style={styles.comment(theme)}>
        hint - you should definitely not do it, your kid will look back and
        wonder what was wrong with you
      </Text>
    </View>
  );
}

//rnss
const styles = StyleSheet.create({
  cont: theme => ({
    position: "relative",
    width: "100%",
    borderRadius: 12,
    backgroundColor: theme.colors.PureWhite,
    padding: 12,
    marginBottom: 4
  }),
  spacer: { width: "100%", height: 12 },
  comment: theme => ({
    paddingTop: 12,
    fontSize: 12,
    color: theme.colors.G6,
    textAlign: "center"
  })
});

export default withTheme(HomeUpsellContainer);
