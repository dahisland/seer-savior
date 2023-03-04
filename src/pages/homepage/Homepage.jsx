import React, { useState, useEffect } from "react";
import Footer from "../../components/footer/Footer";
import Game from "../../components/game/Game";
import Header from "../../components/header/Header";
import { getRandomNumberByLevel } from "../../data/gameAlgo";
import { gameMessagesData, levelsData } from "../../data/gameData";

const Homepage = () => {
  const [numberToFind, setNumberToFind] = useState(0);
  const [numberProposed, setNumberProposed] = useState(null);
  const [numberOne, setNumberOne] = useState(null);
  const [numberTwo, setNumberTwo] = useState(null);
  const [messageResult, setMessageResult] = useState("");
  const [messageOutGame, setMessageOutGame] = useState(
    gameMessagesData.gameStart
  );
  const [succeed, setSucceed] = useState(false);
  const [level, setLevel] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);

  function generatePropositionsNumbers() {
    setNumberOne(getRandomNumberByLevel(level));
    setNumberTwo(getRandomNumberByLevel(level));
  }
  function levelIsWon() {
    setMessageResult("You won !!");
    setSucceed(true);
  }
  function levelIsLoosed() {
    setIsPlaying(false);
    setNumberProposed(null);
    setMessageOutGame(gameMessagesData.gameOver);
  }
  function getFirstLevelNumbers(lvl) {
    setLevel(lvl);
    setIsPlaying(true);
    generatePropositionsNumbers();
  }
  function proposeNumber(initNbr, nbrToCompare) {
    setNumberProposed(nbrToCompare);
    if (initNbr < nbrToCompare) {
      setMessageResult(
        levelsData.filter((data) => data.level === level)[0].tips.less
      );
      generatePropositionsNumbers();
    }
    if (initNbr > nbrToCompare) {
      setMessageResult(
        levelsData.filter((data) => data.level === level)[0].tips.more
      );
      generatePropositionsNumbers();
    }
    if (initNbr === nbrToCompare) {
      levelIsWon();
    }
  }
  function nextLevel() {
    if (level === levelsData.length) {
      setLevel(1);
      setIsPlaying(false);
      setMessageOutGame(gameMessagesData.gameEnd);
    } else {
      setLevel(level + 1);
    }
    generatePropositionsNumbers();
    setSucceed(false);
    setNumberProposed(null);
  }

  useEffect(() => {
    if (numberTwo === numberOne && numberTwo !== null && numberOne !== null) {
      generatePropositionsNumbers();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numberOne, numberTwo]);

  useEffect(() => {
    setNumberToFind(getRandomNumberByLevel(level));
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
        />
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;
