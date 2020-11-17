import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";

import { withTheme } from "react-native-elements";

function PhotoCard({ theme }) {
  return (
    <View style={styles.container(theme)}>
      <View style={styles.top(theme)}></View>
      <Text>card</Text>
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

export default withTheme(PhotoCard);
