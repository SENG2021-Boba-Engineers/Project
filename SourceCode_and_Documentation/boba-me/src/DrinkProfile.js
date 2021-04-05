import React, { Component } from 'react';
import Button from './components/Button';
import bg_img from './resources/background.jpg'
import Profile from './components/Profile'
import InfiniteScroll from 'react-infinite-scroll-component';

class DrinkProfile extends Component {
    render() {
        return (
            <div className='profile-container' style={{ backgroundImage: `url(${bg_img})` }}>
                <div><h2>Pearl Milk Tea</h2></div>
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
                            <div class="star"></div>
                            <div class="star"></div>
                            <div class="star"></div>
                            <div class="star"></div>
                            <div class="star"></div>
                        </div>
                        <div className='rating-button'>
                            <Button text="Add Rating"></Button>
                        </div>
                    </div>
                </div>

                <div className='right-profile'>
                    <h2>This drink is sold at</h2>
                    <div className='infodisplay'>
                        <div className='shop-grid'>
                            <Profile drink='$5.00' img={require('./resources/Coco.jpg')} />  
                            <Profile drink='$5.00' img={require('./resources/Coco.jpg')} />  
                            <Profile drink='$5.00' img={require('./resources/Coco.jpg')} />  
                            <Profile drink='$5.00' img={require('./resources/Coco.jpg')} />
                            <Profile drink='$5.00' img={require('./resources/Coco.jpg')} />
                            <Profile drink='$5.00' img={require('./resources/Coco.jpg')} />
                            <Profile drink='$5.00' img={require('./resources/Coco.jpg')} />
                        </div>
                    </div>
                </div> 
            </div>
        );
    }
}

export default DrinkProfile;