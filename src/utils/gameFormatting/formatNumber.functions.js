import { months } from "../../data/gameData/gameValues";

// ------------------ //
// FORMATS FUNCTIONS
// ------------------ //

// Format number to month string (Level 1)
export function formatNumberToMonth(number) {
  return months[number].charAt(0).toUpperCase() + months[number].substr(1);
}

// Format number to hour (Level 2)
export function formatNumberToHour(number) {
  let hour = String(number).includes(".")
    ? parseInt(String(number).split(".")[0])
    : number;
  let minute = Math.round((number - hour) * 100);
  let minutePercent = parseInt((minute * 60) / 100);
  let hourToDisplay = hour < 10 ? "0" + hour : hour;
  let minuteToDisplay =
    minutePercent < 10 ? "0" + minutePercent : minutePercent;
  return hourToDisplay + "H" + minuteToDisplay;
}
