import React, { useState } from "react";
import logo from "../../assets/logo.png";
import Navigation from "../navigation/Navigation";
import { CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgCloseO } from "react-icons/cg";

const Header = () => {
  const [navParams, setNavParams] = useState({
    isDeployed: false,
    hasBeenDeployedOnce: false,
  });

  return (
    <header className="header">
      <div className="header_container">
        <div className="header_icons" id="container-navIcon">
          {navParams.isDeployed ? (
            <CgCloseO
              className={"icon--close"}
              onClick={() =>
                setNavParams({
                  isDeployed: false,
                  hasBeenDeployedOnce: true,
                })
              }
            />
          ) : (
            <GiHamburgerMenu
              className={"icon--burger"}
              onClick={() =>
                setNavParams({
                  isDeployed: true,
                  hasBeenDeployedOnce: true,
                })
              }
            />
          )}
        </div>
        <div
          className={
            navParams.isDeployed
              ? "header_logo logo--in"
              : navParams.hasBeenDeployedOnce
              ? "header_logo logo--out"
              : "header_logo"
          }
        >
          <picture>
            <img src={logo} alt="logo seer savior" />
          </picture>
        </div>
        <div className="header_icons" id="container-profileIcon">
          <CgProfile className={"icon--profile"} />
        </div>
        <h1>Seer Savior</h1>
        <Navigation
          classNav={
            navParams.isDeployed
              ? "header_navigation nav--in"
              : navParams.hasBeenDeployedOnce
              ? "header_navigation nav--out"
              : "header_navigation nav--hidden"
          }
        />
      </div>
    </header>
  );
};

export default Header;
