import React from 'react'
import './App.css';

import Navbar from './components/Navbar';



class App extends React.Component {
  state = { cakes: null}

  render(){
    return (
      <div className="App">
        <Navbar />
        <div>
          {
            this.state.cakes &&
              <table>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>&nbsp;</th>
                    <th>&nbsp;</th>
                    <th>&nbsp;</th>
                  </tr>
                </tbody>
              </table>
          }
          
        </div>
      </div>
    )
  }
}

export default App;
