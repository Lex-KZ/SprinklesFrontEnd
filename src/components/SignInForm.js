import React,{useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { signIn} from './authentication';


function SignInForm({setTokenState}) { 
    const history = useHistory();
    const initialFormState = {
		email: '',
		password: '',
        admin: ''
    }
    const [formState, setFormState] = useState(initialFormState)
	
	function handleChange(event) {
		setFormState({
			...formState,
			[event.target.name]: event.target.value
		})
	}
	function handleSubmit(event) {
		event.preventDefault()
		signIn(formState)
        .then(({username,jwt}) => {
			console.log(username, jwt);
            setTokenState(jwt)
            history.push("/cakes");
		})
		.catch((error) => {
            if (error.response){
                console.log(error.response.data.error)
            } else if (error.request) {

                console.log(error.request)
            } else {

                console.log(error)    
            }
	    })
	}
    
    return(
        <form onSubmit={handleSubmit}>
            <fieldset>
                <label>Email</label>
                <input name="email" type="email" value={formState.email} onChange={handleChange}></input>
            </fieldset>
            <fieldset>
                <label>Password</label>
                <input name="password" type="password" value={formState.password} onChange={handleChange}></input>
            </fieldset>
            <input type="submit" value="Sign In"></input>
            <Link to='/sign_up' ><button>Register</button></Link>
        </form>
    )
}
export default SignInForm;