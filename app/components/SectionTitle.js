import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { ChallengesContext } from "../state/ChallengesContext";

import { withTheme } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";

function SectionTitle({ sectionTitle, theme }) {
  const { settings } = useContext(ChallengesContext);

  return (
    <View style={styles.container(theme)}>
      <Text style={styles.title(theme)}>{sectionTitle}</Text>
      {/* <LinearGradient
        colors={["#AAA191", "transparent"]}
        style={styles.gradient}
      ></LinearGradient> 
      <Text style={styles.count(theme)}>
        {sectionTitle === "Settings" && settings
          ? settings.length
          : counters.length}
      </Text>*/}
    </View>
  );
}

//rnss
const styles = StyleSheet.create({
  container: theme => ({
    position: "relative",
    flexDirection: "row",
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    marginBottom: 8
  }),
  title: theme => ({
    paddingLeft: 12,
    paddingRight: 12,
    fontWeight: "bold",
    textTransform: "uppercase",
    borderRightWidth: 1,
    borderTopWidth: 0
  })
});

export default withTheme(SectionTitle);
