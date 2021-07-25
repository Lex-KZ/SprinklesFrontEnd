import React from 'react';
import {Link, Route} from 'react-router-dom';

function SignInForm({handleSubmit}){
    return(
        <form onSubmit={handleSubmit}>
            <fieldset>
                <label>Email</label>
                <input name="email" type="text"></input>
            </fieldset>
            <fieldset>
                <label>Password</label>
                <input name="password" type="password"></input>
            </fieldset>
            <input type="submit" value="Sign In"></input>
            <Link to='/sign_up' ><button>Register</button></Link>
        </form>
    )
}

export default SignInForm;