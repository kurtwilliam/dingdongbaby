import { createContext } from "react";
import moment from "moment";

const AppContext = createContext({
  lastUpdated: moment(),
  selectedChallenge: null,
  setSelectedChallenge: () => {},
  challenges: [],
  lockedChallenges: [],
  introCopy: [],
  salesCopy: []
});

export default AppContext;
