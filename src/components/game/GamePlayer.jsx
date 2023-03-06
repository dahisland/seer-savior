import React, { useContext } from "react";
import { BsPlayCircleFill } from "react-icons/bs";
import { GameContext } from "./GameProvider";
import Instructions from "./Instructions";

const GamePlayer = () => {
  const {
    beginLevel,
    level,
    messageGamePlayer,
    instructionsIsDisplayed,
    setInstructionsIsDisplayed,
  } = useContext(GameContext);

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
