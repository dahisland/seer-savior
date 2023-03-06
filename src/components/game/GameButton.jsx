import React from "react";

const GameButton = ({
  handleClick,
  contentDisplay,
  customClass,
  attrPosture,
}) => {
  return (
    <button onClick={handleClick} className={customClass} posture={attrPosture}>
      {contentDisplay}
    </button>
  );
};

export default GameButton;
