import { bonusScore } from "../../data/gameData";
import { months } from "../../data/gameData";
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
  const proposition = e.target[0].value;
  const arrayNumber = proposition.split(/\D/).filter((item) => item !== "");
  const hour = parseFloat(arrayNumber[0]);
  const minutes = parseInt(arrayNumber[1]);
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
