import React from 'react';
import { Link } from 'react-router-dom';

function CakeList({cakes}) {
    return(
        <div>
        {
            cakes.map(cake => (
                <div key={cake.id}>
                    <Link to={`/cakes/${cake.id}`}><img src={cake.image} alt="cake" width="200"></img></Link>
                    <p><Link to={`/cakes/${cake.id}`}>{cake.name}</Link></p>
                    <p>${cake.price}</p>
                </div>
            ))
        } 
        </div>
        
    )
}

export default CakeList;