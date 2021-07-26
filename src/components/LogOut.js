import React from 'react';
import { signOut } from './authentication';
import { Redirect } from 'react-router-dom';

function LogOut({setTokenState}){
   signOut()
   setTokenState(null);
   return <Redirect to='/cakes' />
}

export default LogOut;