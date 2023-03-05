import React from "react";
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
  succeed,
  numberProposed,
  setNumberProposed,
  messageTips,
  levelIsWon,
  levelIsLost,
  nextLevel,
  getFirstLevelNumbers,
  messageGamePlayer,
  instructionsIsDisplayed,
  setInstructionsIsDisplayed,
  levelIsDisplayed,
  beginLevel,
  score,
  levelData,
  numbersPropositions,
}) => {
  return (
    <div className="game_container">
      {isPlaying === false ? (
        <GamePlayer
          beginLevel={beginLevel}
          level={level}
          messageGamePlayer={messageGamePlayer}
          instructionsIsDisplayed={instructionsIsDisplayed}
          setInstructionsIsDisplayed={setInstructionsIsDisplayed}
        />
      ) : (
        <div className="game_content">
          {levelIsDisplayed ? (
            <React.Fragment>
              <h2>- CASE {level} -</h2>
              <h3>{levelData.name}</h3>
              <div>
                Number to find :{" "}
                {numberToFind.number + "/" + numberToFind.display}
              </div>

              <div className="game_propositions" succeed={`${succeed}`}>
                {!succeed ? (
                  <GameButton
                    handleClick={() =>
                      proposeNumber(numberToFind, numbersPropositions[0])
                    }
                    disable={succeed ? true : false}
                    contentDisplay={numbersPropositions[0].display}
                    cls={"gameProposition--button"}
                  />
                ) : null}

                <GameTips
                  numberProposed={numberProposed}
                  messageTips={messageTips}
                  succeed={succeed}
                  nextLevel={nextLevel}
                  score={score}
                  levelData={levelData}
                />

                {!succeed ? (
                  <GameButton
                    handleClick={() =>
                      proposeNumber(numberToFind, numbersPropositions[1])
                    }
                    disable={succeed ? true : false}
                    contentDisplay={numbersPropositions[1].display}
                    cls={"gameProposition--button"}
                  />
                ) : null}
              </div>

              {!succeed ? (
                <SubmitNumber
                  level={level}
                  numberToFind={numberToFind}
                  levelIsLost={levelIsLost}
                  succeed={succeed}
                  setInstructionsIsDisplayed={setInstructionsIsDisplayed}
                  setNumberProposed={setNumberProposed}
                  levelIsWon={levelIsWon}
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
