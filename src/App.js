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
import EnquiryForm from './components/EnquiryForm';
import CakeList from './components/CakeList';
import RegistrationForm from './components/RegistrationForm';
import About from './components/About';



class App extends React.Component {
  state = { 
    cakes: null,
    token: getToken(),
    admin: false
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
          return <Redirect to='/signin' />
        }
      }
    }

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

          <Route path='/register'>
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
                <Redirect to='/signin' />
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
           
          <Route path='/cakes'>
            {
              <CakeList cakes={this.state.cakes}/>
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
