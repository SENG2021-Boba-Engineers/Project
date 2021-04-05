import React, { Component } from 'react';
import bg_img from './resources/background.jpg'
import Button from './components/Button'

class Reward extends Component {
    render() {
        return (
            <div className='reward' style={{ backgroundImage: `url(${bg_img})` }} >
                <div><h2>My Rewards</h2></div>

                <div className='left-reward'>
                    <div className='infodisplay'>
                        <p>20% at Chattime</p>
                        <p>1/2 Price 2nd Drink at Gong Cha</p>
                        <p>Free Birthday Drink at Coco</p>
                        <p>Buy 2 get 1 free at Sharetea</p>
                        <Button colour='yellow' text='Redeem'/>
                    </div>
                
                </div>


                <div className='right-reward'>
                    <div className='infodisplay'>
                        <p>You have reviewed 5/5 drinks this month</p>
                        <p>You can now enter in the draw pool for a change to get free drinks!</p>
                        <Button colour='Orange' text='Enter Raffle'/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Reward;