
import React, { useEffect, useState } from 'react';
import { getUser, deleteUser } from './user'
import { getUserId } from './authentication'
import { getEnquiries } from './enquiry'



const Profile = () => {
    const id = getUserId();
    const [user , setUser] = useState(null);
    const [enquiries, setEnquiries] = useState([]);

    useEffect(() => {
        getUser(id) 
          .then(result => {
              setUser(result);
          })
    }, [id]);

    useEffect(() => {
        getEnquiries()
               .then(result => {
                   setEnquiries(result)
                   
            })
    }, [enquiries]);

    return(
        user ?
            (
                <div>
                    <h1>User Profile</h1>
                    <p>Username: {user.username}</p>
                    <p>Name: {`${user.first_name} ${user.last_name}`}</p>
                    <p>Email: {user.email}</p>
                    <h2>Enquiries</h2>     
                       <div>                
                           {
                               enquiries.map(enquiry => (
                                       <div key={enquiry.id}>
                                           <p>
                                               {enquiry.id}
                                               {enquiry.topic}
                                               {enquiry.message}
                                           </p>
                                       </div>
                          
                               ))
                           }
                       </div>
                </div>
            ) : (
                <div>Loading...</div>
            )
    )
}

export default Profile;

