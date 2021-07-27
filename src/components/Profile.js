
import React, { useEffect, useState } from 'react';
import { getUser } from './user'
import { getUserId } from './authentication'


const Profile = () => {
    const id = getUserId();
    const [user , setUser] = useState();

    useEffect(() => {
        getUser(id) 
          .then(result => {
              setUser(result);
          });
    }, [id]);




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
