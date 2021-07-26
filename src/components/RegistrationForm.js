import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { signUp, setToken } from './authentication'

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

    function handleChange(event) {
		setFormState({
			...formState,
			[event.target.name]: event.target.value
		})
	}

    function handleRegister(event) {
		event.preventDefault()
		signUp(formState)
        .then(({username,jwt}) => {
			console.log(username, jwt);
            history.push("/cakes");
            return Promise.resolve(setToken(jwt));
		})
		.catch((error) => {
            if (error.response){
                console.log(error.response.data.error)
            } else if (error.request) {
                console.log(error.request)
            } else {
                console.log(error.response.data)    
            }
	    })
	}

    return(
        <form onSubmit={handleRegister}>
            <h2>Sign Up</h2>
            <p>&#42;marks mandatory fields</p>
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
            </fieldset>
            <input name='submit' type='submit' value='Sign Up'></input>
        </form>
    )
}

export default RegistrationForm;