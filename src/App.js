import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage';
import { Route , Switch } from 'react-router-dom';

const HatPage=()=>(
  <div>Hatpage is here</div>
  )

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component= {Homepage}/>
        <Route path='/hats' component={HatPage}/>
      </Switch>
    </div>
  );
}

export default App;
