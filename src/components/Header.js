import React from 'react';
import logo from '.././sprinkles-logo.png';

function Header() {
    return(
        <header>
            <img src={logo} alt='logo' width='100'/>
            <h1>Sprinkles of Joy</h1>
        </header> 
    );
}

export default Header;