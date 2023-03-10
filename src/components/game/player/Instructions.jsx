import React, { useContext } from "react";
import { GameContext } from "../GameProvider";
import GameButton from "../buttons/GameButton";

const Instructions = () => {
  const { beginLevel, level, playerData } = useContext(GameContext);

  return (
    <div className="gamePlayer_instructions">
      <h2>{playerData.gameInstructions.title}</h2>
      <div className="gamePlayerInstructions_text">
        {playerData.gameInstructions.instructions.map((item, index) => (
          <p key={"gameInstructions-" + index}>{item}</p>
        ))}
      </div>

      <GameButton
        handleClick={() => beginLevel(level)}
        contentDisplay={playerData.gameButtons.instructions}
        customClass={"game--button"}
        attrPosture="0"
      />
    </div>
  );
};

export default Instructions;
