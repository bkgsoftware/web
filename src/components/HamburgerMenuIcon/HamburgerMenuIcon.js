import React from "react";
import "./HamburgerMenuIcon.css";


const HamburgerMenuIcon = ({isOpen = false}) => {
    return (
        <div className={`hamburger ${isOpen ? 'open' : ''}`}>
          <span className="line top"></span>
          <span className="line middle"></span>
          <span className="line bottom"></span>
        </div>
    );
};

export default HamburgerMenuIcon;