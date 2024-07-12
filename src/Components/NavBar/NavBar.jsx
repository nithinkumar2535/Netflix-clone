import React from "react";
import "../NavBar/NavBar.css";

function NavBar() {
  return (
    <nav className="nav-bar">
      <img className="nav-logo" src="/logo.png" alt="" />
      <div>
        <button className="language-btn">
          English <i class="fa-solid fa-caret-down"></i>
        </button>
        <button>Sign In</button>
      </div>
    </nav>
  );
}

export default NavBar;
