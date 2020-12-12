import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import SettingsContext from "../state/SettingsContext";
import { withTheme } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const SettingContainer = ({
  theme,
  children,
  settingCategory: { title, settings }
}) => {
  const { setSelectedSetting } = useContext(SettingsContext);
  const navigation = useNavigation();
  const navigateToSetting = setting => {
    setSelectedSetting(setting);
    navigation.navigate("Setting");
  };
  return (
    <View style={styles.cont}>
      <Text style={styles.greyFont(theme)}>{title}</Text>
      {settings.map(setting => (
        <Pressable
          onPress={() => navigateToSetting(setting)}
          key={setting.title}
          style={styles.setting(theme)}
        >
          <Text style={styles.settingTitle(theme)}>{setting.title}</Text>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    width: "100%",
    marginBottom: 32
  },
  greyFont: theme => ({
    fontFamily: "SFCompactRoundedBold",
    color: theme.colors.G6,
    fontSize: 16,
    fontWeight: "600",
    width: "100%",
    paddingLeft: 16,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.G2
  }),
  scroll: { flexDirection: "column", flex: 1 },
  setting: theme => ({
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: theme.colors.PureWhite,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 16,
    paddingRight: 16,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.G2
  }),
  settingTitle: theme => ({
    color: theme.colors.G9,
    fontSize: 16,
    letterSpacing: 0.36
  })
});

export default withTheme(SettingContainer);
