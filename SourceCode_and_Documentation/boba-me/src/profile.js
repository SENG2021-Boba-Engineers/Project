import React, { Component } from 'react';
import bg_img from './resources/background.jpg'
import {motion} from 'framer-motion'
import axios from 'axios';
import {Link} from 'react-router-dom'

class Profile extends Component {
    _isMounted_menu = true;
    _isMounted_topping = true;
    _isMounted_opening = true;
    state={
        drinks: [],
        price: [],
        topping: [],
        top_price: [],
        opening: [],
        closing: [],
        days:[]
    }

    Search(shop){
        axios.get(`http://127.0.0.1:5000/api/get_shop_menu`, { params: { shop_id: shop } }).then(
            res => {
                if(this._isMounted_menu){
                    this.setState({
                        drinks: res.data.drinks,
                        price: res.data.prices
                    })
                }
                this._isMounted_menu = false;

            }
        )
        
        axios.get(`http://127.0.0.1:5000/api/get_toppings`, { params: { shop_id: shop } }).then(
            res => {
                if(this._isMounted_topping){
                    this.setState({
                        topping: res.data.topping,
                        top_price:  res.data.price,
                    })
                }
                this._isMounted_topping = false;

            }
        )

        axios.get(`http://127.0.0.1:5000/api/get_shop_times`, { params: { shop_id: shop } }).then(
            res => {
                if(this._isMounted_opening){
                    this.setState({
                        opening: res.data.shop_open,
                        closing: res.data.shop_close,
                        days: res.data.days_of_week
                    })
                }
                this._isMounted_opening= false;

            }
        )

    }

    build_menu(){
        let items = [];
        this.state.drinks.map((val, index) => {
            items.push(
                <p>{val} - ${this.state.price[index]}</p>
            )
        })
        return items
    }

    build_topping(){
        let items = [];
        this.state.topping.map((val, index) => {
            items.push(
                <p>{val} - ${this.state.top_price[index]}</p>
            )
        })
        return items
    }

    build_time(){
        let items = [];
        this.state.days.map((val, index) => {
            let title = ""
            switch(val){
                case 0:
                    title = "Sunday";
                    break;
                case 1:
                    title = "Monday";
                    break;
                case 2:
                    title = "Tuesday";
                    break;
                case 3:
                    title = "Wednesday";
                    break;
                case 4:
                    title = "Thursday";
                    break;
                case 5:
                    title = "Friday";
                    break;
                case 6:
                    title = "Saturday";
                    break;
            }
            items.push(
                <p>{title}   : {this.state.opening[index]} - {this.state.closing[index]}</p>
            )
        })
        return items 
    }

    render() {
        this.Search(this.props.match.params.shop)
        
        return (
            <div className='profile-container' >
                <motion.div
                    initial={{ opacity:1, x: -250}}
                    animate={{ opacity:1, x: 0}}
                    transition= {{ duration: 1.5 }}
                ><h1>{this.props.match.params.name}</h1></motion.div>

                <div className='profile-body'>
                    <div className='left-profile'>

                        <div className="menu">
                            <h2> Menu</h2>
                            <div className='infodisplay'>
                                {this.build_menu()}
                            </div>
                        </div>

                        <div className="topping">
                            <h2> Topping</h2>
                            <div className='infodisplay'>
                                {this.build_topping()}
                            </div>
                        </div>
                    </div>


                    <div className='right-profile'>

                        <div className="opening">
                            <h2> Opening hours</h2>
                            <div className='infodisplay'>
                                {this.build_time()}
                            </div>    
                        </div>

                        <div classname="map">
                            <h2> Directions</h2>

                            <div>
                            <iframe
                                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAupWuHcLkDh1VdlAwfNNttBOmOrJlyDXo&q=Gong+Cha,Randwick+Sydney+Australia"
                                width="550"
                                height="412.5"
                                frameBorder="0"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                aria-hidden="false"
                                tabIndex="0"
                                />
                            </div>


                        </div>

                    </div>
                </div>


            </div>
        );
    }
}
  
export default Profile;