import React from 'react';

import logo from "../../who-wants-to-be-a-millionaire.svg";

import './Header.css';

function Header() {
    return (
        <nav className="navbar navbar-light bg-dark fixed-top">
            <a className="navbar-brand" href="/">
                <img src={logo} className="ray_box app-logo" alt="logo" />
                Who Wants To Be A Millionaire
            </a>
        </nav>
    )
}

export default Header;
