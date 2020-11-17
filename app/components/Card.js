import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";

import { withTheme } from "react-native-elements";

function Card({ theme }) {
  return (
    <View style={styles.container(theme)}>
      <View style={styles.top(theme)}>
        <Text>card</Text>
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

export default withTheme(Card);
