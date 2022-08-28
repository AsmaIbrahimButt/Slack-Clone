import React from "react";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons//HelpOutline";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <Avatar className="header__avatar" alt="Asma Butt" src="" />
        <AccessTimeIcon />

        {/* Avatars for logged in user */}
        {/* Time icon */}
      
      </div>
      <div className="header__search">
        {/* Search icon */}
        {/* input */}
        <SearchIcon />
        <input  placeholder="Search Asma Butt"></input>
      </div>
      <div className="header__right">
        <HelpOutlineIcon />
        {/* help icon */}
    
      </div>
    </div>
  );
}

export default Header;
