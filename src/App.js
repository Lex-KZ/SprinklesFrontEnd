import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { getCakes } from './components/cakes.js';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Cake from './components/Cake';
import { signIn, getToken } from './components/authentication';
import SignInForm from './components/SignInForm';
import CakeList from './components/CakeList';



class App extends React.Component {
  state = { 
    cakes: null,
    token: getToken()
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
    signIn().then(token => this.setState({ token}))
  }

  render(){
    const signedIn = !!this.state.token;

    return (
      <div className="App">
      <Router>
        <Header />
        <Navbar />
        <main>
          <Switch>
          <Route path='/signin' render={() => (
            signedIn ? (
              <Redirect to='/cakes' />
            ) : (
              <SignInForm handleSubmit={this.handleSubmit} />
            )
          )} />
          <Route path='/enquiry' render={() => (
            this.state.token ? (
              <form>
                <fieldset>
                  <label>Name</label>
                  <input name="name" type="text"></input>
                </fieldset>
                <fieldset>
                  <label>Contact Number</label>
                  <input name="contact-number" type="text"></input>
                </fieldset>
                <fieldset>
                  <label>Topic</label>
                  <input list="topics" name="topic"></input>
                  <datalist id="topics">
                    <option value="Booking" />
                    <option value="Question" />
                    <option value="Complaint" />
                    <option value="Other" />
                  </datalist>
                </fieldset>
                <fieldset>
                  <label>Message</label>
                  <textarea name="message" rows="10" cols="50"></textarea>
                </fieldset>
                <input type="submit" value="Submit"></input>
              </form>
            ) : (
              <Redirect to='/signin' />
            )
          )} />
          {
            this.state.cakes && (
              <Route path='/cakes/:id' render={({match}) => {
                  const id = match.params.id;
                  return (<Cake cake={this.state.cakes.find(p => (p.id == id))} />)
                } 
              } />
            )
          }
          
           
          <Route path='/cakes'>
            {
              this.state.cakes ?
                (
                  <CakeList cakes={this.state.cakes}/>
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
