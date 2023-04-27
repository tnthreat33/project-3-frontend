import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div className="navbar">
      <NavLink exact to="/"> Home</NavLink>
      <NavLink to="/games"> Games</NavLink>
      <NavLink to="/teams"> Teams</NavLink>
    </div>
  );
}

export default NavBar;