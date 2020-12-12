import React, { useContext } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import AppBackground from "../components/AppBackground";
import SettingContainer from "../components/SettingContainer";
import XClose from "../assets/svgs/XClose";
import { withTheme } from "react-native-elements";
import GradientButton from "../components/GradientButton";
import SettingsContext from "../state/SettingsContext";
import HeaderCloseBar from "../components/HeaderCloseBar";

//rsf
const SettingScreen = ({ route, theme, navigation }) => {
  const { selectedSetting } = useContext(SettingsContext);
  return (
    <AppBackground>
      <View style={styles.headerCont}>
        <HeaderCloseBar copy={selectedSetting.title} navigateTo="Settings" />
      </View>
    </AppBackground>
  );
};

//rnss
const styles = StyleSheet.create({
  headerCont: {
    padding: 16
  }
});

export default withTheme(SettingScreen);
