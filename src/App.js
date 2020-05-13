import React, { Component } from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage';
import { Route , Switch } from 'react-router-dom';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import { auth , createUserProfileDocument } from './firebase/firebase.util';

class App extends Component {
  constructor(){
    super();
    this.state={
      currentUser:null
    }
  }
  unSubscribeFromAuth=null

  componentDidMount(){
    this.unSubscribeFromAuth=auth.onAuthStateChanged(async userAuth =>{ 
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser:{
              id : snapShot.id,
              ...snapShot.data()
            }
          })
        });
      }



      this.setState({ currentUser:userAuth });    
    });
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
