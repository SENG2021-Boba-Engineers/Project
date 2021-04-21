import {Component} from 'react';
import InfiniteScroll from 'react-infinite-scroll-component'
import Header from './components/Header'
import Button from './components/Button_Jing'
import Profile from './components/Profile'
import {domAnimation, motion} from 'framer-motion'
import Particles from 'react-particles-js';
import particlesConfig from './config/particle_config'
import './particles.css'
import {Modal} from './components/Modal'
import axios from 'axios';
import {Link} from 'react-router-dom'
import Result_profile from './components/Result_profile'

class Home extends Component {
  _isMouted_drink = true;
  _isMouted_shop = true;
  state = {
    rotate: 0,
    showModal: false,
    setShowModal: false,
    search_for: "",
    search_option: "shop",
    drink_ids: [],
    drink_names: [],
    drink_rating: [],
    drink_imgs: [],
    shop_ids: [],
    shop_names: [],
    shop_imgs: [],
    info: []
  };

  getRotate = () => {
    return this.state.rotate;
  }

  setRotate = () => {
    let items = [];
    this.setState({
      rotate: Math.random() * (2800-1070) + 1070
    })

    if( (!this._isMouted_drink) && (!this._isMouted_shop)) {
      var upper = this.state.drink_ids.length -1;
      var random = 0 + (Math.random() * upper);
      var rand = Math.round(random);
      items.push(this.state.drink_ids[rand]);
      items.push(this.state.drink_names[rand]);
      items.push("???");
      items.push(this.state.drink_imgs[rand]);
      this.setState({
        info: items
      });
    }

  }

  resetRotate = () =>{
    this.setState({
      rotate: 0
    })
  }

  openModal = () => {
    if(this.state.showModal === false){
      this.setState({
        showModal: true
      })
    }else{
      this.setState({
        showModal: false
      })      
    }


  }
  
  fetch_info(){
    axios.get(`http://127.0.0.1:5000/api/search_drinks`, {  params: { search_term: "" } }).then(
      res=> { 
          if (this._isMouted_drink) {
              this.setState({
                  drink_ids: res.data.drink_ids,
                  drink_names: res.data.drink_names,
                  drink_rating: res.data.dirnk_ratings,
                  drink_imgs: res.data.drink_pictures,
              }) 
              this._isMouted_drink = false; 
          }

      }
    )
    axios.get(`http://127.0.0.1:5000/api/search_shops`, {  params: { search_term: "" }}).then(
      res=> { 
          if (this._isMouted_shop) {
              this.setState({
                  shop_ids: res.data.shop_ids,
                  shop_names: res.data.shop_names,
                  shop_imgs: res.data.shop_pics,
              }) 
              this._isMouted_shop = false;
          }

      }
   ) 
  }



  build_shop(){
    let items =[]
    this.state.shop_names.map((val,index) => {
        items.push(
            <Link style={{ textDecoration: 'none' }} to={"/profile/"+this.state.shop_ids[index]}>
                <Profile drink={val} img={require('./' + this.state.shop_imgs[index])} />
            </Link>
        )
    })
    return items;
  }

  build_drink(){
    let items =[]
    this.state.drink_names.map((val,index) => {
        items.push(
            <Link style={{ textDecoration: 'none' }} to={"/drinkprofile/"+this.state.drink_ids[index]}>
                <Profile drink={val} img={require('./' + this.state.drink_imgs[index])} />
            </Link>
        )
    })
    return items;
  }

    render() {
        this.fetch_info()

        return (
          <div id='body' className="body" >
            <Particles style={{position: 'absolute'}} params={particlesConfig} ></Particles>
            <div className="landing">

              <div className="left">
                <motion.div
                  initial= {{ opacity: 0, x: -150}}
                  animate= {{ opacity: 1, x: 0}}
                  transition= {{ duration: 1.75 }}
                >
                    <h1 style={{fontSize: "50px", color: "grey"}} >Get Bubblin' Now</h1>
                </motion.div>
                <br></br>
                <div>
                    <p style={{fontFamily:'Georgia', fontSize: "20px", color: "grey"}} ><motion.h3
                      initial= {{ opacity: 0, x: 150}}
                      animate= {{ opacity: 1, x: 0}}
                      transition= {{ duration: 1.75 }}                    
                    >Search for a Drink or Shop</motion.h3></p>

                    <br></br>

                    <input type="search" onChange={event => (this.setState({search_for: event.target.value}))} style={{height: '25x', width: '300px'}} aria-label="Search through site content"></input>
                    
                    <select id="search_option" onChange={event => (this.setState({search_option: event.target.value}))}>
                        <option value="shop" >Search by Shop</option>
                        <option value="drink">Search by Drink</option>
                    </select>
                    <a id="search-link" href={"result/"+this.state.search_option + "/" + this.state.search_for}>
                    <div><br></br></div>
                    <Button text='Search' colour='deepskyblue' />
                    </a> 
                    <img 
                      style={{
                        position:'absolute',
                        top:'420px',
                        left:'90px'
                      }}
                      src={require('./resources/bobacat.gif').default}
                    ></img>              
                </div>

              </div>
    
              <div className="right">

                <motion.div
                  animate={{ scale: 1.4}}
                  transition={{
                    duration: 3,
                    loop: Infinity,
                    repeatDelay: 0.2,
                    yoyo: Infinity                 
                  }}
                ><p style={{fontSize: '20px', color:'red' }}>Click The Wheel To Spin ! </p></motion.div>
                <br></br>
                
                <motion.img 
                  src={require('./resources/wheel1.png').default}
                  id='wheel'
                  width='470px'
                  height='470px'
                  animate={{rotate: this.getRotate()}}
                  transition={{duration: 1 ,loop: 0}}
                  onClick = {() => {
                    this.setRotate(); 
                    setTimeout(this.openModal,1200);
                    //reset the wheel for next spin
                    setTimeout(this.resetRotate,2000);
                    }}                
                  />
                  <Modal showModal={this.state.showModal} setShowModal={this.openModal} info={this.state.info}/>

              </div>
            </div> 
    
            <div className = "bottom">
    
              <div className = "drink">
                <div className="container-heading">
                  <h1>Popular Drinks</h1>                  
                </div>
                <a  style={{ textDecoration: 'none' }} href="drinkprofile">
                <div className='container-home-drink'>
                  {this.build_drink()}
                </div>
                </a>

                  
              </div>
    
              <div className = "shop">
                <div className="container-heading">
                  <h1>Popular Shops</h1>                  
                </div>
                <a  style={{ textDecoration: 'none' }} href="profile/0">
                <div className='container'>
                  {this.build_shop()}
                </div>
                </a>
                 
              </div>
    
            
            </div>
            
          </div>
          
        );
    }
}

export default Home;