import React from "react";
import { levelsData } from "../../data/gameData";

const SubmitNumber = ({
  inputPropositionByLevel,
  level,
  numberToFind,
  setNumberProposed,
  levelIsWon,
  levelIsLoosed,
  succeed,
}) => {
  return (
    <form
      className="game_submit-number"
      onSubmit={(e) =>
        inputPropositionByLevel(
          level,
          e,
          numberToFind,
          setNumberProposed,
          levelIsWon,
          levelIsLoosed
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
        value="I think I guessed !"
        disabled={succeed ? true : false}
      />
    </form>
  );
};

export default SubmitNumber;
