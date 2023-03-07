import React from "react";

const InputNumber = ({ inputType, inputPlaceholder, inputAttr, succeed }) => {
  return inputType === "number" ? (
    <input
      type={inputType}
      disabled={succeed ? true : false}
      placeholder={inputPlaceholder}
      min={inputAttr.min}
      max={inputAttr.max}
      step={inputAttr.step}
    />
  ) : (
    <input
      type={inputType}
      disabled={succeed ? true : false}
      placeholder={inputPlaceholder}
    />
  );
};

export default InputNumber;
