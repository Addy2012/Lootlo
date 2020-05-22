import React, { Component } from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage';
import { connect } from 'react-redux';
import { Route , Switch , Redirect} from 'react-router-dom';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import { auth , createUserProfileDocument } from './firebase/firebase.util';
import { setCurrentUser } from './redux/user/user.actions';

class App extends Component {
  // unSubscribeFromAuth=null

  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unSubscribeFromAuth=auth.onAuthStateChanged(async userAuth =>{ 
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id : snapShot.id,
              ...snapShot.data()
          })
        });
      }

      setCurrentUser(userAuth);    
    });
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }



  render(){
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component= {Homepage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/signinsignup' render={()=> this.props.currentUser ? <Redirect to='/'/> : (<SignInAndSignUpPage/>) }  />
      </Switch>
    </div>
  )}
}

const mapStateToProps= ({ user }) => ({
  currentUser : user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(App);
