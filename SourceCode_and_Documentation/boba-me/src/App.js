import logo from './resouces/logo.png'
import bg_img from './resouces/background.jpg'
import InfiniteScroll from 'react-infinite-scroll-component'
import Header from './components/Header'
import Button from './components/Button'
import Profile from './components/Profile'


function App() {
  const list = ['red', 'blue'] 

  const fetchData = () => {
    // dummy function that does nothing but is required for infite scroll
  };


  return (
    <div className="App">
      {/*
      Main divs:
        top_banner  => the top menu banner including login, log & rewards
        body        => the bulk of the information will display here
        landing     => the landing screen when someone visit include left & right
        left        => the left hand side of the landing, including : search bar/ filer/ search button / business slogan
        right       => the right hand side of the landing, including : randomiser
        bottom      => the bottom half of the homepage, including drinks and shops 
        drinks      => contains drinks profiles
        shops       => contains shops profiles
      Other inner divs ... 
      */}
      <div className="top_banner">
        <div className="left_banner">
          <img 
            src={logo}
            width='60'
            height='60'></img>
          <p>Boba Me!</p>        
	</div>

	<div className="right_banner">
	  <Button text='My Rewards!' colour='goldenrod'/>
	  <Button text='Log in' colour='AntiqueWhite'/> 
	</div>

      </div>


      <div className="body" style={{ backgroundImage: `url(${bg_img})` }}>

        <div className="landing">

          <div className="left">
            <p>business slogan</p>
            <p >Search for shop or drink !</p>
            <input type="search" id="site-search" name="q" aria-label="Search through site content"></input>

            <select id="search_option">
                <option value="shop">search by shop</option>
                <option value="drink">search by drink</option>
            </select>
            <Button text='Search' colour='deepskyblue'/>
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
              <Profile drink='perl mik tea' img={require('./resouces/pearl-milk-tea.png')} />  
              <Profile drink='perl mik tea' img={require('./resouces/pearl-milk-tea.png')} />  
              <Profile drink='perl mik tea' img={require('./resouces/pearl-milk-tea.png')} /> 
            </div>
            
            <InfiniteScroll
                dataLength={list.length} //This is important field to render the next data
                next={fetchData}
                hasMore={true}
                //loader={<h4>Loading...</h4>}
                endMessage={
                  <p style={{ textAlign: 'center' }}>
                    <b>Yay! You have seen it all</b>
                  </p>
                }
              >
                {list.map((element ,index) => (
                  <div className='container'>
                  <Profile drink='perl mik tea' img={require('./resouces/pearl-milk-tea.png')} />  
                  <Profile drink='perl mik tea' img={require('./resouces/pearl-milk-tea.png')} />  
                  <Profile drink='perl mik tea' img={require('./resouces/pearl-milk-tea.png')} />                   
                  </div>
                ))}

              </InfiniteScroll>
          </div>

          <div className = "shop">
            <Header title="Popular shops"/>
  
            <div className='container'>
              <Profile drink='Coco' img={require('./resouces/Coco.jpg')} />  
              <Profile drink='Coco' img={require('./resouces/Coco.jpg')} />  
              <Profile drink='Coco' img={require('./resouces/Coco.jpg')} />  
            </div>
            <InfiniteScroll
                dataLength={list.length} //This is important field to render the next data
                next={fetchData}
                hasMore={true}
                //loader={<h4>Loading...</h4>}
                endMessage={
                  <p style={{ textAlign: 'center' }}>
                    <b>Yay! You have seen it all</b>
                  </p>
                }
              >
                {list.map((element ,index) => (
                  <div className='container'>
                    <Profile drink='Coco' img={require('./resouces/Coco.jpg')} />  
                    <Profile drink='Coco' img={require('./resouces/Coco.jpg')} />  
                    <Profile drink='Coco' img={require('./resouces/Coco.jpg')} />                  
                  </div>
                ))}

              </InfiniteScroll>
          </div>

        
        </div>

      </div>
    </div>
  )
}

export default App;
