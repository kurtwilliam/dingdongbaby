import React, { useContext } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import Header from "../components/Header";
import { CountersContext } from "../state/CountersContext";
import { withTheme } from "react-native-elements";

//rsf
function CountersScreen({ route, theme }) {
  const { counters, numSelCounters } = useContext(CountersContext);
  return (
    <SafeAreaView style={styles.safeArea(theme)}>
      <Header />
      <View style={styles.container(theme)}></View>
    </SafeAreaView>
  );
}

//rnss
const styles = StyleSheet.create({
  container: theme => ({
    flex: 1,
    backgroundColor: theme.colors.Black,
    flexDirection: "column",
    padding: 5
  }),
  safeArea: theme => ({
    backgroundColor: theme.colors.Black,
    flex: 1
  })
});

export default withTheme(CountersScreen);
