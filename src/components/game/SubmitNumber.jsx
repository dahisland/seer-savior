import React from "react";
import { levelsData } from "../../data/gameData";
import { proposeNumberByInput } from "../../utils/gameHandleSubmit/submitByLevel.export";

const SubmitNumber = ({
  setNumberProposed,
  level,
  numberToFind,
  levelIsWon,
  levelIsLost,
  succeed,
  setInstructionsIsDisplayed,
}) => {
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
        placeholder={
          levelsData.filter((el) => el.level === level)[0].placeholder
        }
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
