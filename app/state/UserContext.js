import { createContext } from "react";

export const UserContext = createContext({
  id: 1,
  name: "Ali",
  gender: "female",
  babyName: "Monkey",
  babyYearOfBirth: 2011,
  babyMonthOfBirth: 7,
  babyDayOfBirth: 6,
  babyGender: "female",
  partnerName: "matt",
  partnerGender: "male",
  hasCat: true,
  hasDog: false,
  dateSignedUp: "2020-11-20T12:53:51-05:00", //moment().format();
  hasViewedIntro: false,
  photos: [
    {
      challengeId: 001,
      path: "",
      dateUploaded: "" //moment().format();
    }
  ]
});
