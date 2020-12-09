import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { withTheme } from "react-native-elements";
import Spacer from "./Spacer";
import Album from "../assets/svgs/Album";
import Camera from "../assets/svgs/Camera";

function NavigationButtons({ theme }) {
  return (
    <View style={styles.cont(theme)}>
      <TouchableOpacity
        style={styles.button(theme)}
        onPress={() => console.log("first button TODO Navigate")}
      >
        <Camera />
        <Text style={styles.challengesFont(theme)}>challenges</Text>
      </TouchableOpacity>
      <Spacer width={4} height={1} />
      <TouchableOpacity
        style={styles.button(theme)}
        onPress={() => console.log("third button")}
      >
        <Album />
        <Text style={styles.challengesFont(theme)}>album</Text>
      </TouchableOpacity>
    </View>
  );
}

//rnss
const styles = StyleSheet.create({
  challengesFont: theme => ({
    fontSize: 12,
    fontFamily: "SFCompactRoundedBold",
    textTransform: "lowercase",
    color: theme.colors.G8
  }),
  cont: theme => ({
    backgroundColor: theme.colors.G3,
    position: "relative",
    width: "100%",
    height: "auto",
    padding: 4,
    flexDirection: "row"
  }),
  button: theme => ({
    flex: 1,
    borderRadius: 8,
    backgroundColor: theme.colors.G1,
    justifyContent: "center",
    alignItems: "center",
    padding: 4
  })
});

export default withTheme(NavigationButtons);
