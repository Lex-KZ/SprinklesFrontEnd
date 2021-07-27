import React from 'react';
import { Link } from 'react-router-dom';

function CakeList({cakes}) {
    return(
        cakes ?
            (
                <div className="flex flex-wrap justify-around">
                {
                    cakes.map(cake => (
                        <Link to={`/cakes/${cake.id}`}>
                            <div key={cake.id} className="max-w-sm rounded shadow-lg my-16 mx-2">
                                <Link to={`/cakes/${cake.id}`}><img src={cake.image} alt="cake" width="200" className="w-full resize-y"></img></Link>
                                <div className="px-6 py-4">
                                    <p className="font-bold text-xl mb-2"><Link to={`/cakes/${cake.id}`}>{cake.name}</Link></p>
                                    <p className="text-gray-700 text-base">${cake.price}</p>
                                </div>
                            </div>
                        </Link>
                    ))
                } 
                </div>
            ) : (
                <div>Loading...</div>
            )
        
    )
}

export default CakeList;