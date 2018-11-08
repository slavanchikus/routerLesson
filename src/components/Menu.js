import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => (
  <header>
    <nav>
      <ul className="menu">
        <li>
          <NavLink
            exact
            to="/"
            activeClassName="menu_selected"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/news"
            activeClassName="menu_selected"
          >
            News
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/info"
            activeClassName="menu_selected"
          >
            Info
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);
