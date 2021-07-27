import React from 'react';


function Profile({user}) {
    return(
        user ?
            (
                <div>
                    <h1>User Profile</h1>
                    <p>Username: {user.username}</p>
                    <p>Name: {`${user.first_name} ${user.last_name}`}</p>
                    <p>Email: {user.email}</p>
                </div>
            ) : (
                <div>Loading...</div>
            )
    )
}

export default Profile;
