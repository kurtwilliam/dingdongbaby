import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { withTheme } from "react-native-elements";
import moment from "moment";
import UserContext from "../state/UserContext";
import storageHelpers from "../helpers/storageHelpers";

function PhotoUploadButton({ theme, image, selectedChallenge }) {
  const { user, setUser } = useContext(UserContext);

  const pickImage = async () => {
    () => {
      (async () => {
        if (Platform.OS !== "web") {
          const {
            status
          } = await ImagePicker.requestCameraRollPermissionsAsync();
          if (status !== "granted") {
            alert("Sorry, we need camera roll permissions to make this work!");
          }
        }
      })();
    };
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1
    });

    console.log("result", result);

    if (!result.cancelled) {
      // don't mutate user PLS LOL
      const newUser = JSON.parse(JSON.stringify(user));
      const thisImageIndex = newUser.completedPhotos.indexOf(
        challenge => challenge.challengeId === selectedChallenge
      );
      let newData = {};
      if (thisImageIndex >= 0) {
        newUser.completedPhotos[thisImageIndex].path = result.uri;
        newUser.completedPhotos[
          thisImageIndex
        ].dateUploaded = moment().format();
        newUser.completedPhotos[thisImageIndex].width = result.width;
        newUser.completedPhotos[thisImageIndex].height = result.height;
        newData = newUser.completedPhotos[thisImageIndex];
      } else {
        newUser.completedPhotos.push({
          id: newUser.completedPhotos.length,
          challengeId: selectedChallenge,
          path: result.uri,
          dateUploaded: moment().format(),
          height: result.height,
          width: result.width
        });
        newData = newUser.completedPhotos[newUser.completedPhotos.length - 1];
      }

      // TODO: Edit user on server
      await storageHelpers
        .postAddCompletedChallenge(newData)
        .then(resp => {
          console.log("postAddCompletedChallenge ", resp);
          return setUser(newUser);
        })
        .catch(err => console.log("err postAddCompletedChallenge ", err));
    }
  };

  return (
    <View style={styles.container(theme)}>
      {!image || image === -1 ? (
        <Button
          title="Upload Photo"
          onPress={pickImage}
          style={[styles.photoButton(theme), styles.photoButtonUpload(theme)]}
        />
      ) : (
        <Button
          title="Change Photo"
          onPress={pickImage}
          style={[styles.photoButton(theme), styles.photoButtonChange(theme)]}
        />
      )}
    </View>
  );
}

//rnss
const styles = StyleSheet.create({
  container: theme => ({
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    paddingBottom: 50,
    paddingLeft: 12,
    paddingRight: 12
  }),
  photoButton: theme => ({ width: "100%", borderRadius: 8, padding: 12 }),
  photoButtonUpload: theme => ({}),
  photoButtonChange: theme => ({}),
  top: theme => ({})
});

export default withTheme(PhotoUploadButton);
