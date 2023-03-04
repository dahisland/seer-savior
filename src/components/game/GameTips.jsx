import React from "react";
import GameButton from "./GameButton";
import { levelsData } from "../../data/gameData";

const GameTips = ({
  numberProposed,
  convertNumberToDisplay,
  level,
  messageResult,
  succeed,
  nextLevel,
  score,
}) => {
  return (
    <div className="gamePropositions_tips" win={`${succeed}`}>
      {numberProposed !== null ? (
        <React.Fragment>
          <p>
            {convertNumberToDisplay(numberProposed, level) + " ? "}
            <span>{messageResult}</span>
          </p>
          <p className="tips_score">Score : {score !== null ? score : 0}</p>
          <p className="tips_messageWin">
            {levelsData.filter((item) => item.level === level)[0].messageWin}
          </p>
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
