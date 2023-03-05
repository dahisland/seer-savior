import React from "react";
import GameButton from "./GameButton";

const GameTips = ({
  numberProposed,
  messageTips,
  succeed,
  nextLevel,
  score,
  levelData,
}) => {
  return (
    <div className="gamePropositions_tips" succeed={`${succeed}`}>
      {numberProposed.number !== null ? (
        <React.Fragment>
          <p>
            {numberProposed.display + " ? "}
            <span>{messageTips}</span>
          </p>
          <p className="tips_score">Score : {score !== null ? score : 0}</p>
          <p className="tips_messageWin">{levelData.messageWin}</p>
          <GameButton
            handleClick={() => nextLevel()}
            disable={succeed ? false : true}
            contentDisplay={"Next level"}
            cls={"game--button next--button"}
          />
        </React.Fragment>
      ) : (
        <p>Take time to meditate...</p>
      )}
    </div>
  );
};

export default GameTips;
