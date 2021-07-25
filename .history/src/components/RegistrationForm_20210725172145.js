import React, { useState } from 'react';
import { useGlobalState } from './stateContext'
import { useHistory } from 'react-router-dom'
import { signUp } from './authentication'

function RegistrationForm(){
    const initialFormState = {
		username: '', 
		email: '',
        firstName: '',
        lastName: '',
        middleName: '', 
		password: '', 
		password_confirmation: ''
	}

    const [formState, setFormState] = useState(initialFormState);
    // const {dispatch} = useGlobalState();
    let history = useHistory();

    function handleChange(event) {
		setFormState({
			...formState,
			[event.target.name]: event.target.value
		})
	}

    function handleRegister(event) {
		event.preventDefault()
		signUp(formState)
		.then((user) => {
			dispatch({type: 'setLoggedInUser', data: user.username})
			history.push('/cakes')
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
                <input name='firstName' type='text' value={formState.firstName} onChange={handleChange}></input>
            </fieldset>
            <fieldset>
                <label>Last Name&#42;</label>
                <input name='lastName' type='text' value={formState.lastName} onChange={handleChange}></input>
            </fieldset>
            <fieldset>
                <label>Middle Name</label>
                <input name='middleName' type='text' value={formState.middleName} onChange={handleChange}></input>
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