import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Home from './Home';
import Reward from './Reward';
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route path="/reward" component={Reward} />
                </Switch>
            </Router>
        )
    }
}