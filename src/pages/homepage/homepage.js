import React from 'react';
import './homepage.css';
import Directory from '../../components/directory/directory';


const HomePage = () => (
  <div className='homepage'>
    <h1>Welcome to my Homepage</h1>
    <Directory />    
  </div>
);

export default HomePage;