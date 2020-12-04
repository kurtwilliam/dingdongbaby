import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import SettingsBaby from "../assets/svgs/settingsBaby";
import { withTheme } from "react-native-elements";

function HomeSettingsContainer({ theme }) {
  return (
    <View style={styles.container(theme)}>
      <SettingsBaby />
    </View>
  );
}

//rnss
const styles = StyleSheet.create({
  container: theme => ({
    position: "relative",
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
    backgroundColor: "pink"
  }),
  top: theme => ({})
});

export default withTheme(HomeSettingsContainer);
