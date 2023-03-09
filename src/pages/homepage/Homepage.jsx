import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionGetProfile } from "../../redux/actions/user/getProfile.action";
import Footer from "../../components/footer/Footer";
import GameProvider from "../../components/game/GameProvider";
import Header from "../../components/header/Header";
import { levelsData, gameData } from "../../data/gameData";
import { calculateScore } from "../../utils/gameAlgorithms/calculateScore.function";
import { getRandomNbrByLevel } from "../../utils/gameAlgorithms/randomNumberByLevel.export";

const Homepage = () => {
  const { isConnected, profile, token } = useSelector((state) => state.user);
  const dispatch = useDispatch();

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
    if (isConnected) {
      actionGetProfile(dispatch, token);
      setLevel(profile.level);
      setLevelData(
        levelsData.filter((item) => item.level === profile.level)[0]
      );
    } else {
      setLevel(1);
      setLevelData(levelsData.filter((item) => item.level === 1)[0]);
    }
    setMessageGamePlayer(gameData.gameStart);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isConnected, profile]);

  function generatePropositionsNumbers() {
    setNumbersPropositions([
      getRandomNbrByLevel(level, numbersTested),
      getRandomNbrByLevel(level, numbersTested),
    ]);
  }

  function levelIsWon(bonus) {
    setMessageTips(levelData.tips.exact);
    setNumbersTested([]);
    calculateScore(bonus, levelData, numbersTested, setScore);
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
