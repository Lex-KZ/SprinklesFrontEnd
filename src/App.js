import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import { getCakes } from './components/cakes.js'
import Navbar from './components/Navbar';



class App extends React.Component {
  state = { 
    cakes: null,
    token: null,
    // admin: false
  }

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit(event){
    event.preventDefault();
    console.log(event.target);
    this.setState({ token: '123'})
  }

  render(){
    return (
      <div className="App">
        <main>
          <Navbar />
          {
            !this.state.token &&
              <form onSubmit={this.handleSubmit}>
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
          }
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
          
        </main>
      </div>
    )
  }
}

export default App;
