const months = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];

// Algorithm to generate a random number
export function getRandomNumber(scale, round) {
  let nbr = Math.round(Math.random() * scale * 100) / 100;
  let result;
  if (String(nbr).includes(".")) {
    let int = parseInt(String(nbr).split(".")[0]);
    let decimal = Math.round((nbr - int) * 100);
    result = int + "." + parseInt(decimal / round) * round;
  } else {
    result = nbr;
  }
  return parseFloat(result);
}

// ------------------------------- //
// EXPORT RANDOM NUMBERS BY LEVEL
// ------------------------------- //

// Generate a random number for each level with difficulty crescent
export function getRandomNumberByLevel(level) {
  let randomNumber;
  switch (level) {
    case 1:
      randomNumber = getRandomNumber(11, 100);
      break;
    case 2:
      randomNumber = getRandomNumber(24, 50);
      break;
    default:
      randomNumber = getRandomNumber(12, 100);
  }
  return randomNumber;
}

// --------------- //
// DISPLAYS
// --------------- //

// Display number to month string format for Level 1
function convertNumberToMonth(number) {
  return months[number].charAt(0).toUpperCase() + months[number].substr(1);
}

// Display number to hour format for Level 2
function convertNumberToHour(number) {
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

// ------------------------ //
// EXPORT DISPLAYS BY LEVEL
// ------------------------ //

// Function to manage displays numbers for each level
export function convertNumberToDisplay(number, level) {
  let numberToDisplay;
  switch (level) {
    case 1:
      numberToDisplay = convertNumberToMonth(number);
      break;
    case 2:
      numberToDisplay = convertNumberToHour(number);
      break;
    default:
      numberToDisplay = 0;
  }
  return numberToDisplay;
}

// ------------------------ //
// INPUT EVENTS SUBMIT
// ------------------------ //

function inputProposeLevelOne(
  e,
  initialNbr,
  setNbrProposed,
  lvlWon,
  lvlLoosed
) {
  e.preventDefault();
  const value = e.target[0].value;
  let number = months.indexOf(value.charAt(0).toLowerCase() + value.substr(1));
  setNbrProposed(number);
  if (initialNbr === number) {
    lvlWon();
  } else {
    lvlLoosed();
  }
  e.target.reset();
}

function inputProposeLevelTwo(
  e,
  initialNbr,
  setNbrProposed,
  lvlWon,
  lvlLoosed
) {
  e.preventDefault();
  console.log(initialNbr);
  const proposition = e.target[0].value;
  const hour = parseFloat(proposition.split(/h|H/)[0]);
  const minutes = parseInt(proposition.split(/h|H/)[1]);
  let number = minutes === 30 ? hour + 0.5 : hour;
  console.log(initialNbr);
  console.log(number);
  setNbrProposed(number);
  if (initialNbr === number) {
    lvlWon();
  } else {
    lvlLoosed();
  }
  e.target.reset();
}

// ------------------------ //
// EXPORT INPUTS EVENTS SUBMIT
// ------------------------ //

export function inputPropositionByLevel(
  level,
  e,
  initialNbr,
  setNbrProposed,
  lvlWon,
  lvlLoosed
) {
  switch (level) {
    case 1:
      inputProposeLevelOne(e, initialNbr, setNbrProposed, lvlWon, lvlLoosed);
      break;
    case 2:
      inputProposeLevelTwo(e, initialNbr, setNbrProposed, lvlWon, lvlLoosed);
      break;
    default:
      inputProposeLevelOne(e, initialNbr, setNbrProposed, lvlWon, lvlLoosed);
  }
}
