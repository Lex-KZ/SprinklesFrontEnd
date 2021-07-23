import React from 'react';
import logo from '.././sprinkles-logo.png';
import { Link } from 'react-router-dom';

function Header() {
    return(
        <header>
            <Link to='/cakes'><img src={logo} alt='logo' width='100'/></Link>
            <h1><Link to='/cakes'>Sprinkles of Joy</Link></h1>
        </header> 
    );
}

export default Header;