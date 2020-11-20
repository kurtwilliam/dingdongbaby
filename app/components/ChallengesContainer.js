import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";

import { withTheme } from "react-native-elements";

function ChallengesContainer({ theme }) {
  return (
    <View style={styles.container(theme)}>
      <ChallengesHeader style={styles.top(theme)}></ChallengesHeader>
      <View style={styles.challengesScroll}>
        {challenges.map(challenge => (
          <Challenge challenge={challenge} />
        ))}
      </View>
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

export default withTheme(ChallengesContainer);
