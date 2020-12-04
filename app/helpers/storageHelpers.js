import axios from "axios";

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
      .catch(err => console.log("postAddCompletedChallenge err", err))
};
