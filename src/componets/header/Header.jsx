import React from "react";

function Header(props) {
  return (
    <div>
      <header style={{ display: "flex", justifyContent: "center" }}>
        <nav>
          <h2>{props.text}</h2>
        </nav>
      </header>
    </div>
  );
}

export default Header;
