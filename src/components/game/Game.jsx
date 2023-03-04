import React from "react";
import {
  convertNumberToDisplay,
  inputPropositionByLevel,
} from "../../data/gameAlgo";
import PlayGame from "./PlayGame";
import LevelCaption from "./LevelCaption";
import GameButton from "./GameButton";
import GameTips from "./GameTips";
import SubmitNumber from "./SubmitNumber";

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
}) => {
  return (
    <div className="game_container">
      {isPlaying === false ? (
        <PlayGame
          getFirstLevelNumbers={getFirstLevelNumbers}
          level={level}
          messageOutGame={messageOutGame}
        />
      ) : (
        <div className="game_content">
          <GameButton
            handleClick={() => nextLevel()}
            disable={succeed ? false : true}
            contentDisplay={"Next level"}
            cls={"next--button"}
          />
          <h2>LEVEL {level}</h2>
          <div>Number to find : {numberToFind}</div>
          <div className="game_propositions">
            <GameButton
              handleClick={() => proposeNumber(numberToFind, numberOne)}
              disable={succeed ? true : false}
              contentDisplay={convertNumberToDisplay(numberOne, level)}
              cls={"gameProposition--button"}
            />
            <GameTips
              numberProposed={numberProposed}
              convertNumberToDisplay={convertNumberToDisplay}
              level={level}
              messageResult={messageResult}
            />
            <GameButton
              handleClick={() => proposeNumber(numberToFind, numberTwo)}
              disable={succeed ? true : false}
              contentDisplay={convertNumberToDisplay(numberTwo, level)}
              cls={"gameProposition--button"}
            />
          </div>
          <SubmitNumber
            inputPropositionByLevel={inputPropositionByLevel}
            level={level}
            numberToFind={numberToFind}
            setNumberProposed={setNumberProposed}
            levelIsWon={levelIsWon}
            levelIsLoosed={levelIsLoosed}
            succeed={succeed}
          />
          <LevelCaption level={level} />
        </div>
      )}
    </div>
  );
};

export default Game;
