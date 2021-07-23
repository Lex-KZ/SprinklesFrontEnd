import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import './App.css';
import { getCakes } from './components/cakes.js'
import Navbar from './components/Navbar';
import Cake from './components/Cake'



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
    const signedIn = !!this.state.token;

    return (
      <div className="App">
      <Router>
        <Navbar />
        <main>
          <Switch>
          <Route path='/signin' render={() => (
            signedIn ? (
              <Redirect to='/' />
            ) : (
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
            )
          )} />
          {
            this.state.cakes && (
              <Route path='/cakes/:id' render={(props) => {
                  const id = props.match.params.id;
                  return (<Cake cake={this.state.cakes.find(p => (p.id == id))} />)
                } 
              } />
            )
          }
          
           
          <Route path='/cakes'>
            {
              this.state.cakes ?
                (
                  <div>
                  {
                    this.state.cakes.map(cake => (
                      <div key={cake.id}>
                      <Link to={`/cakes/${cake.id}`}><img src={cake.image} alt="cake" width="200"></img></Link>
                        <p><Link to={`/cakes/${cake.id}`}>{cake.name}</Link></p>
                        <p>${cake.price}</p>
                      </div>
                    ))
                  } 
                  </div>
                ) : (
                  <div>Loading...</div>
                )
              }
          </Route>
         
          </Switch> 
        </main>
        </Router>
      </div>
    )
  }
}

export default App;
