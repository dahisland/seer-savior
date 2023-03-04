import React from "react";
import { levelsData } from "../../data/gameData";

const LevelCaption = ({ level, getFirstLevelNumbers }) => {
  return (
    <React.Fragment>
      <h2> - CASE {level} -</h2>
      {levelsData
        .filter((item) => item.level === level)
        .map((item, index) => (
          <div key={"levelCaption-" + index} className={"gameContent_caption"}>
            <h3>{item.name}</h3>
            {item.description.map((txt, idx) => (
              <p key={"levelCaptionDescription-" + idx}>{txt}</p>
            ))}
            <p className="levelCaption_clue">To find : {item.clue}</p>
          </div>
        ))}
      <button onClick={() => getFirstLevelNumbers()} className="game--button">
        Let's guess
      </button>
    </React.Fragment>
  );
};

export default LevelCaption;
