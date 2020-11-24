import React, { useContext, useState, useEffect, Fragment } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AppContext from "../state/AppContext";

import { withTheme } from "react-native-elements";

const ChallengeDetails = ({
  theme,
  challenge: { name, id, difficulty, emoji }
}) => (
  <Fragment>
    <View style={styles.containerLeft(theme)}>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.containerLeftDetails(theme)}>
        <View style={styles.favContainer(theme)}>
          <Text style={styles.idText(theme)}>{id}</Text>
          <View style={styles.fav(theme)}>
            <Text>star</Text>
          </View>
        </View>
        <View
          style={[
            styles.difficultyContainer(theme),
            difficulty === 1
              ? styles.difficulty1
              : difficulty === 2
              ? styles.difficulty2
              : styles.difficulty3
          ]}
        >
          {[...Array(difficulty)].map((e, i) => (
            <View
              key={i}
              style={[
                styles.difficultyCircle(theme),
                difficulty === 1
                  ? styles.difficultyCircle1
                  : difficulty === 2
                  ? styles.difficultyCircle2
                  : styles.difficultyCircle3
              ]}
            />
          ))}
        </View>
      </View>
    </View>
    <View style={styles.containerRight(theme)}>
      <Text style={styles.emoji}>{emoji}</Text>
    </View>
  </Fragment>
);

//rnss
const styles = StyleSheet.create({
  container: theme => ({
    position: "relative",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    borderRadius: 12,
    background: "#FFFFFF",
    paddingTop: 12,
    paddingLeft: 12,
    paddingBottom: 12,
    paddingRight: 12
  }),
  containerLeft: theme => ({
    flexDirection: "column",
    justifyContent: "space-between"
  }),
  containerLeftDetails: theme => ({
    justifyContent: "space-between",
    flexDirection: "row"
  }),
  containerRight: theme => ({
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gold",
    borderRadius: 8
  }),
  favContainer: theme => ({
    justifyContent: "flex-start",
    flexDirection: "row"
  }),
  fav: theme => ({}),
  name: { fontSize: 20 },
  idText: theme => ({
    backgroundColor: "grey",
    marginRight: 4,
    paddingTop: 1,
    paddingBottom: 1,
    paddingRight: 4,
    paddingLeft: 4,
    borderRadius: 50
  }),
  difficultyContainer: theme => ({
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 4,
    borderRadius: 50,
    flexDirection: "row"
  }),
  difficultyCircle: theme => ({
    width: 9,
    height: 9,
    borderRadius: 50,
    marginRight: 4
  }),
  difficulty1: { backgroundColor: "blue" },
  difficulty2: { backgroundColor: "yellow" },
  difficulty3: { backgroundColor: "red" },
  difficultyCircle1: { backgroundColor: "green" },
  difficultyCircle2: { backgroundColor: "purple" },
  difficultyCircle3: { backgroundColor: "grey" },
  emoji: { fontSize: 32 },
  top: theme => ({})
});

export default withTheme(ChallengeDetails);
