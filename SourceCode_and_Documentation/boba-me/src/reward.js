import React, { Component } from 'react';
import Button from './components/Button_Jing'
import {motion} from 'framer-motion'

class Reward extends Component {
    render() {
        return (
            <div className='reward'>
                <div><h2>My Rewards</h2></div>
                <br></br>
                <motion.div className='left-reward'
                    initial= {{ opacity: 0, x: -150}}
                    animate= {{ opacity: 1, x: 0}}
                    transition= {{ duration: 1.75 }}
                >
                    <div className='infodisplay'>
                        <p>20% at Chattime</p>
                        <p>1/2 Price 2nd Drink at Gong Cha</p>
                        <p>Free Birthday Drink at Coco</p>
                        <p>Buy 2 get 1 free at Sharetea</p>
                        <Button colour='Orange' text='Redeem'/>
                    </div>
                
                </motion.div>


                <motion.div className='right-reward'
                    initial= {{ opacity: 0, x: 150}}
                    animate= {{ opacity: 1, x: 0}}
                    transition= {{ duration: 1.75 }}                
                >
                    <div className='infodisplay'>
                        <p>You have reviewed 5/5 drinks this month</p>
                        <p>You can now enter in the draw pool for a change to get free drinks!</p>
                        <Button colour='Orange' text='Enter Raffle'/>
                    </div>
                </motion.div>
            </div>
        );
    }
}

export default Reward;