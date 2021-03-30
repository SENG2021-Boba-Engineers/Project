import logo from './resouces/logo.png'
import Header from './components/Header'
import Button from './components/Button'



function App() {

  return (
    <div className="App">
      {/*
        top_banner  => the top menu banner including login, log & rewards
        body        => the bulk of the information will display here
        landing     => the landing screen when someone visit include left & right
        left        => the left hand side of the landing, including : search bar/ filer/ search button / business slogan
        right       => the right hand side of the landing, including : randomiser
      */}
      <div className="top_banner"> 
        <img 
          src={logo}
          width='60'
          height='60'></img>
        <p2>Boba Me!</p2>
        <Button text='My Rewards!' colour='goldenrod'/>
        <Button text='Log in' colour='AntiqueWhite'/> 
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

      </div>
    </div>
  )
}

export default App;
