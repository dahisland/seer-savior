import {
  proposeNumberByInputLevelOne,
  proposeNumberByInputLevelTwo,
} from "./submit.events";

// --------------------------- //
// EXPORT INPUTS EVENTS SUBMIT
// --------------------------- //

export function proposeNumberByInput(
  e,
  level,
  initialNbr,
  setNumberProposed,
  lvlWon,
  lvlLost,
  setInstructionsIsDisplayed
) {
  switch (level) {
    case 1:
      proposeNumberByInputLevelOne(
        e,
        level,
        initialNbr,
        setNumberProposed,
        lvlWon,
        lvlLost,
        setInstructionsIsDisplayed
      );
      break;
    case 2:
      proposeNumberByInputLevelTwo(
        e,
        level,
        initialNbr,
        setNumberProposed,
        lvlWon,
        lvlLost,
        setInstructionsIsDisplayed
      );
      break;
    default:
      proposeNumberByInputLevelOne(
        e,
        level,
        initialNbr,
        setNumberProposed,
        lvlWon,
        lvlLost,
        setInstructionsIsDisplayed
      );
  }
}
