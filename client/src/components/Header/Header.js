import React from 'react';
import Logo from '../Logo/Logo';

function Header() {
    return (
        <nav class="navbar navbar-light bg-dark fixed-top">
            <a class="navbar-brand" href="/">
                <Logo />
                Who Wants To Be A Millionaire
            </a>
        </nav>
    )
}

export default Header;
