import React, { useContext } from "react";
import { StyleSheet, View, SafeAreaView, Text, Button } from "react-native";
import { withTheme } from "react-native-elements";
import moment from "moment";

import PhotoCard from "../components/PhotoCard";
import AppBackground from "../components/AppBackground";
import GradientButton from "../components/GradientButton";
import TextPureBlack24 from "../components/styleComponents/TextPureBlack24";
import Spacer from "../components/styleComponents/Spacer";
import monk1 from "../assets/placeholders/monk1.png";
import monk2 from "../assets/placeholders/monk2.png";
import monk3 from "../assets/placeholders/monk3.png";
import monk4 from "../assets/placeholders/monk4.png";
import UserContext from "../state/UserContext";

//rsf
function IntroScreen({ navigation, route, theme }) {
  const { updateUser } = useContext(UserContext);
  const navigateHome = () => {
    updateUser(true, "hasViewedIntro");
    return navigation.navigate("Home");
  };

  return (
    <AppBackground>
      <View style={styles.background}>
        <Text>dingdong baby</Text>
        <Spacer width="100%" height={24} />
        <TextPureBlack24
          addStyles={{ textAlign: "center" }}
          copy="hundreds of fun and hilarious photo ideas for you and your baby"
        />
        <Spacer width="100%" height={12} />
        <PhotoCard
          image={monk1}
          copy={
            "After gold was found in 1848 stories of easy riches compelled thousands of young men to pack up their belongings and head north."
          }
          date={moment().format("MMM DD YYYY")}
        />
        <Spacer width="100%" height={12} />
        <TextPureBlack24
          addStyles={{ textAlign: "center" }}
          copy="when your kid grows up they will wonder what was wrong with you"
        />
        <Spacer width="100%" height={12} />
        <PhotoCard
          image={monk2}
          copy={
            "After gold was found in 1848 stories of easy riches compelled thousands of young men to pack up their belongings and head north."
          }
          date={moment().format("MMM DD YYYY")}
        />
        <Spacer width="100%" height={12} />
        <TextPureBlack24
          addStyles={{ textAlign: "center" }}
          copy="dingdong baby is the worlds #1 parent/child contact sport"
        />
        <Spacer width="100%" height={12} />
        <PhotoCard
          image={monk3}
          copy={
            "After gold was found in 1848 stories of easy riches compelled thousands of young men to pack up their belongings and head north."
          }
          date={moment().format("MMM DD YYYY")}
        />
        <Spacer width="100%" height={12} />
        <TextPureBlack24
          addStyles={{ textAlign: "center" }}
          copy="'finally, a use for my baby'"
        />
        <Spacer width="100%" height={12} />
        <PhotoCard
          image={monk4}
          copy={
            "After gold was found in 1848 stories of easy riches compelled thousands of young men to pack up their belongings and head north."
          }
          date={moment().format("MMM DD YYYY")}
        />
        <Spacer width="100%" height={24} />
        {/* <Button
          onPress={() => navigation.navigate("Home")}
          title="capture memories eternal"
        /> */}
        <GradientButton
          copy="capture memories eternal"
          onPress={navigateHome}
        />
      </View>
    </AppBackground>
  );
}

//rnss
const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    height: "100%",
    padding: 16
  }
});

export default withTheme(IntroScreen);
