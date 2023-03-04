import React from "react";
import { levelsData } from "../../data/gameData";

const LevelCaption = ({ level }) => {
  return (
    <React.Fragment>
      {levelsData
        .filter((item) => item.level === level)
        .map((item, index) => (
          <div key={"levelCaption-" + index} className={"gameContent_caption"}>
            <h3>{item.name}</h3>
            {item.description.map((txt, idx) => (
              <p key={"levelCaptionDescription-" + idx}>{txt}</p>
            ))}
          </div>
        ))}
    </React.Fragment>
  );
};

export default LevelCaption;
