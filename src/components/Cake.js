import React from 'react';
import { Link } from 'react-router-dom';

function Cake({ cake }) {
    return(
        <div className="flex justify-center">
            <div className="max-w-lg rounded overflow-hidden shadow-lg my-8 mx-4">
                <img src={cake.image} alt='cake' className="w-full"></img>
                <div className="px-6 py-4">
                    <dl>
                        <dd className="font-bold text-xl mb-2">{cake.name}</dd>
                    </dl>
                    <dl>
                        <dd className="text-gray-700 text-base">${cake.price}</dd>
                    </dl>
                    <dl>
                        <dt className="font-bold mb-1">Ingredients</dt>
                        <dd>{cake.ingredients}</dd>
                    </dl>
                    <dl>
                        <dt className="font-bold mt-4 mb-1">Description</dt>
                        <dd>{cake.description}</dd>
                    </dl>
                </div>
                <div className="px-6 py-4 flex justify-center">
                    <Link to='/cakes'>&larr;&nbsp;Back</Link>
                </div>
            </div>
        </div>
    );
}

export default Cake;