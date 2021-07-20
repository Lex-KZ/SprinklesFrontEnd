import React from 'react'
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>Our cakes</li>
          <li>About Us</li>
          <li>Enquiries</li>
          {/* {
            if (loggedIn){
              return(
                <li>Profile</li>
                <li>Log Out</li>
              );
            } else {
              <li>Log In</li>
            }
          } */}
        </ul>
      </nav>
      <div id="landing-page">
        <img alt="Sprinkles of Joy cupcake logo" ></img>
        <h1>Sprinkles of Joy</h1>
        <button>View Our Creations</button>
      </div>
    </div>
  );
}

export default App;
