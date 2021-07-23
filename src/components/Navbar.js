import React from "react";
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <nav>
        <ul>
          <li><Link to='/cakes'>Our cakes</Link></li>
          <li>About Us</li>
          <li><Link to='/enquiry'>Enquiries</Link></li>
          {/* {
            if (loggedIn){
                <li>Profile</li>
                <li>Sign Out</li>
            } else {
              <li>Sign In</li>
            }
          } */}
        </ul>
      </nav>
    )
}

export default Navbar;