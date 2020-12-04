import React, { useContext } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Text,
  Button,
  Image
} from "react-native";
import { withTheme } from "react-native-elements";

import AppContext from "../state/AppContext";
import ChallengesContext from "../state/ChallengesContext";
import UserContext from "../state/UserContext";
import DailyChallengeContainer from "../components/DailyChallengeContainer";
import ChallengesContainer from "../components/ChallengesContainer";
import NavigationButtons from "../components/NavigationButtons";
import ChallengeDetails from "../components/ChallengeDetails";
import PhotoUploadButton from "../components/PhotoUploadButton";

//rsf
function ChallengeScreen({ navigation, theme }) {
  const { user } = useContext(UserContext);
  const { challenges } = useContext(ChallengesContext);
  const { selectedChallenge, setSelectedChallenge } = useContext(AppContext);
  const image = user.completedPhotos.find(
    obj => obj.challengeId === selectedChallenge
  );
  const challenge = challenges.find(chal => chal.id === selectedChallenge);
  const { desc, warning, tip } = challenge;
  return (
    <SafeAreaView style={styles.safeArea(theme)}>
      {/* <ImageBackground
        source={require("../assets/AppBackground.png")}
        style={styles.appBg}
      > */}
      <View style={styles.container(theme)}>
        <View style={styles.cardContainer(theme)}>
          {image && image.path ? (
            <Image
              resizeMode={"cover"}
              source={{ uri: image.path }}
              style={{ width: "100%", minHeight: 400, borderRadius: 8 }}
            />
          ) : (
            []
          )}
          <View style={styles.detailsContainer(theme)}>
            <ChallengeDetails challenge={challenge} />
          </View>
          <View style={styles.gradientLine(theme)}></View>
          <Text style={styles.desc(theme)}>{desc}</Text>
          {tip.length ? (
            <View style={styles.tipContainer(theme)}>
              <Text>{tip}</Text>
            </View>
          ) : (
            []
          )}
          {warning.length ? (
            <View style={styles.warningContainer(theme)}>
              <Text>{warning}</Text>
            </View>
          ) : (
            []
          )}
        </View>
      </View>
      <PhotoUploadButton image={image} selectedChallenge={selectedChallenge} />

      {/* <View style={styles.containerLeft(theme)}>
        <Text>{name}</Text>
        <View style={styles.containerLeftDetails(theme)}>
          <View style={styles.favContainer(theme)}>
            <Text>{id}</Text>
            <View style={styles.fav(theme)}></View>
          </View>
          <View style={styles.difficultyContainer(theme)}>
            {[...Array(difficulty)].map((e, i) => (
              <View key={i} style={styles.difficultyCircle(theme)} />
            ))}
          </View>
        </View>
      </View>
      <View style={styles.containerRight(theme)}>
        <Text>{emoji}</Text>
      </View> */}
    </SafeAreaView>
  );
}

//rnss
const styles = StyleSheet.create({
  cardContainer: theme => ({
    backgroundColor: "white",
    borderRadius: 12,
    width: "100%",
    padding: 12
  }),
  container: theme => ({
    position: "relative",
    flexDirection: "column",
    flex: 1,
    padding: 16,
    backgroundColor: "beige"
  }),
  containerView: theme => ({
    position: "relative",
    flexDirection: "column",
    justifyContent: "space-between",
    flex: 1,
    minHeight: "100vh",
    backgroundColor: "red"
  }),
  desc: theme => ({}),
  detailsContainer: theme => ({
    flexDirection: "row",
    width: "100%"
  }),
  gradientLine: theme => ({
    height: 4,
    borderRadius: 8
  }),
  imageStyles: theme => ({
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    resizeMode: "contain"
  }),
  safeArea: theme => ({
    backgroundColor: theme.colors.Black,
    flex: 1
  }),
  tip: theme => ({
    width: "100%",
    padding: 4,
    background: "lightblue"
  }),
  tipContainer: theme => ({}),
  warning: theme => ({
    width: "100%",
    padding: 4,
    background: "gold"
  }),
  warningContainer: theme => ({})
});

export default withTheme(ChallengeScreen);
