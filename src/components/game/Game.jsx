import React from "react";
import { levelsData } from "../../data/gameData";
import {
  convertNumberToDisplay,
  inputPropositionByLevel,
} from "../../data/gameAlgo";
import LevelCaption from "./LevelCaption";
import GameButton from "./GameButton";
import GameTips from "./GameTips";
import SubmitNumber from "./SubmitNumber";
import GamePlayer from "./GamePlayer";

const Game = ({
  level,
  isPlaying,
  numberToFind,
  proposeNumber,
  numberOne,
  numberTwo,
  succeed,
  numberProposed,
  setNumberProposed,
  messageResult,
  levelIsWon,
  levelIsLoosed,
  nextLevel,
  getFirstLevelNumbers,
  messageOutGame,
  gameIntro,
  setGameIntro,
  levelIntro,
  beginLevel,
  score,
}) => {
  return (
    <div className="game_container">
      {isPlaying === false ? (
        <GamePlayer
          beginLevel={beginLevel}
          level={level}
          messageOutGame={messageOutGame}
          gameIntro={gameIntro}
          setGameIntro={setGameIntro}
        />
      ) : (
        <div className="game_content">
          {levelIntro !== "intro" ? (
            <React.Fragment>
              <h2>- CASE {level} -</h2>
              {levelsData
                .filter((item) => item.level === level)
                .map((item, index) => (
                  <h3 key={"levelTitle-" + index}>{item.name}</h3>
                ))}
              <div>Number to find : {numberToFind}</div>

              <div className="game_propositions" win={`${succeed}`}>
                {!succeed ? (
                  <GameButton
                    handleClick={() => proposeNumber(numberToFind, numberOne)}
                    disable={succeed ? true : false}
                    contentDisplay={convertNumberToDisplay(numberOne, level)}
                    cls={"gameProposition--button"}
                  />
                ) : null}

                <GameTips
                  numberProposed={numberProposed}
                  convertNumberToDisplay={convertNumberToDisplay}
                  level={level}
                  messageResult={messageResult}
                  succeed={succeed}
                  nextLevel={nextLevel}
                  score={score}
                />

                {!succeed ? (
                  <GameButton
                    handleClick={() => proposeNumber(numberToFind, numberTwo)}
                    disable={succeed ? true : false}
                    contentDisplay={convertNumberToDisplay(numberTwo, level)}
                    cls={"gameProposition--button"}
                  />
                ) : null}
              </div>

              {!succeed ? (
                <SubmitNumber
                  inputPropositionByLevel={inputPropositionByLevel}
                  level={level}
                  numberToFind={numberToFind}
                  setNumberProposed={setNumberProposed}
                  levelIsWon={levelIsWon}
                  levelIsLoosed={levelIsLoosed}
                  succeed={succeed}
                  setGameIntro={setGameIntro}
                />
              ) : null}
            </React.Fragment>
          ) : (
            <LevelCaption
              level={level}
              getFirstLevelNumbers={getFirstLevelNumbers}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Game;
