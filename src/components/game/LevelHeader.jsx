import React, { useContext } from "react";
import { GameContext } from "./GameProvider";

const LevelHeader = () => {
  const { level, levelData, numberToFind } = useContext(GameContext);

  return (
    <div className="gameLevel_header">
      <h2>- CASE {level} -</h2>
      <h3>{levelData.name}</h3>
      <div>
        Number to find : {numberToFind.number + "/" + numberToFind.display}
      </div>
    </div>
  );
};

export default LevelHeader;
