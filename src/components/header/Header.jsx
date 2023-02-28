import React, { useState } from "react";
import logo from "../../assets/logo.png";
import Navigation from "../navigation/Navigation";
import { CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgCloseO } from "react-icons/cg";

const Header = () => {
  const [isDeployed, setIsDeployed] = useState(false);
  return (
    <header className="header">
      <div className="header_container">
        <div className="header_icons">
          {isDeployed ? (
            <CgCloseO
              className={"icon--close"}
              onClick={() => setIsDeployed(!isDeployed)}
            />
          ) : (
            <GiHamburgerMenu
              className={"icon--burger"}
              onClick={() => setIsDeployed(!isDeployed)}
            />
          )}
        </div>
        <div className="header_logo">
          <picture>
            <img src={logo} alt="logo seer savior" />
          </picture>
        </div>
        <div className="header_icons">
          <CgProfile className={"icon--profile"} />
        </div>
        <h1>Seer Savior</h1>
        <Navigation
          classNav={
            isDeployed ? "header_navigation" : "header_navigation--hidden"
          }
        />
      </div>
    </header>
  );
};

export default Header;
