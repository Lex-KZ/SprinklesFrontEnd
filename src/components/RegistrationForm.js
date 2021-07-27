import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { signUp, setToken, setUser } from './authentication'

function RegistrationForm(){
    const history = useHistory();
    const initialFormState = {
		username: '', 
		email: '',
        first_name: '',
        last_name: '',
        middle_name: '', 
		password: '', 
		password_confirmation: ''
	}

    const [formState, setFormState] = useState(initialFormState);
    const [errorMessage, setErrorMessage] = useState(null);
    function handleChange(event) {
		setFormState({
			...formState,
			[event.target.name]: event.target.value
		})
	}

    function handleRegister(event) {
		event.preventDefault();
        setErrorMessage(null);
		signUp(formState)
        .then(({jwt, user_id}) => {
			console.log(user_id, jwt);
            history.push("/cakes");
            return Promise.resolve(setToken(jwt), setUser(user_id));
		})
		.catch((error) => {
            if (error.response){
                console.log(error.response)
                setErrorMessage(error.response)
            } else if (error.request) {
                console.log(error.request)
            } else {
                console.log(error)    
            }
	    })
	}

    return(
        <div className=" flex justify-center w-full pt-4">
            <form onSubmit={handleRegister} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-6">
                <div className="flex justify-center">
                    <p className="font-bold text-xl mb-2 mt-4">Sign Up</p>
                </div>
                <fieldset className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Email&#42;</label>
                    <input name='email' type='email' value={formState.email} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-20 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
                </fieldset>
                <fieldset className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Username&#42;</label>
                    <input name='username' type='text' value={formState.username} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-20 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
                </fieldset>
                <fieldset className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">First Name&#42;</label>
                    <input name='first_name' type='text' value={formState.firstName} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-20 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
                </fieldset>
                <fieldset className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Last Name&#42;</label>
                    <input name='last_name' type='text' value={formState.lastName} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-20 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
                </fieldset>
                <fieldset className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Middle Name</label>
                    <input name='middle_name' type='text' value={formState.middleName} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-20 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
                </fieldset>
                <fieldset className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Password&#42;</label>
                    <input name='password' type='password' value={formState.password} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-20 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
                </fieldset>
                <fieldset className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Confirm Password&#42;</label>
                    <input name='password_confirmation' type='password' value={formState.password_confirmation} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-20 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
                    <p className="block text-gray-700 text-sm font-bold mb-2">&#42;marks mandatory fields</p>
                    {errorMessage && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                            {
                                Object.keys(errorMessage.data).map((key, i) => (
                                    <p key={i}>
                                    <span>{key}</span>
                                    <span>: {errorMessage.data[key]}</span>
                                    </p>
                                ))
                            }
                        </div>
                    )}
                </fieldset>
                <input name='submit' type='submit' value='Sign Up' className="bg-purple-400 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"></input>
            </form>
        </div>
    )
}

export default RegistrationForm;