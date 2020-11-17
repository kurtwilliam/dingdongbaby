import React, { useContext } from "react";
import { StyleSheet, View, SafeAreaView, Text, Button } from "react-native";
import { withTheme } from "react-native-elements";
import PhotoCard from "../components/PhotoCard";

//rsf
function IntroScreen({ route, theme }) {
  return (
    <SafeAreaView style={styles.safeArea(theme)}>
      {/* <ImageBackground
        source={require("../assets/AppBackground.png")}
        style={styles.appBg}
      > */}
      <View style={styles.background}>
        <Text>welcome to</Text>
        <Text>dingdong baby</Text>
        <PhotoCard />
        <Button title="create some memories eternal" />
      </View>
      {/* </ImageBackground> */}
    </SafeAreaView>
  );
}

//rnss
const styles = StyleSheet.create({
  safeArea: theme => ({
    backgroundColor: theme.colors.Black,
    flex: 1
  })
});

export default withTheme(IntroScreen);
