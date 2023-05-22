import React from "react";

function Header({modeHandler, isDarkMode }) {
  return (
    <header>
      <h2>Shopster</h2>
      <button onClick={modeHandler}>
        {isDarkMode ? "Dark" : "Light"} Mode
      </button>
    </header>
  );
}

export default Header;
