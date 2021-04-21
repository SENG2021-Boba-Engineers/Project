import React, { Component } from 'react';
import Button from './components/Button_Jing'
import Result_profile from './components/Result_profile'
import bg_img from './resources/background.jpg'
import {motion} from 'framer-motion'
import axios from 'axios';
import {Link} from 'react-router-dom'



class Result extends Component {
    _isMounted = true;
    state={
        search_option: "",
        search_item: "",
        drink_ids: [],
        drink_names: [],
        drink_ratings: [],
        drink_imgs: [],
        shop_ids: [],
        shop_names: [],
        shop_imgs: []
    }


    Search(option, item) {
        this._isMounted = true;
        if(option == "drink"){
            axios.get(`http://127.0.0.1:5000/api/search_drinks`, { params: { search_term: item } }).then(
                res=> { 
                    console.log(res.data)
                    if (this._isMounted) {
                        this.setState({
                            drink_ids: res.data.drink_ids,
                            drink_names: res.data.drink_names,
                            drink_ratings: res.data.drink_ratings,
                            drink_imgs: res.data.drink_pictures,
                            search_item: item,
                            search_option: "drink"
                        }) 
                        this._isMounted = false; 


                    }

                }
            )
        }else{
            axios.get(`http://127.0.0.1:5000/api/search_shops`, { params: { search_term: item } }).then(
                res=> { 
                    if (this._isMounted) {
                        this.setState({
                            shop_ids: res.data.shop_ids,
                            shop_names: res.data.shop_names,
                            shop_imgs: res.data.shop_pics,
                            search_item: item,
                            search_option: "shop"
                        }) 
                        
                        this._isMounted = false;
                    }

                }
            )     
        }
        
      }

      Unmount(){
        this.setState((state,callback) => {
            this._isMounted = false;
            return;
        })
      }

      Add_result(){
        let items = []
        if(this.state.search_option == "drink"){
            this.state.drink_ids.map((id,index) => {
                items.push(
                    <div>
                        <Link style={{ textDecoration: 'none' }} to={"/drinkprofile/"+this.state.drink_ids[index]} >
                        <Result_profile drink={this.state.drink_names[index]} img={require('./'+this.state.drink_imgs[index]).default} price='Depend on shops' rating={this.state.drink_ratings[index]}/>
                        </Link>
                    </div>
                    
                    )
            })
        }else{
            this.state.shop_ids.map((id,index) => {
                items.push(
                    <div>
                        <Link style={{ textDecoration: 'none' }} to={"/profile/"+this.state.shop_ids[index]} >   
                        <Result_profile drink={this.state.shop_names[index]} img={require('./'+this.state.shop_imgs[index]).default} price="0" />
                        </Link>
                    </div>
                )
            })            
        }

        if(items.length == 0){
            return <div>
                <br></br>
                <p>Ops, there is no matching result!</p>
                <p>Here are some suggested searches:</p>
                <p>Drinks</p>
                <p> - Milk Tea</p>
                <p> - Foam Green Tea</p>
                <p>SHops</p>
                <p> - Chatime</p>
                <p> - Gong Cha</p>
            </div>
        }
        return items;
      }



    render() {
        this.Search(this.props.match.params.option,this.props.match.params.item)
       

        return (
            
            <div className='result' style={{ backgroundImage: `url(${bg_img})` }} >

                <motion.div className='result-banner'
                    initial={{ opacity:1, x: -200}}
                    animate={{ opacity:1, x: 0}}
                    transition= {{ duration: 1 }}  
                >
                    <h2>&nbsp; Results &nbsp;</h2>
                    <div>
                        <input type="search" onChange={event => (this.setState({search_for: event.target.value}))} name="q" aria-label="Search through site content"></input>
                        <Link id="result-search-link" to={"/result/"+this.state.search_option + "/" + this.state.search_for}>
                        <Button text='Search' colour='deepskyblue'/>
                        </Link>
                    </div>
                    
                </motion.div>


                <div className='result-body'>
                    <div className='filter'>
                        <div className='filter-box'>
                            <h1> Sort By</h1>
                                <input type="radio" value="Rating" name="drink-filter" /> Rating
                                <br></br>
                                <input type="radio" value="Most reviewed" name="drink-filter" /> Most reviewed
                                <br></br>
                                <input type="radio" value="Trending" name="drink-filter" /> Trending
                                <br></br>
                        </div>
                    </div>

                    <div className='result-list'>
                        <div className='result-grid'>
                            {
                               this.Add_result()
                            }
                                           
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Result;