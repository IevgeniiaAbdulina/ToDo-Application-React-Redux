import React from "react";
import { Link } from "react-router-dom";

import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

const Navbar = () => {
  return (
    <div style={{ backgroundColor: "#c4c4c4", padding: "16px" }}>
      <Link to="/">LOGO NAME</Link>
      <SignedInLinks />
      <SignedOutLinks />
    </div>
  );
};

export default Navbar;
