import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from './home';
import Reward from './reward';
import Result from './result';
import Profile from './profile'
import DrinkProfile from './drinkprofile'
import ShopProfile from './profile'
import ShopResult from './shopresult'
import reportWebVitals from './reportWebVitals';

/*
Use index as router
*/

ReactDOM.render( 
  <Router>
    <App />
    <Switch>
        <Route path="/home" component={Home}/>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/reward" component={Reward} />
        <Route path="/result/:option/:item" component={Result} />
        <Route path="/profile/:shop" component={Profile} />
        <Route path="/drinkprofile/:drink" component={DrinkProfile} />
        <Route path="/shopprofile" component={ShopProfile} />
        <Route path="/shopsearch" component={ShopResult} />
    </Switch>
  </Router>, document.getElementById('root')
);

/*
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/
