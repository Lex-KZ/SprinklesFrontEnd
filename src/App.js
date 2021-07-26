import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { getCakes } from './components/cakes.js';
import { getUser } from './components/user';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Cake from './components/Cake';
import { signIn, getToken } from './components/authentication';
import SignInForm from './components/SignInForm';
import EnquiryForm from './components/EnquiryForm';
import CakeList from './components/CakeList';
import RegistrationForm from './components/RegistrationForm';
import About from './components/About';
import Profile from './components/Profile';
import LandingPage from './components/LandingPage';


class App extends React.Component {
  state = { 
    cakes: null,
    token: getToken(),
    admin: false,
    user: null
  }

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    getCakes()
      .then(cakes => {
        return cakes;
      })
      .then(cakes => {
        this.setState({cakes: cakes});
      })

    // getUser()
    //   .then(user => {
    //     return user;
    //   })
    //   .then(user => {
    //     this.setState({user: user});
    //   })
  }

  handleSubmit(event){
    event.preventDefault();
    signIn().then(token => this.setState({ token}))
  }

  handleEnquiry(event){
    event.preventDefault();
  }

  render(){
    const signedIn = !!this.state.token;

    function requireAuthentication(render) {
      return function(props) {
        if (signedIn) {
          return render(props)
        } else {
          return <Redirect to='/sign_in' />
        }
      }
    }

    return (
      <div className="App">
      <Router>
        <Header />
        <Navbar signedIn={signedIn} />
        <main>
          <Switch>
          <Route path='/sign_in' render={() => (
            signedIn ? (
              <Redirect to='/cakes' />
            ) : (
              <SignInForm handleSubmit={this.handleSubmit} />
            )
          )} />

          <Route path='/sign_up'>
            <RegistrationForm />
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
                  return (<Cake cake={this.state.cakes.find(p => (p.id == id))} />)
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
