import React from "react";
import { BsPlayCircleFill } from "react-icons/bs";

const PlayGame = ({ getFirstLevelNumbers, level, messageOutGame }) => {
  return (
    <div className="game_player">
      {messageOutGame.map((item, idx) => (
        <p key={"messageGamePlayer-" + idx}>{item}</p>
      ))}
      <picture onClick={() => getFirstLevelNumbers(level)}>
        <BsPlayCircleFill className={"icon--playgame"} />
      </picture>
      <p className="player_instructions">
        <span>Instructions : </span>
        You will have to guess the exact data that policy requires. For that,
        you can choose between two intuitions. Your spirit will guide you by
        giving an indice for each tentative. If you think you have guessed the
        good answer, you can directly write it in the field. But be carefull,
        you will have only one try. If you loose, policy will fail.
      </p>
    </div>
  );
};

export default PlayGame;
