import React from "react";
import { BsPlayCircleFill } from "react-icons/bs";
import Instructions from "./Instructions";

const GamePlayer = ({
  beginLevel,
  level,
  messageOutGame,
  gameIntro,
  setGameIntro,
}) => {
  return (
    <div className="game_player">
      {gameIntro === "play" ? (
        <div>
          {messageOutGame.map((item, idx) => (
            <p key={"messageGamePlayer-" + idx}>{item}</p>
          ))}
          <picture onClick={() => setGameIntro("instructions")}>
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
