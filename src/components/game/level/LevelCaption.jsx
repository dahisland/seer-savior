import React, { useContext } from "react";
import GameButton from "../buttons/GameButton";
import { GameContext } from "../GameProvider";

const LevelCaption = () => {
  const { level, getFirstLevelNumbers, levelData, gameData } =
    useContext(GameContext);

  return (
    <React.Fragment>
      <h2> - CASE {level} -</h2>
      <div className={"gameLevel_caption"}>
        <h3>{levelData.name}</h3>
        {levelData.description.map((txt, idx) => (
          <p key={"levelCaptionDescription-" + idx}>{txt}</p>
        ))}
        <p className="levelCaption_clue">To find : {levelData.clue}</p>
      </div>
      <GameButton
        handleClick={() => getFirstLevelNumbers()}
        contentDisplay={gameData.gameButtons.levelCaption}
        customClass={"game--button"}
        attrPosture="0"
      />
    </React.Fragment>
  );
};

export default LevelCaption;
