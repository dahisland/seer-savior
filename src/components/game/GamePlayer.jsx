import React from "react";
import { BsPlayCircleFill } from "react-icons/bs";
import Instructions from "./Instructions";

const GamePlayer = ({
  beginLevel,
  level,
  messageGamePlayer,
  instructionsIsDisplayed,
  setInstructionsIsDisplayed,
}) => {
  return (
    <div className="game_player">
      {!instructionsIsDisplayed ? (
        <div>
          {messageGamePlayer.map((item, idx) => (
            <p key={"messageGamePlayer-" + idx}>{item}</p>
          ))}
          <picture onClick={() => setInstructionsIsDisplayed(true)}>
            <BsPlayCircleFill className={"icon--playgame"} />
          </picture>
        </div>
      ) : (
        <Instructions beginLevel={beginLevel} level={level} />
      )}
    </div>
  );
};

export default GamePlayer;
