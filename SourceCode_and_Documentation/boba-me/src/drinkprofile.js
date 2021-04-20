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
    _isMounted_drk = true;
    _isMounted_shop = true;
    _isMounted_ingred = true;
    state={
        name : "",
        rating : "",
        img : "",
        shops : [],
        shop_price: [],
        shop_imgs: [],
        ingred: []
    }

    Search(drink){
        axios.get(`http://127.0.0.1:5000/api/get_ingredients`, { params: { drink_id: drink } }).then(
            res =>{
                if(this._isMounted_ingred){
                    this.setState({
                        ingred: res.data.ingredients
                    })
                }
                this._isMounted_ingred = false;
            }
        )

        axios.get(`http://127.0.0.1:5000/api/drink_sold_where` , { params: { drink_id: drink} }).then(res => {
            
            if(this._isMounted_shop){         
                this.setState({
                    shop_imgs: res.data.pictures,
                    shops: res.data.shop_name,
                    shop_price: res.data.prices
                })
            }
            this._isMounted_shop = false;
        })


        axios.get(`http://127.0.0.1:5000/api/get_drink_info` , { params: { drink_id: drink }}).then(res => {

            if(this._isMounted_drk){
                this.setState({
                    name: res.data.name,
                    rating: res.data.rating,
                    img: res.data.pictures
                })
            }
            this._isMounted_drk = false;
        })

    }

    build_ingred(){
        let items = []
        this.state.ingred.map(val => {
            items.push(
                <p>{val}</p>
            )
        })
        return items;
    }

    build_offtering(){
        
        let items =[]
        this.state.shops.map((val,index) => {
            items.push(
                <Link style={{ textDecoration: 'none' }} to={"/profile/"+this.state.val}>
                    <Profile drink={'$'+this.state.shop_price[index]+" at "+val} img={require('./' + this.state.shop_imgs[index])} />
                </Link>
            )
        })
        return items;
    }

    rate(rating,id){
        axios.post(`http://127.0.0.1:5000/api/update_ratings`, {rating : rating, drink_id:id  }).then(
            res=> {
                console.log(res.data)
        })
    }

    


    render() {
        this.Search(this.props.match.params.drink)
        //this.rate(1,4)
        return (
            <div className='profile-container' >
                <motion.div
                    initial={{ opacity:1, x: -200}}
                    animate={{ opacity:1, x: 0}}
                    transition= {{ duration: 1.5 }}
                ><h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {this.state.name} </h1></motion.div>

                <div className='profile-body'>

                    <div className='drinkleft-profile' >
                        <div className='drink-ingredients'>
                            <div className='drink-pic'>
                                <img style={{width: "500px", height: "550px"}} src={require('./'+this.state.img).default}
                                    width='100%'
                                    height='100%'></img>
                            </div>
                            <div className="ingredients">
                                <div className='infodisplay'>
                                    <h2>Contains:</h2>
                                    {this.build_ingred()}
                                    <h2>Allergy Warning:</h2>
                                    <p>This is the basic description of the ingredients of each drink.</p>
                                    <p>Please consult each store about other ingredients present.</p> 
                                </div>
                            </div>
                        </div>
                        <div className='rating'>
                            <div className='rating-colour'>
                                <StarRating initial={this.state.rating}/>
                            </div>
                        </div>
                    </div>

                    <div className='right-profile' >
                        
                        <h2>This drink is sold at</h2>
                        <div className='infodisplay' style={{height: '650px'}}>
                            <div className='shop-grid'>
                                {this.build_offtering()}
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        );
    }
}

export default DrinkProfile;