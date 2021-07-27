import React from "react";
import { Link } from 'react-router-dom';
import { getUserId } from "./authentication";

function Navbar({signedIn}){
    return(
        <nav className="bg-purple-400">
        {
          signedIn ? (
            <ul className="flex justify-between">
              <li className="mr-3"><Link to='/cakes' className="inline-block border border-purple-400 rounded py-2 px-4 bg-purple-400 hover:bg-purple-700 text-white">Our cakes</Link></li>
              <li className="mr-3"><Link to='/about' className="inline-block border border-purple-400 rounded py-2 px-4 bg-purple-400 hover:bg-purple-700 text-white">About Us</Link></li>
              <li className="mr-3"><Link to='/enquiry' className="inline-block border border-purple-400 rounded py-2 px-4 bg-purple-400 hover:bg-purple-700 text-white">Enquiries</Link></li>
              <li className="mr-3"><Link to='/userprofile' className="inline-block border border-purple-400 rounded py-2 px-4 bg-purple-400 hover:bg-purple-700 text-white">Profile</Link></li>
              <li className="mr-3"><Link to='/log_out' className="inline-block border border-purple-400 rounded py-2 px-4 bg-purple-400 hover:bg-purple-700 text-white">Sign Out</Link></li>
            </ul>
          ) : (
            <ul className="flex justify-between">
              <li className="mr-3"><Link to='/cakes' className="inline-block border border-purple-400 rounded py-2 px-4 bg-purple-400 hover:bg-purple-700 text-white">Our cakes</Link></li>
              <li className="mr-3"><Link to='/about' className="inline-block border border-purple-400 rounded py-2 px-4 bg-purple-400 hover:bg-purple-700 text-white">About Us</Link></li>
              <li className="mr-3"><Link to='/enquiry' className="inline-block border border-purple-400 rounded py-2 px-4 bg-purple-400 hover:bg-purple-700 text-white">Enquiries</Link></li>
              <li className="mr-3"><Link to='/sign_in' className="inline-block border border-purple-400 rounded py-2 px-4 bg-purple-400 hover:bg-purple-700 text-white">Sign In</Link></li>
            </ul>
          )
        }
      </nav>
    )
}

export default Navbar;