import React, { useContext } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  ImageBackground
} from "react-native";
import { withTheme } from "react-native-elements";
import DailyChallengeContainer from "../components/DailyChallengeContainer";
import ChallengesContainer from "../components/ChallengesContainer";
import ChallengesHeader from "../components/ChallengesHeader";
import HomeSettingsContainer from "../components/HomeSettingsContainer";
import NavigationButtons from "../components/NavigationButtons";

// TODO: compress bg img further

//rsf
function HomeScreen({ navigation, theme }) {
  console.log("theme");
  return (
    <SafeAreaView style={styles.safeArea(theme)}>
      <ImageBackground
        source={require("../assets/AppBackground.png")}
        style={styles.appBg}
      >
        <View style={styles.containerView(theme)}>
          {/* <DailyChallengeContainer /> */}
          <HomeSettingsContainer />
          <ChallengesHeader />
        </View>
        <ChallengesContainer />

        <NavigationButtons />

        {/* <ScrollView style={styles.container(theme)}>
        <View style={styles.containerView(theme)}>
          <SectionTitle sectionTitle={"Most recent"} />
          <View style={styles.counterContainer}>
            {counters
              ? counters.map((counter, i) => (
                  <Card key={i} counter={counter} index={i} />
                ))
              : null}
          </View> 
        </View>
      </ScrollView>*/}
      </ImageBackground>
    </SafeAreaView>
  );
}

//rnss
const styles = StyleSheet.create({
  appBg: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "repeat"
  },
  containerView: theme => ({
    position: "relative",
    flexDirection: "column",
    justifyContent: "space-between",
    // flex: 1,
    paddingTop: 40,
    paddingLeft: 16,
    paddingRight: 16
  }),
  safeArea: theme => ({
    flex: 1,
    backgroundColor: theme.colors.BGBeige
  })
});

export default withTheme(HomeScreen);
