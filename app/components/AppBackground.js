import React, { useContext, useState, useEffect } from "react";
import {
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  View
} from "react-native";
import Spacer from "./Spacer";
import NavigationButtons from "./NavigationButtons";
import { withTheme } from "react-native-elements";

const AppBackground = ({ theme, children, hasNavigationButtons }) => (
  <SafeAreaView style={styles.safeArea(theme)}>
    <ImageBackground
      source={require("../assets/AppBackground.png")}
      style={[styles.scroll, { resizeMode: "repeat" }]}
    >
      <View style={styles.scroll}>
        <ScrollView style={[styles.scroll]}>
          <View>
            <Spacer width={"100%"} height={32} />
            {children}
          </View>
        </ScrollView>
      </View>
      {hasNavigationButtons ? <NavigationButtons /> : []}
    </ImageBackground>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  safeArea: theme => ({
    flex: 1,
    flexDirection: "column",
    backgroundColor: theme.colors.BGBeige
  }),
  scroll: { flexDirection: "column", flex: 1 }
});

export default withTheme(AppBackground);
