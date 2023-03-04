// Levels Data
export const levelsData = [
  {
    level: 1,
    name: "Find the month",
    description: [
      "Policy need our help !",
      "A cold case is to the point to be resolved. Last year, a dead woman body has been discovered in a mountain house of Alabama.",
      "Policy didn't have any suspect at that moment, cause woman were an old lady with no family",
      "But now, we have found one suspect, but we have some trouble with his alibi and we need to track him.",
      "We need to have certitude of what month he were on mountain holidays. Please ! Help us to discover it !",
    ],
    tips: { less: "It was earlier...", more: "It was later..." },
    placeholder: "Ex : march, May...",
  },
  {
    level: 2,
    name: "Find the hour",
    description: [
      "We need you again !",
      "This time, we have 3 suspects with solid alibi at certains hours of the day",
      "But unfortunally, our legist has compromised the medical report, we have to wait 2 more days to retreave hour of murder",
      "We only can prolongate a garde à vue for one suspect",
      "Please, help us to discover hour of murder !!",
    ],
    tips: { less: "It was earlier...", more: "It was later..." },
    placeholder: "Ex : 8h, 20h30, 09h...",
  },
];

export const gameMessagesData = {
  gameStart: ["Are you ready to play ?", ""],
  gameEnd: ["You have finished all levels !", "Try again ?"],
  gameOver: ["You loose !!", "You have to retry this level, sorry !"],
};
