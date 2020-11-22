import React, { useContext } from "react";
import { StyleSheet, View, SafeAreaView, ScrollView } from "react-native";
import { withTheme } from "react-native-elements";
import DailyChallengeContainer from "../components/DailyChallengeContainer";
import ChallengesContainer from "../components/ChallengesContainer";
import NavigationButtons from "../components/NavigationButtons";

//rsf
function HomeScreen({ navigation, theme }) {
  console.log("theme");
  return (
    <SafeAreaView style={styles.safeArea(theme)}>
      <View style={styles.containerView(theme)}>
        <DailyChallengeContainer />
        <ChallengesContainer />
      </View>
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
    </SafeAreaView>
  );
}

//rnss
const styles = StyleSheet.create({
  containerView: theme => ({
    position: "relative",
    flexDirection: "column",
    justifyContent: "space-between",
    flex: 1
    // backgroundColor: "red"
  }),
  safeArea: theme => ({ flex: 1, backgroundColor: "beige" })
});

export default withTheme(HomeScreen);
