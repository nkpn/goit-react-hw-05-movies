import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css';

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink
            exact
            to="/"
            className={style.link}
            activeClassName={style.activeLink}
          >
            Home
          </NavLink>

          <NavLink
            to="/movies"
            className={style.link}
            activeClassName={style.activeLink}
            exact
          >
            Movies
          </NavLink>
        </nav>
      </header>
    </>
  );
};

export default Header;
