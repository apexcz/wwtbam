import React from 'react';

import logo from "../../who-wants-to-be-a-millionaire.svg";

import './Header.css';

function Header() {
    return (
        <nav className="navbar navbar-light bg-dark">
            <a className="navbar-brand" href="/">
                <img src={logo} className="ray_box app-logo" alt="logo" />
                <h1 className="navbar-brand text-white p-3">Who Wants To Be A Millionaire</h1>
            </a>
        </nav>
    )
}

export default Header;
