import React from "react";
import { navItemsData } from "../../data/headerData";
import { NavLink } from "react-router-dom";

const Navigation = ({ classNav }) => {
  return (
    <nav className={classNav}>
      <ul>
        {navItemsData
          .sort((a, b) => a.position - b.position)
          .map((item, index) => (
            <li key={"headerNavItem-" + index}>
              <NavLink to={item.navlink}>{item.name}</NavLink>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Navigation;
