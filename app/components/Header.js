import React, { useContext, useState, useEffect, useRef } from "react";
import { StyleSheet, View, Text } from "react-native";
import { withTheme } from "react-native-elements";

function HomeScreen({ navigation, theme }) {
  return (
    <View style={styles.container}>
      <Text>Le Header xd</Text>
    </View>
  );
}

//rnss
const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%"
  }
});

export default withTheme(HomeScreen);
