import React, { useState } from "react";
import { ModaleFullscreen } from "modale-fullscreen-customizable";
import { RiCloseCircleFill } from "react-icons/ri";
import { loginFormData, signupFormData } from "../../data/logModaleData";
import {
  handleSubmitLogin,
  handleSubmitSignup,
} from "../../utils/logModaleHandleSubmit";
import LogModaleContent from "./LogModaleContent";

const LogModale = ({ setLogModaleDisplay }) => {
  const [isOnLogin, setIsOnLogin] = useState(true);

  return (
    <ModaleFullscreen
      eventOnClickIcon={() => setLogModaleDisplay(false)}
      modaleContent={
        isOnLogin ? (
          <LogModaleContent
            logModaleData={loginFormData}
            setIsOnLogin={() => setIsOnLogin(!isOnLogin)}
            handleSubmit={(e) => handleSubmitLogin(e)}
          />
        ) : (
          <LogModaleContent
            logModaleData={signupFormData}
            setIsOnLogin={() => setIsOnLogin(!isOnLogin)}
            handleSubmit={(e) => handleSubmitSignup(e)}
          />
        )
      }
      modaleTitle={isOnLogin ? "LOGIN" : "SIGNUP"}
      modaleIcon={<RiCloseCircleFill className={""} />}
      idInnerContainer="logModale_innerContainer"
      idModaleHeader="logModale_header"
      idModaleTitle="logModale_title"
      idModaleContent="logModale_content"
      idModaleIcon="logModale_icon"
    />
  );
};

export default LogModale;
