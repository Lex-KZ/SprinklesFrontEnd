import React from 'react';

function Profile({user}) {
    return(
        <div>
            <h1>User Profile</h1>
            <p>Username: {/*user.username*/}</p>
            <p>Name: {/*user.name*/}</p>
            <p>Email: {/*user.email*/}</p>
            <p>Meetings: </p>
        </div>
    )
}

export default Profile;