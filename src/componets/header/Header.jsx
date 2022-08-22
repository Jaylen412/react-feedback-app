import React from "react";

function Header(props) {
  return (
    <div>
      <header
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#e56b6f",
        }}
      >
        <nav>
          <h2>{props.text}</h2>
        </nav>
      </header>
    </div>
  );
}

export default Header;
