import React from 'react';
import cupcake from '.././caitlyn-de-wild-9I4Oe-atXck-unsplash.jpg'

function About() {
    return(
        <div>
            <h1>About Us</h1>
            <img src={cupcake} alt="pink cupcake" width="60%"></img>
            <p>We are a small independent artisanal cake bakery based in Sydney. We craft unique, customised cakes for all 
            occasions; Birthdays, Weddings, Graduations, Anniversaries. You name it, we craft for it!</p>
            <p>Our cakes are made from the highest quality ingredients. We take great care to make sure that our cakes 
            are made from ingredients from renewable and conscientious sources.</p>
            <p>Book an appointment with us to discuss events that need a sprinkle of joy!</p>
        </div>
    )
}

export default About;