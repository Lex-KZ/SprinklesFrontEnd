
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
                <div className="flex justify-center ">
                    <div className="max-w-2xl rounded overflow-hidden shadow-lg my-8 mx-4 py-8 px-16">
                        <div className="flex justify-center">
                            <p className="font-bold text-xl mb-2 mt-4">User Profile</p>
                        </div>
                        <p className="px-6 py-4">Username: {user.username}</p>
                        <p className="px-6 py-4">Name: {`${user.first_name} ${user.last_name}`}</p>
                        <p className="px-6 py-4">Email: {user.email}</p>
                        <h2 className="font-bold text-xl mb-2 mt-4">Enquiries:</h2>     
                        <div >                
                            {
                                enquiries.map(enquiry => (
                                        <div className="w-screen">
                                            <table className="table-auto min-w-max divide-y divide-gray-200">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col" className="w-1/4 px-4">ID</th>
                                                            <th scope="col" className="w-1/4 px-4">Topic</th>
                                                            <th scope="col" className="w-1/2 px-4">Message</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr key={enquiry.id}>
                                                            <td className="text-center">{enquiry.id}</td>
                                                            <td className="text-center">{enquiry.topic}</td>
                                                            <td className="text-center">{enquiry.message}</td>
                                                        </tr>
                                                    </tbody>
                                            </table>
                                        </div>
                            
                                ))
                            }
                        </div>
                    </div>
                </div>
            ) : (
                <div>Loading...</div>
            )
    )
}

export default Profile;

