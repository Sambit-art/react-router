import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <>
      <Link style={{ margin: "10px" }} to="/home">
        Home
      </Link>
      <Link style={{ margin: "10px" }} to="/contact">
        Contact
      </Link>
      <Link style={{ margin: "10px" }} to="/about">
        About
      </Link>
    </>
  );
}
export default Menu;
