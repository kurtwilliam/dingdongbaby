import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

import { withTheme } from "react-native-elements";

function NavigationButtons({ theme }) {
  return (
    <View style={styles.container(theme)}>
      <View style={styles.buttonsContainer(theme)}>
        <Pressable onPress={() => console.log("first button TODO Navigate")}>
          <View></View>
        </Pressable>
        <Pressable onPress={() => console.log("second button")}>
          <View></View>
        </Pressable>
        <Pressable onPress={() => console.log("third button")}>
          <View></View>
        </Pressable>
      </View>
    </View>
  );
}

//rnss
const styles = StyleSheet.create({
  container: theme => ({
    position: "relative"
  }),
  buttonsContainer: theme => ({})
});

export default withTheme(NavigationButtons);
