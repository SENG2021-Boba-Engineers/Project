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

class Home extends Component {
  state = {
    items: Array.from({ length: 20 }),
    hasMore: true,
    rotate: 0,
    showModal: false,
    setShowModal: false,
    search_for: "",
    search_option: ""
  };

  getRotate = () => {
    return this.state.rotate;
  }

  setRotate = () => {
    this.setState({
      rotate: Math.random() * (2800-1070) + 1070
    })
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

  Search_drink = () => {
    console.log(this.state.search_for)
    axios.get(`http://127.0.0.1:5000/api/search_drinks`, { params: { search_term: 'Pearl Milk Tea' } })
      .then((response) => {
        console.log(response)
      })
  }


  fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setTimeout(() => {
      if (this.state.items.length >= 40) {
        this.setState({ hasMore: false });
        return;
      }
      this.setState({
        items: this.state.items.concat(Array.from({ length: 20 }))
      });
    }, 1500);
  };

    render() {
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
                    
                    <select id="search_option" onChange={event => (this.setState({search_option: event.target.value}, console.log(event.target.value)))}>
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
                  //initial={{ scale: 1}}
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
                  <Modal showModal={this.state.showModal} setShowModal={this.openModal}/>

              </div>
            </div> 
    
            <div className = "bottom">
    
              <div className = "drink">
                <div className="container-heading">
                  <h1>Popular Drinks</h1>                  
                </div>
                <a  style={{ textDecoration: 'none' }} href="drinkprofile">
                <div className='container'>
                  <Profile drink='Pearl Milk Tea' img={require('./resources/pearl-milk-tea.png')} />  
                  <Profile drink='Apple Green Tea' img={require('./resources/cha2.png')} />  
                  <Profile drink='Assam Black Milk Tea' img={require('./resources/cha0.png')} /> 
                </div>
                </a>
                
                {/*
                <InfiniteScroll
                    dataLength={this.state.items.length} //This is important field to render the next data
                    next={this.fetchMoreData}
                    hasMore={true}
                    //loader={<h4>Loading...</h4>}
                    endMessage={
                      <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                      </p>
                    }
                  >
                    {this.state.items.map((element ,index) => (
                      <div className='container'>
                      <Profile drink='Pearl Milk Tea' img={require('./resources/pearl-milk-tea.png')} />  
                      <Profile drink='Pearl Milk Tea' img={require('./resources/pearl-milk-tea.png')} />  
                      <Profile drink='Pearl Milk Tea' img={require('./resources/pearl-milk-tea.png')} />                   
                      </div>
                    ))}
    
                  </InfiniteScroll>
                  */}
                  
              </div>
    
              <div className = "shop">
                <div className="container-heading">
                  <h1>Popular Shops</h1>                  
                </div>
                <a  style={{ textDecoration: 'none' }} href="profile">
                <div className='container'>
                  <Profile drink='Coco Randwick' img={require('./resources/coco_logo.webp')} />  
                  <Profile drink='Gong Cha Randwick' img={require('./resources/shop2.png')} />  
                  <Profile drink='Coco Chinatown' img={require('./resources/coco_logo.webp')} />  
                </div>
                </a>
               
                {/*
                <InfiniteScroll
                    dataLength={this.state.items.length} //This is important field to render the next data
                    next={this.fetchMoreData}
                    hasMore={true}
                    //loader={<h4>Loading...</h4>}
                    endMessage={
                      <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                      </p>
                    }
                  >
                    {this.state.items.map((element ,index) => (
                      <div className='container'>
                        <Profile drink='Coco' img={require('./resources/coco_logo.webp')} />  
                        <Profile drink='Gong Cha' img={require('./resources/shop2.png')} />  
                        <Profile drink='Coco' img={require('./resources/coco_logo.webp')} />                  
                      </div>
                    ))}
    
                </InfiniteScroll>
                    */}
                 
              </div>
    
            
            </div>
            
          </div>
          
        );
    }
}

export default Home;