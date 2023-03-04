import React from "react";

const GameButton = ({ handleClick, disable, contentDisplay, cls }) => {
  return (
    <button onClick={handleClick} disabled={disable} className={cls}>
      {contentDisplay}
    </button>
  );
};

export default GameButton;
