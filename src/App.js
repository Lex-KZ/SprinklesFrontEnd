import React from 'react'
import './App.css';
import { getCakes } from './components/cakes.js'
import Navbar from './components/Navbar';



class App extends React.Component {
  state = { 
    cakes: null,
    admin: false
  }

  componentDidMount() {
    getCakes()
      .then(cakes => {
        console.dir(cakes);
        return cakes;
      })
      .then(cakes => {
        this.setState({cakes: cakes});
      })
  }

  render(){
    return (
      <div className="App">
        <Navbar />
        
          {
            this.state.cakes ?
              (
                <div>
                {
                  this.state.cakes.map(cake => (
                    <div key={cake.id}>
                      <img src={cake.image} alt="cake" width="200"></img>
                      <p>{cake.name}</p>
                      <p>{cake.price}</p>
                    </div>
                  ))
                } 
                </div>
              ) : (
                <div>Oops, nothing here!</div>
              )
              
          }
          
       
      </div>
    )
  }
}

export default App;
