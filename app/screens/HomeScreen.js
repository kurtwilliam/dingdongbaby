import React, { useContext } from "react";
import { StyleSheet, View, SafeAreaView, ScrollView } from "react-native";
import Card from "../components/Card";
import Header from "../components/Header";
import SectionTitle from "../components/SectionTitle";

import { CountersContext } from "../state/CountersContext";
import { withTheme } from "react-native-elements";

//rsf
function HomeScreen({ navigation, theme }) {
  return (
    <SafeAreaView style={styles.safeArea(theme)}>
      <View style={styles.containerView(theme)}>
        <DailyChallengeContainer />
        <ChallengesContainer />
      </View>

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
  container: theme => ({
    position: "relative",
    flexDirection: "column",
    flex: 1,
    padding: 8,
    paddingTop: 115,
    background: "blue"
  }),
  containerView: theme => ({
    position: "relative",
    flexDirection: "column",
    justifyContent: "space-between",
    flex: 1,
    minHeight: "100vh",
    backgroundColor: "red"
  }),
  safeArea: theme => ({
    backgroundColor: theme.colors.Black,
    flex: 1
  })
});

export default withTheme(HomeScreen);
