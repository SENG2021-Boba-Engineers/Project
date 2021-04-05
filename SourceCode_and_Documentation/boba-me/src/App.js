import React from 'react';
import Navbar from "./components/Navbar/Navbar"
import './App.css'
import history from './history'

function App() {

  // Complicated features for later
  /*
  const fetchData = () => {
    // dummy function that does nothing but is required for infite scroll
  };

  //sample function
  const reward = () => {
    console.log("does something")
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
  */

  return (
    <div className="App">
      <Navbar />
    </div>
  );

}

export default App;
