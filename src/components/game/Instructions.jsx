import React from "react";
import { gameInstructions } from "../../data/gameData";

const Instructions = ({ beginLevel, level }) => {
  return (
    <div className="gamePlayer_instructions">
      <h2>{gameInstructions.title}</h2>
      <div>
        {gameInstructions.instructions.map((item, index) => (
          <p key={"gameInstructions-" + index}>{item}</p>
        ))}
      </div>

      <button onClick={() => beginLevel(level)} className={"game--button"}>
        {gameInstructions.button}
      </button>
    </div>
  );
};

export default Instructions;
