import React from 'react';
import cupcake from '.././caitlyn-de-wild-9I4Oe-atXck-unsplash.jpg'

function About() {
    return(
        <div className="flex justify-center">
            <div className="max-w-2xl rounded overflow-hidden shadow-lg my-4 mx-4">
                <img src={cupcake} alt="pink cupcake" className="w-full"></img>
                <div className="flex justify-center">
                    <p className="font-bold text-xl mb-2 mt-4">About Us</p>
                </div>
                <div className="px-6 py-4">
                    <p>We are a small independent artisanal cake bakery based in Sydney. We craft unique, customised cakes for all 
                    occasions; Birthdays, Weddings, Graduations, Anniversaries. You name it, we craft for it!</p>
                    <br />
                    <p>Our cakes are made from the highest quality ingredients. We take great care to make sure that our cakes 
                    are made from ingredients from renewable and conscientious sources.</p>
                    <br />
                    <p>Book an appointment with us to discuss events that need a sprinkle of joy!</p>
                    <br />
                </div>
            </div>
        </div>
    )
}

export default About;