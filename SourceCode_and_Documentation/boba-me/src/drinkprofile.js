import React, { Component } from 'react';
import Button from './components/Button_Jing';
import bg_img from './resources/background.jpg'
import Profile from './components/Profile'
import InfiniteScroll from 'react-infinite-scroll-component';
import {motion} from 'framer-motion'
import StarRating from './components/StarRating'
import axios from 'axios';
import {Link} from 'react-router-dom'

class DrinkProfile extends Component {
    _isMounted = true;
    state={
        name : "",
        rating : "",
        img : "",
        shops : []
    }

    Search(drink){

        console.log(drink)
        axios.get(`http://127.0.0.1:50000/get_drink_info` , {params: {drink_id : drink}}).then(res => {
            console.log(res.data)
            if(this._isMounted){
                this.setState({
                    name: res.data.name,
                    rating: res.data.rating,
                    img: res.data.drink_img
                })
            }
            this._isMounted = false;
        })
    }


    render() {
        this.Search(this.props.match.params.drink)
        console.log(this.state)
        return (
            <div className='profile-container' style={{ backgroundImage: `url(${bg_img})` }}>
                <motion.div
                    initial={{ opacity:1, x: -200}}
                    animate={{ opacity:1, x: 0}}
                    transition= {{ duration: 1 }}
                ><h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Pearl Milk Tea</h1></motion.div>
                <div className='drinkleft-profile'>
                    <div className='drink-ingredients'>
                        <div className='drink-pic'>
                            <img src={require('./resources/pearl-milk-tea.png').default}
                                width='100%'
                                height='100%'></img>
                        </div>
                        <div className="ingredients">
                            <div className='infodisplay'>
                                <h2>Contains:</h2>
                                <p>Milk</p>
                                <p>Caffeine</p>
                                <p>Egg-free</p>
                                <p>Gluten-free</p>
                                <p>Gelatin-free</p>
                                <h2>Allergy Warning:</h2>
                                <p>This is the basic description of the ingredients of each drink.</p>
                                <p>Please consult each store about other ingredients present.</p>
                            </div>
                        </div>
                    </div>
                    <div className='rating'>
                        <div className='rating-colour'>
                            <StarRating  />
                        </div>
                    </div>
                </div>

                <div className='right-profile'>
                    <h1>&nbsp;</h1>
                    <h2>This drink is sold at</h2>
                    <div className='infodisplay'>
                        <div className='shop-grid'>
                            <Profile drink='$5.00' img={require('./resources/Coco.jpg')} />  
                            <Profile drink='$6.00' img={require('./resources/c1.jpg')} />  
                            <Profile drink='$6.00' img={require('./resources/c3.png')} />  
                            <Profile drink='$6.20' img={require('./resources/c4.webp')} />
                            <Profile drink='$6.50' img={require('./resources/Coco.jpg')} />
                            <Profile drink='$7.00' img={require('./resources/Coco.jpg')} />
                        </div>
                    </div>
                </div> 
            </div>
        );
    }
}

export default DrinkProfile;