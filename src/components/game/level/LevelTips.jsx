import React, { useContext } from "react";
import GameButton from "../buttons/GameButton";
import { GameContext } from "../GameProvider";

const LevelTips = () => {
  const {
    numberProposed,
    messageTips,
    succeed,
    nextLevel,
    score,
    levelData,
    gameData,
  } = useContext(GameContext);

  return (
    <div className="gamePropositions_tips" succeed={`${succeed}`}>
      {numberProposed.number !== null ? (
        <React.Fragment>
          <div>
            <p className="tips_proposition">{numberProposed.display + " ? "}</p>
            <p className="tips_tip">{messageTips}</p>
          </div>
          <p className="tips_score">Score : {score !== null ? score : 0}</p>
          <p className="tips_messageWin">{levelData.messageWin}</p>

          <GameButton
            handleClick={() => nextLevel()}
            contentDisplay={"Next level"}
            customClass={"game--button next--button"}
            attrPosture="0"
          />
        </React.Fragment>
      ) : (
        <p className="tips_haiku">{gameData.gameButtons.tipsHaiku}</p>
      )}
    </div>
  );
};

export default LevelTips;
