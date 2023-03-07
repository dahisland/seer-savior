import React, { useContext } from "react";
import LevelCaption from "./level/LevelCaption";
import LevelTips from "./level/LevelTips";
import SubmitNumber from "./formSubmit/SubmitNumber";
import GamePlayer from "./player/GamePlayer";
import { GameContext } from "./GameProvider";
import LevelHeader from "./level/LevelHeader";
import LevelContent from "./level/LevelContent";

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
                {!succeed ? <LevelContent /> : <LevelTips />}
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
