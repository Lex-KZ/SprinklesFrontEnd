import React from 'react'
import logo from '.././sprinkles-logo.png'

function LandingPage(){
    return(
        <div id="landing-page">
            <img src={logo} alt="Sprinkles of Joy cupcake logo" height="50px"></img>
            <h1>Sprinkles of Joy</h1>
            <button>View Our Creations</button>
        </div>
    )
}

export default LandingPage;