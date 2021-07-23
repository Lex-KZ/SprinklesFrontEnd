import React from 'react';

function RegistrationForm(){
    return(
        <form>
            <h2>Sign Up</h2>
            <p>&#42;marks mandatory fields</p>
            <fieldset>
                <label>Email&#42;</label>
                <input name='email' type='email'></input>
            </fieldset>
            <fieldset>
                <label>Username&#42;</label>
                <input name='username' type='text'></input>
            </fieldset>
            <fieldset>
                <label>First Name&#42;</label>
                <input name='first-name' type='text'></input>
            </fieldset>
            <fieldset>
                <label>Last Name&#42;</label>
                <input name='last-name' type='text'></input>
            </fieldset>
            <fieldset>
                <label>Middle Name</label>
                <input name='middle-name' type='text'></input>
            </fieldset>
            <fieldset>
                <label>Password&#42;</label>
                <input name='password' type='password'></input>
            </fieldset>
            <fieldset>
                <label>Confirm Password&#42;</label>
                <input name='confirm-password' type='password'></input>
            </fieldset>
            <input name='submit' type='submit' value='Sign Up'></input>
        </form>
    )
}

export default RegistrationForm;