import React, { Component } from 'react';
import { MenuItems } from "./MenuItems";
import { Button } from "../Button";
import icon from './Boba_Me_Icon.png';
import './Navbar.css';
import GoogleLogin from 'react-google-login';
import {motion} from "framer-motion";

// Remember to change to Boba Me"

class Navbar extends Component {
    state = { 
        clicked: false,
        logged_in: false
    }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <motion.nav className="NavbarItems"
                initial= {{ opacity: 0}}
                animate= {{ opacity: 1}}
                transition= {{ duration: 0.65}}
            >
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
                <GoogleLogin
                    clientId="779473173245-07oiunmq33n9f0mresc06u4h42543183.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={ (res) => console.log(res.profileObj)}
                    onFailure={ (res) => console.log(res.profileObj)}
                    cookiePolicy={"single_host_origin"}
                />
                <a href="reward">
                  <Button>My Rewards</Button>
                </a>


            </motion.nav>
        )
    }
}

export default Navbar