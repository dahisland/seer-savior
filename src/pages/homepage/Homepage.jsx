import React, { useState, useEffect } from "react";
import Footer from "../../components/footer/Footer";
import GameProvider from "../../components/game/GameProvider";
import Header from "../../components/header/Header";
import { levelsData, bonusScore, gameData } from "../../data/gameData";
import { user } from "../../data/mockData";
import { getRandomNbrByLevel } from "../../utils/gameAlgorithms/randomNumberByLevel.export";

const Homepage = () => {
  // Must be implemented in a global redux state
  const [isConnected, setIsConnected] = useState(false);
  const [userData, setUserData] = useState({
    userId: null,
    pseudo: "",
    scores: [{ level: null, maxScore: null }],
    level: null,
    picture: "",
  });

  const [level, setLevel] = useState(null);
  const [levelData, setLevelData] = useState([]);

  const [numberToFind, setNumberToFind] = useState(0);
  const [numberProposed, setNumberProposed] = useState({
    number: null,
    display: null,
  });
  const [numbersPropositions, setNumbersPropositions] = useState([
    {
      number: null,
      display: null,
    },
  ]);
  const [numbersTested, setNumbersTested] = useState([]);

  const [messageTips, setMessageTips] = useState("");
  const [messageGamePlayer, setMessageGamePlayer] = useState(["", ""]);
  const [instructionsIsDisplayed, setInstructionsIsDisplayed] = useState(false);
  const [levelIsDisplayed, setLevelIsDisplayed] = useState(false);

  const [succeed, setSucceed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(null);

  useEffect(() => {
    function getUserData() {
      setUserData(user);
    }
    if (isConnected) {
      getUserData();
      setLevel(user.level);
      setLevelData(levelsData.filter((item) => item.level === user.level)[0]);
    } else {
      setLevel(1);
      setLevelData(levelsData.filter((item) => item.level === 1)[0]);
    }
    setMessageGamePlayer(gameData.gameStart);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function generatePropositionsNumbers() {
    setNumbersPropositions([
      getRandomNbrByLevel(level, numbersTested),
      getRandomNbrByLevel(level, numbersTested),
    ]);
  }

  function calculateScore(bonus) {
    const maxClickLevel = levelData.algo[0] / (levelData.algo[1] / 100);
    const nbrClicksUser = numbersTested.length;
    let totalScore = parseInt(maxClickLevel - nbrClicksUser + bonus);
    if (nbrClicksUser <= 1) {
      totalScore += bonusScore;
    }
    setScore(totalScore);
  }
  function levelIsWon(bonus) {
    setMessageTips(levelData.tips.exact);
    setNumbersTested([]);
    calculateScore(bonus);
    setSucceed(true);
  }
  function levelIsLost() {
    setIsPlaying(false);
    setNumberProposed({
      number: null,
      display: null,
    });
    setScore(null);
    setNumbersTested([]);
    setMessageGamePlayer(gameData.gameOver);
  }
  function getFirstLevelNumbers() {
    generatePropositionsNumbers();
    setNumberToFind(getRandomNbrByLevel(level, numbersTested));
    setLevelIsDisplayed(true);
  }
  function beginLevel(lvl) {
    setLevel(lvl);
    setScore(null);
    generatePropositionsNumbers();
    setLevelIsDisplayed(false);
    setIsPlaying(true);
  }

  function proposeNumber(initNbr, objToCompare) {
    setNumberProposed(objToCompare);
    setInstructionsIsDisplayed(false);
    if (initNbr.number < objToCompare.number) {
      setMessageTips(levelData.tips.less);
      numbersTested.push(objToCompare.number);
      generatePropositionsNumbers();
    }
    if (initNbr.number > objToCompare.number) {
      setMessageTips(levelData.tips.more);
      numbersTested.push(objToCompare.number);
      generatePropositionsNumbers();
    }
    if (initNbr.number === objToCompare.number) {
      levelIsWon(0);
    }
  }

  function nextLevel() {
    if (level === levelsData.length) {
      setLevel(1);
      setIsPlaying(false);
      setMessageGamePlayer(gameData.gameEnd);
      setInstructionsIsDisplayed(false);
    } else {
      setLevel(level + 1);
    }
    setLevelIsDisplayed(false);
    setNumbersTested([]);
    generatePropositionsNumbers();
    setSucceed(false);
    setNumberProposed({
      number: null,
      display: null,
    });
  }

  useEffect(() => {
    if (numbersPropositions[0].number !== null) {
      if (
        numbersPropositions[0].number === numbersPropositions[1].number &&
        numbersTested.length + 1 !==
          levelData.algo[0] / (levelData.algo[1] / 100)
      ) {
        generatePropositionsNumbers();
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numbersPropositions]);

  useEffect(() => {
    if (level !== null) {
      setNumberToFind(getRandomNbrByLevel(level, numbersTested));
      setLevelData(levelsData.filter((item) => item.level === level)[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [level]);

  return (
    <div className="page-container">
      <Header />
      <main>
        {level !== null ? (
          <GameProvider
            level={level}
            levelData={levelData}
            gameData={gameData}
            numberToFind={numberToFind}
            numberProposed={numberProposed}
            setNumberProposed={setNumberProposed}
            numbersPropositions={numbersPropositions}
            messageTips={messageTips}
            messageGamePlayer={messageGamePlayer}
            instructionsIsDisplayed={instructionsIsDisplayed}
            setInstructionsIsDisplayed={setInstructionsIsDisplayed}
            levelIsDisplayed={levelIsDisplayed}
            succeed={succeed}
            isPlaying={isPlaying}
            score={score}
            getFirstLevelNumbers={getFirstLevelNumbers}
            beginLevel={beginLevel}
            proposeNumber={proposeNumber}
            levelIsWon={levelIsWon}
            levelIsLost={levelIsLost}
            nextLevel={nextLevel}
          />
        ) : null}
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;
