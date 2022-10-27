import React from "react";

const Header = ({ handleToggleSwitch }) => {
  return (
    <div className="navbar">
      <h1>Notes</h1>
      <button
        onClick={() => handleToggleSwitch((prevMode) => !prevMode)}
        type="button"
        className="nav-btn"
      >
        Toggle Mode
      </button>
    </div>
  );
};

export default Header;
