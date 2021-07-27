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
        <form onSubmit={handleRegister}>
            <h2>Sign Up</h2>
            <fieldset>
                <label>Email&#42;</label>
                <input name='email' type='email' value={formState.email} onChange={handleChange}></input>
            </fieldset>
            <fieldset>
                <label>Username&#42;</label>
                <input name='username' type='text' value={formState.username} onChange={handleChange}></input>
            </fieldset>
            <fieldset>
                <label>First Name&#42;</label>
                <input name='first_name' type='text' value={formState.firstName} onChange={handleChange}></input>
            </fieldset>
            <fieldset>
                <label>Last Name&#42;</label>
                <input name='last_name' type='text' value={formState.lastName} onChange={handleChange}></input>
            </fieldset>
            <fieldset>
                <label>Middle Name</label>
                <input name='middle_name' type='text' value={formState.middleName} onChange={handleChange}></input>
            </fieldset>
            <fieldset>
                <label>Password&#42;</label>
                <input name='password' type='password' value={formState.password} onChange={handleChange}></input>
            </fieldset>
            <fieldset>
                <label>Confirm Password&#42;</label>
                <input name='password_confirmation' type='password' value={formState.password_confirmation} onChange={handleChange}></input>
                <p>&#42;marks mandatory fields</p>
                {errorMessage && (
                    <div>
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
            <input name='submit' type='submit' value='Sign Up'></input>
        </form>
    )
}

export default RegistrationForm;