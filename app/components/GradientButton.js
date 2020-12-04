import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

import { withTheme } from "react-native-elements";

function GradientButton({ theme, copy }) {
  return (
    <View style={styles.gradientBorder(theme)}>
      <Button style={styles.button(theme)} title={copy} />
    </View>
  );
}

//rnss
const styles = StyleSheet.create({
  button: theme => ({
    padding: 12,
    backgroundColor: theme.colors.G9,
    width: "100%"
  }),
  gradientBorder: theme => ({
    width: "100%",
    borderRadius: 12,
    padding: 4
  })
});

export default withTheme(GradientButton);
