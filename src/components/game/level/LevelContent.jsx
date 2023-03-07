import React, { useContext } from "react";
import GameButton from "../buttons/GameButton";
import LevelTips from "./LevelTips";
import { GameContext } from "../GameProvider";

const LevelContent = () => {
  const { proposeNumber, numberToFind, numbersPropositions } =
    useContext(GameContext);

  return (
    <React.Fragment>
      <GameButton
        handleClick={() => proposeNumber(numberToFind, numbersPropositions[0])}
        contentDisplay={numbersPropositions[0].display}
        customClass={"gameProposition--button"}
        attrPosture="1"
      />
      <LevelTips />
      <GameButton
        handleClick={() => proposeNumber(numberToFind, numbersPropositions[1])}
        contentDisplay={numbersPropositions[1].display}
        customClass={"gameProposition--button"}
        attrPosture="2"
      />
    </React.Fragment>
  );
};

export default LevelContent;
