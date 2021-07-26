import React from 'react';
import { Link } from 'react-router-dom';

function Cake({ cake }) {
    return(
        <>
            <img src={cake.image} alt='cake'></img>
            <dl>
                <dd>{cake.name}</dd>
            </dl>
            <dl>
                <dd>${cake.price}</dd>
            </dl>
            <dl>
                <dt>Ingredients</dt>
                <dd>{cake.ingredients}</dd>
            </dl>
            <dl>
                <dt>Description</dt>
                <dd>{cake.description}</dd>
            </dl>
            <Link to='/cakes'>&larr;&nbsp;Back</Link>
        </>
    );
}

export default Cake;