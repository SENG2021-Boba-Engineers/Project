import {Component} from 'react';
import InfiniteScroll from 'react-infinite-scroll-component'
import bg_img from './resources/background.jpg'
import Header from './components/Header'
import Button from './components/Button'
import Profile from './components/Profile'



class Home extends Component {
  
  state = {
    items: Array.from({ length: 20 }),
    hasMore: true
  };

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
            <div id='body' className="body"  style={{ backgroundImage: `url(${bg_img})` }}>

            <div className="landing">
    
              <div className="left">
                <div>
                    <p>business slogan</p>
                </div>
                <div>
                    <p >Search for shop or drink !</p>
                    <input type="search" id="site-search" name="q" aria-label="Search through site content"></input>
        
                    <select id="search_option">
                        <option value="shop">search by shop</option>
                        <option value="drink">search by drink</option>
                    </select>
                    <Button text='Search' colour='deepskyblue'/>                    
                </div>

              </div>
    
              <div className="right">
                <p>feeling lucky?</p>
                <Button text='change into fortune wheel later' colour='lightcoral'/>
              </div>          
            </div> 
    
            <div className = "bottom">
    
              <div className = "drink">
                <Header title="Popular drinks"/> 
    
                <div className='container'>
                  <Profile drink='perl mik tea' img={require('./resources/pearl-milk-tea.png')} />  
                  <Profile drink='perl mik tea' img={require('./resources/pearl-milk-tea.png')} />  
                  <Profile drink='perl mik tea' img={require('./resources/pearl-milk-tea.png')} /> 
                </div>
                
                
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
                      <Profile drink='perl mik tea' img={require('./resources/pearl-milk-tea.png')} />  
                      <Profile drink='perl mik tea' img={require('./resources/pearl-milk-tea.png')} />  
                      <Profile drink='perl mik tea' img={require('./resources/pearl-milk-tea.png')} />                   
                      </div>
                    ))}
    
                  </InfiniteScroll>
                  
              </div>
    
              <div className = "shop">
                <Header title="Popular shops"/>
      
                <div className='container'>
                  <Profile drink='Coco' img={require('./resources/Coco.jpg')} />  
                  <Profile drink='Coco' img={require('./resources/Coco.jpg')} />  
                  <Profile drink='Coco' img={require('./resources/Coco.jpg')} />  
                </div>
               
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
                        <Profile drink='Coco' img={require('./resources/Coco.jpg')} />  
                        <Profile drink='Coco' img={require('./resources/Coco.jpg')} />  
                        <Profile drink='Coco' img={require('./resources/Coco.jpg')} />                  
                      </div>
                    ))}
    
                </InfiniteScroll>
                 
              </div>
    
            
            </div>
    
          </div>
        );
    }
}

export default Home;