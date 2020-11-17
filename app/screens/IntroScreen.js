import React, { useContext } from "react";
import { StyleSheet, View, Button, Text } from "react-native";

//rsf
function HomeScreen({ route }) {
  return (
    <View style={styles.background}>
      <Text>INTRO</Text>
      <Image
        source={require(`../assets/AppBackground.png`)}
        style={styles.eyeBallImg}
      />
    </View>
  );
}

//rnss
const styles = StyleSheet.create({
  appBg: {
    color: "green"
  }
});

export default HomeScreen;
