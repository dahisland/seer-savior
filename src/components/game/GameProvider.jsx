import React, { createContext } from "react";
import GameContainer from "./GameContainer";

export const GameContext = createContext({});

const GameProvider = (props) => {
  const value = props;

  return (
    <GameContext.Provider value={value}>
      <GameContainer />
    </GameContext.Provider>
  );
};

export default GameProvider;
