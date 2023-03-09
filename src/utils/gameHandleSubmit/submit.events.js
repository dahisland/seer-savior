import { bonusScore } from "../../data/gameData/gameValues";
import { months } from "../../data/gameData/gameValues";
import { formatPropositionNumberByLevel } from "../gameFormatting/formatByLevel.export";

// ------------------------ //
// INPUT EVENTS SUBMIT
// ------------------------ //

export function proposeNumberByInputLevelOne(
  e,
  level,
  initialNbr,
  setNumberProposed,
  lvlWon,
  lvlLost,
  setInstructionsIsDisplayed
) {
  e.preventDefault();
  const value = e.target[0].value;
  let number = months.indexOf(value.charAt(0).toLowerCase() + value.substr(1));
  if (number !== -1 && initialNbr.number === number) {
    setNumberProposed({
      number: number,
      display: formatPropositionNumberByLevel(level, number),
    });
    lvlWon(bonusScore);
  } else {
    lvlLost();
  }
  setInstructionsIsDisplayed(false);
  e.target.reset();
}

export function proposeNumberByInputLevelTwo(
  e,
  level,
  initialNbr,
  setNumberProposed,
  lvlWon,
  lvlLost,
  setInstructionsIsDisplayed
) {
  e.preventDefault();
  const hour = parseFloat(e.target[0].value);
  let minutes = parseInt(e.target[1].value);
  if (isNaN(minutes)) {
    minutes = 0;
  }
  let number = minutes === 30 ? hour + 0.5 : hour;

  if (initialNbr.number === number) {
    setNumberProposed({
      number: number,
      display: formatPropositionNumberByLevel(level, number),
    });
    lvlWon(bonusScore);
  } else {
    lvlLost();
  }

  setInstructionsIsDisplayed(false);
  e.target.reset();
}
