import React, { useContext } from "react";
import { proposeNumberByInput } from "../../utils/gameHandleSubmit/submitByLevel.export";
import { GameContext } from "./GameProvider";

const SubmitNumber = () => {
  const {
    level,
    levelData,
    numberToFind,
    setNumberProposed,
    levelIsWon,
    levelIsLost,
    setInstructionsIsDisplayed,
    succeed,
  } = useContext(GameContext);

  return (
    <form
      className="game_submit-number"
      onSubmit={(e) =>
        proposeNumberByInput(
          e,
          level,
          numberToFind,
          setNumberProposed,
          levelIsWon,
          levelIsLost,
          setInstructionsIsDisplayed
        )
      }
    >
      <input
        type="text"
        disabled={succeed ? true : false}
        placeholder={levelData.placeholder}
      />
      <input
        type="submit"
        value="I'm sure !! I guessed !"
        className="game--button"
        disabled={succeed ? true : false}
      />
    </form>
  );
};

export default SubmitNumber;
