import axios from "axios";
import moment from "moment";
import { initialUser, initialApp } from "./appData";

export default {
  postIsCacheOrServerNewer: async cacheData =>
    await axios
      .post("/user/check-user", { cacheData })
      .then(resp => {
        const { data } = resp;
        console.log("data.lastUpdated)", data.lastUpdated);
        if (
          data &&
          data.lastUpdated &&
          moment(data.lastUpdated).isBefore(cacheData.lastUpdated)
        ) {
          // server is newer, return this data
          return data;
        }
      })
      .catch(err => console.log("getUserFromServer err", err)),

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

  setInitialUser: initialUser,

  setInitialApp: initialApp
};
