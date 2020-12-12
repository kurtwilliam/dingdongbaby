import React, { useContext } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  ImageBackground
} from "react-native";
import { withTheme } from "react-native-elements";
import AppBackground from "../components/AppBackground";
import ChallengesContainer from "../components/ChallengesContainer";
import UnlockChallengesContainer from "../components/UnlockChallengesContainer";
import ChallengesHeader from "../components/ChallengesHeader";
import HomeSettingsContainer from "../components/HomeSettingsContainer";
import Spacer from "../components/Spacer";

// TODO: compress bg img further

//rsf
const HomeScreen = ({ navigation, theme }) => (
  <AppBackground hasNavigationButtons={true}>
    <View>
      <HomeSettingsContainer navigation={navigation} />
      <ChallengesHeader />
      <Spacer width={"100%"} height={24} />
      <View style={styles.darkContainer(theme)}>
        <ChallengesContainer />
        {/* <Spacer width={"100%"} height={30} /> */}
        <UnlockChallengesContainer />
      </View>
    </View>
  </AppBackground>
);

//rnss
const styles = StyleSheet.create({
  cont: theme => ({
    position: "relative",
    paddingTop: 32,
    minHeight: "100%"
  }),
  darkContainer: theme => ({
    flex: 1,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    width: "100%",
    padding: 16,
    backgroundColor: "#E0DDD7"
  })
});

export default withTheme(HomeScreen);
