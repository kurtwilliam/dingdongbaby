import axios from "axios";

export default {
  getUserFromServer: async () =>
    await axios
      .get("/user/get-user")
      .then(resp => resp.data)
      .catch(err => console.log("errerrerr", err)),

  getIPFromAmazon: async () =>
    await fetch("https://checkip.amazonaws.com/")
      .then(res => res.text())
      .then(ip => ip)
};
