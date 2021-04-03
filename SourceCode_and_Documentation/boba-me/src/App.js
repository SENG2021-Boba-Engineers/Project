import logo from './resouces/logo.png'
import tea from './resouces/pearl-milk-tea.png'
import Header from './components/Header'
import Button from './components/Button'
import Profile from './components/Profile'


function App() {

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
        other inner divs ... 
      */}
      <div className="top_banner">
        <div className="left_banner">
          <img 
            src={logo}
            width='60'
            height='60'></img>
          <p2>Boba Me!</p2>        
	</div>

	<div className="right_banner">
	  <Button text='My Rewards!' colour='goldenrod'/>
	  <Button text='Log in' colour='AntiqueWhite'/> 
	</div>

      </div>


      <div className="body">

        <div className="landing">

          <div className="left">
            <p1>business slogan</p1>
            <label for="site-search">Search for shop or drink !</label>
            <input type="search" id="site-search" name="q" aria-label="Search through site content"></input>

            <select id="search_option">
                <option value="shop">search by shop</option>
                <option value="drink">search by drink</option>
            </select>
            <Button text='Search' colour='deepskyblue'/>
          </div>

          <div className="right">
            <p1>feeling lucky?</p1>
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
            
          </div>

          <div className = "shop">
            <Header title="Popular shops"/>
  
            <div className='container'>
              <Profile drink='Coco' img={require('./resouces/Coco.jpg')} />  
              <Profile drink='Coco' img={require('./resouces/Coco.jpg')} />  
              <Profile drink='Coco' img={require('./resouces/Coco.jpg')} />  
            </div>
          </div>

        
        </div>

      </div>
    </div>
  )
}

export default App;
