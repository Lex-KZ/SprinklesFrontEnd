import React,{useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { signIn, setUser } from './authentication';


function SignInForm({setTokenState}) { 
    const history = useHistory();
    const [errorMessage, setErrorMessage] = useState('');
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
        .then(({jwt, user_id}) => {
			    console.log(user_id, jwt);
            setTokenState(jwt)
            setUser(user_id)
            history.push("/cakes");
		})
		.catch((error) => {
            if (error.response){
                console.log(error.response.data.error)
                setErrorMessage(error.response.data.error)
            } else if (error.request) {
                console.log(error.request)
            } else {
                console.log(error)    
            }
	    })
	}

    return(
        <div className=" flex justify-center w-full pt-4">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <fieldset className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                    <input name="email" type="email" value={formState.email} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
                </fieldset>
                <fieldset className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                    <input name="password" type="password" value={formState.password} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
                    {errorMessage && (  <p className="error"> {errorMessage} </p>)}
                </fieldset>
                <div className="flex items-center justify-between">
                    <input type="submit" value="Sign In" className="bg-purple-400 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"></input>
                    <Link to='/sign_up' ><button className="inline-block align-baseline font-bold text-sm text-purple-400 hover:text-purple-600">Register</button></Link>
                </div>
            </form>
            </div>
    )
}
export default SignInForm;