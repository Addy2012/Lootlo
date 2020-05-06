import React, { Component } from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage';
import { Route , Switch } from 'react-router-dom';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import { auth } from './firebase/firebase.util';

class App extends Component {
  constructor(){
    super();
    this.state={
      currentUser:null
    }
  }
  unSubscribeFromAuth=null

  componentDidMount(){
    this.unSubscribeFromAuth=auth.onAuthStateChanged(user =>{ 
      this.setState({
        currentUser:user
      })
      console.log(user);
      })
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }



  render(){
  return (
    <div>
      <Header currentUser={this.state.currentUser} />
      <Switch>
        <Route exact path='/' component= {Homepage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/signinsignup' component={SignInAndSignUpPage}/>
      </Switch>
    </div>
  )}
}

export default App;
