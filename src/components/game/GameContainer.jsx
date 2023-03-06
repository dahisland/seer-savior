import React, { useContext } from "react";
import LevelCaption from "./LevelCaption";
import GameTips from "./GameTips";
import SubmitNumber from "./SubmitNumber";
import GamePlayer from "./GamePlayer";
import { GameContext } from "./GameProvider";
import LevelHeader from "./LevelHeader";
import LevelContent from "./LevelContent";

const GameContainer = () => {
  const { isPlaying, succeed, levelIsDisplayed } = useContext(GameContext);

  return (
    <div className="game_container">
      {isPlaying === false ? (
        <GamePlayer />
      ) : (
        <div className="game_content">
          {levelIsDisplayed ? (
            <React.Fragment>
              <LevelHeader />

              <div className="game_propositions" succeed={`${succeed}`}>
                {!succeed ? <LevelContent /> : <GameTips />}
              </div>

              {!succeed ? <SubmitNumber /> : null}
            </React.Fragment>
          ) : (
            <LevelCaption />
          )}
        </div>
      )}
    </div>
  );
};

export default GameContainer;
