import React from 'react';

const Header = () => (
    return (
        <>
        <nav>
            <NavLink
            exact
            to="/"
            className={style.link}
            activeClassName={style.activeLink}
            exact
            >
            Home
            </NavLink>

            <NavLink to="/" className={style.link} activeClassName={style.activeLink} exact>
            Movies
            </NavLink>
        </nav>
        </>
    )
);

export default Header;
