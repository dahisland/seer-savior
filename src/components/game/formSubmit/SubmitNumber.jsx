import React, { useContext } from "react";
import { proposeNumberByInput } from "../../../utils/gameHandleSubmit/submitByLevel.export";
import { GameContext } from "../GameProvider";
import InputNumber from "./InputNumber";

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
      {levelData.input.unique ? (
        <div className="submitNumber_inputs">
          <InputNumber
            inputType={levelData.input.type}
            inputPlaceholder={levelData.input.placeholder[0]}
            inputAttr={levelData.input.attributes[0]}
            succeed={succeed}
          />
        </div>
      ) : (
        <div className="submitNumber_inputs">
          <InputNumber
            inputType={levelData.input.type}
            inputPlaceholder={levelData.input.placeholder[0]}
            inputAttr={levelData.input.attributes[0]}
            succeed={succeed}
          />
          <p>{levelData.input.unit}</p>
          <InputNumber
            inputType={levelData.input.type}
            inputPlaceholder={levelData.input.placeholder[1]}
            inputAttr={levelData.input.attributes[1]}
            succeed={succeed}
          />
        </div>
      )}

      <input
        type="submit"
        value="I know it !"
        className="game--button"
        disabled={succeed ? true : false}
      />
    </form>
  );
};

export default SubmitNumber;
