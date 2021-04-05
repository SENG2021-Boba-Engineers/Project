import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Home from './Home';
import Reward from './Reward';
import history from './history';
import Result from './Result'
import Profile from './Profile'

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route path="/result" component={Result} />
                    <Route path="/reward" component={Reward} />
                    <Route path="/profile" component={Profile} />
                </Switch>
            </Router>
        )
    }
}