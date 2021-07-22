import React from "react";

function Navbar(){
    return(
        <nav>
        <ul>
          <li>Our cakes</li>
          <li>About Us</li>
          <li>Enquiries</li>
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