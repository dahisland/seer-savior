import { bonusScore } from "../../data/gameData";

export function calculateScore(bonus, levelData, numbersTested, setScore) {
  const maxClickLevel = levelData.algo[0] / (levelData.algo[1] / 100);
  const nbrClicksUser = numbersTested.length;
  let totalScore = parseInt(maxClickLevel - nbrClicksUser + bonus);
  if (nbrClicksUser <= 1) {
    totalScore += bonusScore;
  }
  setScore(totalScore);
}
