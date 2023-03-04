import React, { useState, useEffect } from "react";
import Footer from "../../components/footer/Footer";
import Game from "../../components/game/Game";
import Header from "../../components/header/Header";
import { getRandomNumberByLevel } from "../../data/gameAlgo";
import { gameMessagesData, levelsData } from "../../data/gameData";
import { bonusScore } from "../../data/gameAlgo";

const Homepage = () => {
  const [numberToFind, setNumberToFind] = useState(0);
  const [numberProposed, setNumberProposed] = useState(null);
  const [numberOne, setNumberOne] = useState(null);
  const [numberTwo, setNumberTwo] = useState(null);
  const [numbersTested, setNumbersTested] = useState([]);
  const [messageResult, setMessageResult] = useState("");
  const [messageOutGame, setMessageOutGame] = useState(
    gameMessagesData.gameStart
  );
  const [gameIntro, setGameIntro] = useState("play");
  const [levelIntro, setLevelIntro] = useState("intro");
  const [succeed, setSucceed] = useState(false);
  const [level, setLevel] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(null);

  function generatePropositionsNumbers() {
    setNumberOne(getRandomNumberByLevel(level, numbersTested));
    setNumberTwo(getRandomNumberByLevel(level, numbersTested));
  }
  function calculateScore(bonus) {
    const algoRef = levelsData.filter((item) => item.level === level)[0].algo;
    const maxClickLevel = algoRef[0] / (algoRef[1] / 100);
    const nbrClicksUser = numbersTested.length;
    let totalScore = parseInt(maxClickLevel - nbrClicksUser + bonus);
    if (nbrClicksUser <= 1) {
      totalScore += bonusScore;
    }
    setScore(totalScore);
  }
  function levelIsWon(bonus) {
    setMessageResult("Well done !");
    calculateScore(bonus);
    setSucceed(true);
  }
  function levelIsLoosed() {
    setIsPlaying(false);
    setNumberProposed(null);
    setScore(null);
    setNumbersTested([]);
    setMessageOutGame(gameMessagesData.gameOver);
  }
  function getFirstLevelNumbers() {
    generatePropositionsNumbers();
    setLevelIntro("game");
  }
  function beginLevel(lvl) {
    setLevel(lvl);
    setScore(null);
    setLevelIntro("intro");
    setIsPlaying(true);
  }

  function proposeNumber(initNbr, nbrToCompare) {
    setNumberProposed(nbrToCompare);
    setGameIntro("play");
    if (initNbr < nbrToCompare) {
      setMessageResult(
        levelsData.filter((data) => data.level === level)[0].tips.less
      );
      numbersTested.push(nbrToCompare);
      generatePropositionsNumbers();

      console.log(numbersTested);
    }
    if (initNbr > nbrToCompare) {
      setMessageResult(
        levelsData.filter((data) => data.level === level)[0].tips.more
      );
      numbersTested.push(nbrToCompare);
      generatePropositionsNumbers();
      console.log(numbersTested);
    }
    if (initNbr === nbrToCompare) {
      levelIsWon(0);
    }
  }
  function nextLevel() {
    if (level === levelsData.length) {
      setLevel(1);
      setIsPlaying(false);
      setMessageOutGame(gameMessagesData.gameEnd);
      setGameIntro("play");
    } else {
      setLevel(level + 1);
    }
    setLevelIntro("intro");
    setNumbersTested([]);
    generatePropositionsNumbers();
    setSucceed(false);
    setNumberProposed(null);
  }

  const levelsDataAlgo = levelsData.filter((item) => item.level === level)[0]
    .algo;

  useEffect(() => {
    if (
      numberTwo === numberOne &&
      numberTwo !== null &&
      numberOne !== null &&
      numbersTested.length + 1 !== levelsDataAlgo[0] / (levelsDataAlgo[1] / 100)
    ) {
      generatePropositionsNumbers();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numberOne, numberTwo]);

  useEffect(() => {
    setNumberToFind(getRandomNumberByLevel(level, numbersTested));
  }, [level]);

  return (
    <div className="page-container">
      <Header />
      <main>
        <Game
          level={level}
          isPlaying={isPlaying}
          numberToFind={numberToFind}
          proposeNumber={proposeNumber}
          numberOne={numberOne}
          numberTwo={numberTwo}
          succeed={succeed}
          numberProposed={numberProposed}
          setNumberProposed={setNumberProposed}
          messageResult={messageResult}
          levelIsWon={levelIsWon}
          levelIsLoosed={levelIsLoosed}
          nextLevel={nextLevel}
          getFirstLevelNumbers={getFirstLevelNumbers}
          messageOutGame={messageOutGame}
          gameIntro={gameIntro}
          setGameIntro={setGameIntro}
          levelIntro={levelIntro}
          setLevelIntro={setLevelIntro}
          beginLevel={beginLevel}
          score={score}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;
