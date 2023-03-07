// Levels Data
export const levelsData = [
  {
    level: 1,
    algo: [12, 100],
    name: "Find the month",
    description: [
      "Policy needs our help !",
      "Last year, a dead woman body has been discovered in a mountain house of Alabama. We didn't have any suspect at that moment, but yesterday, we have arrested one. Actually, we have some trouble with his alibi and we would trap him during his audition. ",
      "We need to have certitude of what month he were on mountain holidays last year. ",
      "Please ! Help us to discover it !",
    ],
    clue: "A month in the last year, from january to december",
    tips: {
      less: "It was earlier...",
      more: "It was later...",
      exact: "Well done !!",
    },
    input: {
      type: "text",
      placeholder: ["Ex : april, May, march..."],
      unique: true,
      attributes: [{ min: "", max: "", step: "" }],
      unit: "",
    },
    messageWin:
      "Congrat Seer ! The suspect has been arrested thanks to you ! He fell into the trap and finished to confess his crime when we confronted him with his lie. You're blessed, seer !",
  },
  {
    level: 2,
    name: "Find the hour",
    algo: [24, 50],
    description: [
      "We need you again !",
      "This time, we have 3 suspects with solid alibi at certains hours of the day.",
      "But unfortunally, our legist has compromised the medical report, so we have to wait 2 more days to retreave hour of murder. We only can prolong custody for one suspect, and if we don't choose the right guy, we're afraid that murderer flee the country.",
      "Please, help us to discover the time of the murder !!",
    ],
    clue: "A schedule in a day, rounded to half an hour (Time system 24 hours)",
    tips: {
      less: "It was earlier...",
      more: "It was later...",
      exact: "Well done !!",
    },
    input: {
      type: "number",
      placeholder: ["Max 23", "00 or 30"],
      unique: false,
      attributes: [
        { min: "0", max: "23", step: "1" },
        { min: "0", max: "59", step: "30" },
      ],
      unit: "H",
    },
    messageWin:
      "Amazing work Seer ! We choosed the right guy and he's now in jail ! Medical report confirmed your prediction... I have to recognize that sometimes, you disturb me, Seer... Please, don't use your gift to bad actions... City needs an heros.",
  },
];

export const gameData = {
  gameStart: ["Are you ready to play ?", ""],
  gameEnd: ["You have finished all available levels !", "Try again ?"],
  gameOver: ["You lost !!", "You have to retry this level, sorry !"],
  gameButtons: {
    tipsHaiku: "Take time to meditate...",
    instructions: "BECOME THE CITY SEER SAVIOR",
    levelCaption: "Let's guess...",
  },
  gameInstructions: {
    title: "Instructions",
    instructions: [
      "To help the police in their investigations, use your gift as a medium to provide them with the crucial information they need. For each case, concentrate on one of the 2 hypotheses given and help yourself with the intuition suggested to refine your clairvoyance.",
      "At any time, you can choose to transmit your intuition directly to the police using the field provided for this purpose. But beware, your answer will be definitive. Make sure you're right if you don't want the survey to end in failure.",
      "Remember, you have to be quick and shrewd if you want to become the city's Seer Savior. Criminals won't waiting for you...",
    ],
  },
};

export const bonusScore = 50;

export const months = [
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
