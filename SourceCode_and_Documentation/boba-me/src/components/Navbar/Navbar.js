import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import GoogleLogin from 'react-google-login';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">
                <img src="Boba_Me_Icon.png" width="30" height="30" alt=""/>
                Boba Me</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <GoogleLogin
                    clientId="779473173245-07oiunmq33n9f0mresc06u4h42543183.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={ (res) => console.log(res.profileObj)}
                    onFailure={ (res) => console.log(res.profileObj)}
                    cookiePolicy={"single_host_origin"}
                />
            </li>
            </ul>
        </div>
        </nav>
    )
}

export default Navbar;