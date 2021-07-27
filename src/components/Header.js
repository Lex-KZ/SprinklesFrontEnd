import React from 'react';
import logo from '.././sprinkles-logo.png';
import { Link } from 'react-router-dom';

function Header() {
    return(
        <header className="flex items-center flex-wrap bg-teal p-6 bg-pink-300">
            <Link to='/cakes'><img src={logo} alt='logo' width='100'/></Link>
            <p className="tiny:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-serif"><Link to='/cakes'>Sprinkles of Joy</Link></p>
        </header> 
    );
}

export default Header;