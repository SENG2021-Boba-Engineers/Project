import React, { Component } from 'react';
import bg_img from './resources/background.jpg'
import { Map, GoogleApiWrapper } from 'google-maps-react';
import {motion} from 'framer-motion'

class Profile extends Component {


    render() {
        return (
            <div className='profile-container' style={{ backgroundImage: `url(${bg_img})` }}>
                <motion.div
                    initial={{ opacity:1, x: -200}}
                    animate={{ opacity:1, x: 0}}
                    transition= {{ duration: 1 }}
                ><h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shop : GongCha</h1></motion.div>

                <div className='left-profile'>

                    <div className="menu">
                        <h2> Menu</h2>
                        <div className='infodisplay'>
                            <p>Milk Foam Green Tea - $6.20</p>
                            <p>Pearl Milk Tea - $6.20</p>
                            <p>Royal Milk Tea - $5.50</p>
                            <p>Earl Grey Milk Tea - $5.80</p>
                            <p>Milk Foam Green Tea - $6.20</p>
                            <p>Pearl Milk Tea - $6.20</p>
                            <p>Royal Milk Tea - $5.50</p>
                            <p>Earl Grey Milk Tea - $5.80</p>
                            <p>Royal Milk Tea - $5.50</p>
                            <p>Earl Grey Milk Tea - $5.80</p>
                            <p>Royal Milk Tea - $5.50</p>
                        </div>
                    </div>

                    <div className="topping">
                        <h2> Topping</h2>
                        <div className='infodisplay'>
                            <p>Mango Pearls - $0.70</p>
                            <p>Pearls - $0.70</p>
                            <p>Lychee Pearls - $0.70</p>
                            <p>Aloa Vera - $0.70</p>
                            <p>White pearls - $0.70</p>
                        </div>
                    </div>
                </div>

                <div className='right-profile'>

                    <div className="opening">
                        <h2> Opening hours</h2>
                        <div className='infodisplay'>
                            <p>Monday: 9 AM - 10 PM</p>
                            <p>Tuesday: 9 AM - 10 PM</p>
                            <p>Wednesday: 9 AM - 10 PM</p>
                            <p>Thursday: 9 AM - 10 PM</p>
                            <p>Firday: 9 AM - 10 PM</p>
                            <p>Saturday: 9 AM - 10 PM</p>
                            <p>Sunday: 9 AM - 10 PM</p>
                        </div>    
                    </div>

                    <div classname="map">
                        <h2> Map</h2>

                        {/*
                        <img src={require('./resources/gmap_temp.png').default}
                            width='90%'
                            height='90%'
                        ></img>
                        */}
                        <div>
                            <Map
                            google={this.props.google}
                            zoom={8}
                            style={mapStyles}
                            initialCenter={{ lat: -33.871646364793904, lng: 151.20527111910204}}
                            
                            />
                        </div>


                    </div>

                </div>
            </div>
        );
    }
}
const mapStyles = {
    width: '60vh',
    height: '40vh',
};
  
export default GoogleApiWrapper({
    apiKey: 'AIzaSyAP1P25WHn-ujkdk910ISDMot3OV4K_GEY'
})(Profile);