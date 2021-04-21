import {React, Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import GoogleLogin from 'react-google-login';
import './Navbar.css'

class MainNav extends Component {
    constructor(props){
        super(props)
          
        // Set initial state
        this.state = {msg : <GoogleLogin
            clientId="779473173245-07oiunmq33n9f0mresc06u4h42543183.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={ (res) => console.log(res.profileObj)}
            onFailure={ (res) => console.log(res.profileObj)}
            cookiePolicy={"single_host_origin"}
        />}
          
        // Binding this keyword
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState({msg : <a className="nav-link" href="/reward">Rewards<span className="sr-only">(current)</span></a>})
    }
    
    render() {
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
                <li className="nav-item" onClick={this.handleClick}>
                    {this.state.msg}
                </li>
                </ul>
            </div>
            </nav>
        )
    }
}

export default MainNav;