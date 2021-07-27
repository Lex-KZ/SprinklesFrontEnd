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
import { getToken, setToken, setUser, getUserId } from './components/authentication';
import SignInForm from './components/SignInForm';
import EnquiryForm from './components/EnquiryForm';
import CakeList from './components/CakeList';
import RegistrationForm from './components/RegistrationForm';
import About from './components/About';
import Profile from './components/Profile';
import LandingPage from './components/LandingPage';
import { getUser } from './components/user';
import LogOut from './components/LogOut';



class App extends React.Component {
  state = { 
    cakes: null,
    token: getToken(),
    admin: false,
    user: null,
    user_id: null,
    error: null
  }

  setTokenState = (token) => {
    setToken(token);
    this.setState({token: token})
  }
  
  setUserState = (user_id) => {
    setUser(user_id);
    this.setState({user_id: user_id})
  }

  componentDidMount() {
    getCakes()
      .then(cakes => {
        return cakes;
      })
      .then(cakes => {
        this.setState({cakes: cakes});
      })
    
    const id = getUserId()
    getUser(id) 
      .then(user => {
        console.log(user)        
        return user;
      })
      .then(user => {
          this.setState({user: user});
    })

  }

  handleEnquiry(event){
    event.preventDefault();
  }

  render(){
    const signedIn = !!this.state.token
    function requireAuthentication(render) {
      return function(props) {
        if ( signedIn ) {
          return render(props)
        } else {
          return <Redirect to='/sign_in' />
        }
      }
    }

    return (
      <div className="App bg-cover" height="100%">
      <Router>
        <Header />
        <Navbar signedIn={signedIn} />
        <main>
          <Switch>
          <Route path='/sign_in' render={() => (
            signedIn ? (
              <Redirect to='/cakes' />
            ) : (
              <SignInForm setTokenState={this.setTokenState} />
            )
          )} />

          <Route path='/sign_up'>
            <RegistrationForm />
          </Route>

          <Route path='/log_out'>
            <LogOut setTokenState={this.setTokenState} />
          </Route>

          <Route path='/about'>
            <About />
          </Route>

          {
            <Route path='/enquiry' render={requireAuthentication(() => (
              this.state.token ? (
                <EnquiryForm handleEnquiry={this.handleEnquiry} />
              ) : (
                <Redirect to='/sign_in' />
              )
            ))} />
          }

          {
            this.state.cakes && (
              <Route path='/cakes/:id' render={({match}) => {
                  const id = match.params.id;
                  return (<Cake cake={
                    this.state.cakes.find(p => (p.id.toString() === id), )
                    } />)
                } 
              } />
            )
          }
           
          <Route path='/userprofile'>
              <Profile user={this.state.user}/>
          </Route>

          <Route path='/cakes'>
              <CakeList cakes={this.state.cakes}/>
          </Route>

          <Route path='/'>
            <LandingPage />
          </Route>

          </Switch> 
        </main>
        </Router>
      </div>
    )
  }
}

export default App;