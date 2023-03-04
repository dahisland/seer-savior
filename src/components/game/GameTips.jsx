import React from "react";

const GameTips = ({
  numberProposed,
  convertNumberToDisplay,
  level,
  messageResult,
}) => {
  return (
    <div className="gamePropositions_tips">
      {numberProposed !== null ? (
        <p>
          {convertNumberToDisplay(numberProposed, level) + " ? "}
          <span>{messageResult}</span>
        </p>
      ) : (
        <p>Take time to meditate...</p>
      )}
    </div>
  );
};

export default GameTips;
