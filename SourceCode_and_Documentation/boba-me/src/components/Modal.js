import './Modal.css'
import {motion} from 'framer-motion'
import Result_profile from './Result_profile'

export const Modal = ({showModal, setShowModal , div}) => {
    return (
        <>
            {showModal ? (
                <motion.div className='modal_wrapper'
                    initial= {{ scale: 0, opacity: 0}}
                    animate= {{ scale: 1, opacity: 1}}
                    transition= {{ duration: 0.65 }}
                >
                    <button className='modal_btn' onClick={setShowModal}> X </button>
                    <div className='modal_content'>
                        <div>
                            <a>    
                                Your Lucky Drink !
                            </a>
                        </div>
                        <br></br>
                        <br></br>
                        {div}
                        {/*<Result_profile drink='Pearl Milk Tea' img={require('../resources/pearl-milk-tea.png').default} price='$7.00' rating='4/5'/> */}
                        <img
                            style={{
                                
                                width:'120px',
                                height:'120px',
                                position:'abosolute',
                                right:'20px',
                                top:'20px'
                            }}
                            src={require('../resources/bobashake.gif').default}                 
                        ></img>
                    </div>
                </motion.div>
            ) : null}
        </>
    )
}