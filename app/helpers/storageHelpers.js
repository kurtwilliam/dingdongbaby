import axios from "axios";
import moment from "moment";

export default {
  getUserFromServer: async () =>
    await axios
      .get("/user/get-user")
      .then(resp => resp.data)
      .catch(err => console.log("getUserFromServer err", err)),

  getIPFromAmazon: async () =>
    await fetch("https://checkip.amazonaws.com/")
      .then(res => res.text())
      .then(ip => ip),

  postAddCompletedChallenge: async challenge =>
    await axios
      .post("/user/add-completed-challenge", { challenge })
      .then(resp => resp.data)
      .catch(err => console.log("postAddCompletedChallenge err", err)),

  setInitialUser: () => ({
    name: "",
    gender: "",
    babyName: "",
    babyYearOfBirth: null,
    babyMonthOfBirth: null,
    babyDayOfBirth: null,
    babyGender: "",
    partnerName: "",
    partnerGender: "",
    hasCat: false,
    hasDog: false,
    dateSignedUp: moment(),
    hasViewedIntro: false,
    email: "",
    password: "",
    credits: 0,
    unlockedChallenges: [],
    completedChallenges: []
  })
};
