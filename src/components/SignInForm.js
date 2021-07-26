import React,{useState} from 'react'
import {Link, Route, Redirect} from 'react-router-dom';
import {useGlobalState} from './stateContext'
import { signIn, setToken } from './authentication'

function SignInForm({handleSubmit}){
    const initialFormState = {
		email: '',
		password: '',
        admin: ''
    }
    const [formState, setFormState] = useState(initialFormState)
	//const {dispatch} = useGlobalState()
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
            <Redirect to="/api/cakes" />
            return Promise.resolve(setToken(jwt));
            //return Promise.resolve(setAdmin(admin));
			//dispatch({type: 'setLoggedInUser', data: username})
			//dispatch({type: 'setToken', data: jwt})
			//history.push('/')
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