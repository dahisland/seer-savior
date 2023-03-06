import React, { useContext } from "react";
import { GameContext } from "./GameProvider";

const Instructions = () => {
  const { beginLevel, level, gameData } = useContext(GameContext);

  return (
    <div className="gamePlayer_instructions">
      <h2>{gameData.gameInstructions.title}</h2>
      <div>
        {gameData.gameInstructions.instructions.map((item, index) => (
          <p key={"gameInstructions-" + index}>{item}</p>
        ))}
      </div>

      <button onClick={() => beginLevel(level)} className={"game--button"}>
        {gameData.gameButtons.instructions}
      </button>
    </div>
  );
};

export default Instructions;
