import React, { Component } from 'react';
import { MenuItems } from "./MenuItems";
import { Button } from "../Button";
import icon from './Boba_Me_Icon.png';
import './Navbar.css';

// Remember to change to Boba Me"

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <nav className="NavbarItems">
                <a className="logo-redirect" href="home">
                <h1 className="navbar-logo">
                    Boba Me<img src={icon}/>
                </h1>
                </a>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <a href="reward">
                  <Button>My Rewards</Button>
                </a>
            </nav>
        )
    }
}

export default Navbar