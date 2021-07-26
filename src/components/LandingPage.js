import React from 'react';
import logo from '.././sprinkles-logo.png';
import {Link} from 'react-router-dom';

function LandingPage(){
    return(
        <div id="landing-page">
            <img src={logo} alt="Sprinkles of Joy cupcake logo" height="50px"></img>
            <h1>Sprinkles of Joy</h1>
            <Link to='/cakes'><button>View Our Creations</button></Link>
        </div>
    )
}

export default LandingPage;