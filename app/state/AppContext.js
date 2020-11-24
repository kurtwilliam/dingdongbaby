import { createContext } from "react";

const AppContext = createContext({
  selectedChallenge: null,
  setSelectedChallenge: () => {}
});

export default AppContext;
