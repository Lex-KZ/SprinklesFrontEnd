import React from "react";
import { Link } from 'react-router-dom';

function Navbar({signedIn}){
    return(
        <nav>
        {
          signedIn ? (
            <ul>
              <li><Link to='/cakes'>Our cakes</Link></li>
              <li><Link to='/about'>About Us</Link></li>
              <li><Link to='/enquiry'>Enquiries</Link></li>
              <li><Link to='/userprofile'>Profile</Link></li>
              <li>Sign Out</li>
            </ul>
          ) : (
            <ul>
              <li><Link to='/cakes'>Our cakes</Link></li>
              <li><Link to='/about'>About Us</Link></li>
              <li><Link to='/enquiry'>Enquiries</Link></li>
              <li><Link to='/sign_in'>Sign In</Link></li>
            </ul>
          )
        }
      </nav>
    )
}

export default Navbar;