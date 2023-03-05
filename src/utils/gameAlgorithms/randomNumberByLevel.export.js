import { levelsData } from "../../data/gameData";
import { generateRandomNumber } from "./randomNumber.functions";
import { formatPropositionNumberByLevel } from "../gameFormatting/formatByLevel.export";
// ------------------------------- //
// EXPORT GET RANDOM NUMBER BY LEVEL
// ------------------------------- //

// Generate object with random number and number formatted for each level
export function getRandomNbrByLevel(level, nbrTested) {
  const levelsDataAlgo = levelsData.filter((item) => item.level === level)[0]
    .algo;
  let randomNumber = generateRandomNumber(levelsDataAlgo[0], levelsDataAlgo[1]);
  while (nbrTested.includes(randomNumber)) {
    randomNumber = generateRandomNumber(levelsDataAlgo[0], levelsDataAlgo[1]);
  }
  let formattedRandomNbr = formatPropositionNumberByLevel(level, randomNumber);
  return { number: randomNumber, display: formattedRandomNbr };
}
