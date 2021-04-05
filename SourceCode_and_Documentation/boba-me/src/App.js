<<<<<<< HEAD
import React from 'react';
import Navbar from "./components/Navbar/Navbar"
import './App.css'

function App() {

  // Complicated features for later
  /*
  const fetchData = () => {
    // dummy function that does nothing but is required for infite scroll
  };

=======
import logo from './resources/logo.png'
import Header from './components/Header'
import Button from './components/Button'
import Profile from './components/Profile'
import history from './history'


function App() {
>>>>>>> Jing
  //sample function
  const reward = () => {
    history.push('/reward')
  }

  //to-do
  const search =() => {
    // fetch from our own api
  }

  //to-do
  const randomise = () => {
    // fetch drink list and choose randomly
  }

  //to-do
  const login = () => {
    // grab credentials and check with google api
    // change state 
  }

  //to-do
  const logout =() => {
    // change state
  }
<<<<<<< HEAD
  */

 return (
    // Constant Across Whole App
    <Navbar />
  );

=======
  return (
    <div className="App">
      {/*
      Main divs:
        top_banner  => the top menu banner including login, log & rewards
        body        => the bulk of the information will display here
        landing     => the landing screen when someone visit include left & right
        left        => the left hand side of the landing, including : search bar/ filer/ search button / business slogan
        right       => the right hand side of the landing, including : randomiser
        bottom      => the bottom half of the homepage, including drinks and shops 
        drinks      => contains drinks profiles
        shops       => contains shops profiles
      Other inner divs ... 
      */}

      <div className="top_banner">
        <div className="left_banner">
          <img 
            src={logo}
            width='60'
            height='60'></img>
            <h2>Boba Me!</h2>      
	      </div>
        <div className="right_banner">
          <button onClick={() => history.push('/reward')}>Click</button>
          <Button text='My Rewards!' colour='goldenrod'/>
          <Button text='Log in' colour='AntiqueWhite' event={reward}/> 
        </div>

      </div>

    
    </div>
       
  )
>>>>>>> Jing
}

export default App;
