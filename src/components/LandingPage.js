import React from 'react';
import {Link} from 'react-router-dom';

function LandingPage(){
    return(
        <div className="bg-hero-pattern bg-cover bg-center py-32">
            <div id="landing-page" className="container mx-auto flex flex-row justify-end items-center py-32" >
                <div className="flex flex-col ">
                    <p className="text-4xl text-indigo-100 font-serif mb-10 ">Sprinkles of Joy</p>
                    <Link to='/cakes'><button className="bg-purple-300 w-max rounded py-2 px-4 hover:bg-purple-400 text-white">View Our Creations</button></Link>
                </div>
                
            </div>
        </div>
    )
}

export default LandingPage;