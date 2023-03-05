import {
  formatNumberToMonth,
  formatNumberToHour,
} from "./formatNumber.functions";

// ---------------------------- //
// FORMAT FUNCTION SWITCH LEVELS
// ---------------------------- //

export function formatPropositionNumberByLevel(level, nbr) {
  let numberFormatted;
  switch (level) {
    case 1:
      numberFormatted = formatNumberToMonth(nbr);
      break;
    case 2:
      numberFormatted = formatNumberToHour(nbr);
      break;
    default:
      numberFormatted = formatNumberToMonth(nbr);
  }
  return numberFormatted;
}
