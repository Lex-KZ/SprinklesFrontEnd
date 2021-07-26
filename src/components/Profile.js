import React, { useEffect } from 'react';
import { getUser } from './user'
import { getUserId } from './authentication'

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

//<Button onClick={handleDelete}>Delete</Button>