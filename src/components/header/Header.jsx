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
      <h1>Seer Savior</h1>
      <div className="header_container">
        <div className="header_icon--nav">
          {isDeployed ? (
            <CgCloseO size={25} onClick={() => setIsDeployed(!isDeployed)} />
          ) : (
            <GiHamburgerMenu
              size={25}
              onClick={() => setIsDeployed(!isDeployed)}
            />
          )}
        </div>
        <div className="header_logo">
          <picture>
            <img src={logo} alt="logo seer savior" />
          </picture>
        </div>
        <div className="header_icon--profile">
          <CgProfile size={25} />
        </div>
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
