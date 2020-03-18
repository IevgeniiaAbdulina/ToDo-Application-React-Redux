import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/create">New Project | </NavLink>
        <NavLink to="/">Log Out | </NavLink>
        <NavLink to="/">Avatar</NavLink>
      </li>
    </ul>
  );
};

export default SignedInLinks;
