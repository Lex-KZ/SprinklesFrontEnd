import React from 'react';

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
            <button>Register</button>
        </form>
    )
}

export default SignInForm;