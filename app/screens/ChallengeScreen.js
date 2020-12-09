import React, { useContext } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { withTheme } from "react-native-elements";

import AppContext from "../state/AppContext";
import ChallengesContext from "../state/ChallengesContext";
import UserContext from "../state/UserContext";
import AppBackground from "../components/AppBackground";
import Alert from "../assets/svgs/Alert";
import Tip from "../assets/svgs/Tip";
import XClose from "../assets/svgs/XClose";
import ChallengeDetails from "../components/ChallengeDetails";
import PhotoUploadButton from "../components/PhotoUploadButton";
import GradientButton from "../components/GradientButton";
import { LinearGradient } from "expo-linear-gradient";

//rsf
function ChallengeScreen({ navigation, theme }) {
  const { user } = useContext(UserContext);
  const { challenges } = useContext(ChallengesContext);
  const { selectedChallenge, setSelectedChallenge } = useContext(AppContext);

  const image = user.completedChallenges.find(
    obj => obj.challengeId === selectedChallenge
  );
  const challenge = challenges.find(chal => chal.id === selectedChallenge);
  const { desc, warning, tip } = challenge;
  return (
    <AppBackground hasNavigationButtons={true}>
      <View style={styles.cont}>
        <View style={styles.closeContainer}>
          <XClose />
        </View>
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
          <LinearGradient
            colors={theme.colors.Gradient}
            start={[0, 0]}
            end={[1, 1]}
            style={styles.gradientLine(theme)}
          ></LinearGradient>
          <Text style={styles.desc(theme)}>{desc}</Text>
          <PhotoUploadButton
            image={image}
            selectedChallenge={selectedChallenge}
          />
        </View>
        {tip.length ? (
          <View
            style={[styles.tipContainer(theme), styles.alertContainer(theme)]}
          >
            <View style={styles.svgContainer(theme)}>
              <Tip />
            </View>
            <Text style={[styles.tipText(theme), styles.alertText(theme)]}>
              {tip}
            </Text>
          </View>
        ) : (
          []
        )}
        {warning.length ? (
          <View
            style={[
              styles.warningContainer(theme),
              styles.alertContainer(theme)
            ]}
          >
            <View style={styles.svgContainer(theme)}>
              <Alert />
            </View>
            <Text style={[styles.warningText(theme), styles.alertText(theme)]}>
              {warning}
            </Text>
          </View>
        ) : (
          []
        )}
      </View>
    </AppBackground>
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
  closeContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 24
  },
  cont: { paddingLeft: 16, paddingRight: 16 },
  containerView: theme => ({
    position: "relative",
    flexDirection: "column",
    justifyContent: "space-between",
    flex: 1,
    minHeight: "100vh",
    backgroundColor: "red"
  }),
  desc: theme => ({ fontSize: 20, color: theme.colors.G10, paddingBottom: 20 }),
  detailsContainer: theme => ({
    flexDirection: "row",
    width: "100%"
  }),
  gradientLine: theme => ({
    height: 4,
    borderRadius: 8,
    width: "100%",
    marginTop: 12,
    marginBottom: 24
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
  svgContainer: theme => ({
    width: 46,
    height: 46,
    backgroundColor: theme.colors.PureWhite,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 4
  }),

  alertContainer: theme => ({
    borderRadius: 8,
    marginTop: 4,
    padding: 4,
    flexDirection: "row",
    alignItems: "center",
    width: "100%"
  }),
  alertText: theme => ({
    fontSize: 12,
    flex: 1
  }),
  tip: theme => ({
    width: "100%",
    padding: 4,
    background: "lightblue"
  }),
  tipContainer: theme => ({ backgroundColor: theme.colors.InfoTertiary }),
  tipText: theme => ({
    color: theme.colors.InfoPrimary
  }),
  warning: theme => ({
    width: "100%",
    padding: 4,
    background: "gold"
  }),
  warningContainer: theme => ({
    backgroundColor: theme.colors.WarningTertiary
  }),
  warningText: theme => ({
    color: theme.colors.WarningPrimary
  })
});

export default withTheme(ChallengeScreen);
