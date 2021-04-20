import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

// Remember to change to Boba Me"

class MainBar extends Component {
    render() {
        return (
            <Navbar expand="lg" variant="light" bg="light">
                <Navbar.Brand href="#">Navbar</Navbar.Brand>
            </Navbar>
        )
    }
}

export default MainBar