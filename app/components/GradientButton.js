import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { withTheme } from "react-native-elements";

const GradientButton = ({ theme, copy }) => (
  <LinearGradient
    colors={theme.colors.Gradient}
    style={[styles.gradientBorder(theme), theme.shadow]}
    start={[0, 0]}
    end={[1, 1]}
  >
    <TouchableOpacity style={styles.button(theme)}>
      <Text style={styles.text(theme)}>{copy}</Text>
    </TouchableOpacity>
  </LinearGradient>
);

//rnss
const styles = StyleSheet.create({
  button: theme => ({
    padding: 12,
    backgroundColor: theme.colors.G9,
    width: "100%",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center"
  }),
  gradientBorder: theme => ({
    width: "100%",
    borderRadius: 12,
    padding: 4
  }),
  text: theme => ({
    color: theme.colors.PureWhite
  })
});

export default withTheme(GradientButton);
