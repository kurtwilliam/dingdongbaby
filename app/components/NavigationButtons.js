import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { withTheme } from "react-native-elements";
import Spacer from "./styleComponents/Spacer";
import Album from "../assets/svgs/Album";
import AlbumFilled from "../assets/svgs/AlbumFilled";
import Camera from "../assets/svgs/Camera";
import CameraFilled from "../assets/svgs/CameraFilled";
import AppContext from "../state/AppContext";

function NavigationButtons({ theme }) {
  const { setSelectedHomeScreen, selectedHomeScreen } = useContext(AppContext);
  console.log(selectedHomeScreen);
  return (
    <View style={styles.cont(theme)}>
      <TouchableOpacity
        style={styles.button(theme)}
        onPress={() => setSelectedHomeScreen("challenges")}
      >
        {selectedHomeScreen === "challenges" ? <CameraFilled /> : <Camera />}
        <Text
          style={[
            styles.challengesFont(theme),
            {
              color:
                selectedHomeScreen === "challenges"
                  ? theme.colors.G7
                  : theme.colors.G6
            }
          ]}
        >
          challenges
        </Text>
      </TouchableOpacity>
      <Spacer width={4} height={1} />
      <TouchableOpacity
        style={styles.button(theme)}
        onPress={() => setSelectedHomeScreen("album")}
      >
        {selectedHomeScreen === "album" ? <AlbumFilled /> : <Album />}
        <Text
          style={[
            styles.challengesFont(theme),
            {
              color:
                selectedHomeScreen === "album"
                  ? theme.colors.G7
                  : theme.colors.G6
            }
          ]}
        >
          album
        </Text>
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
