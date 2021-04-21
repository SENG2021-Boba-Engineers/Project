import './Modal.css'
import {motion} from 'framer-motion'
import Result_profile from './Result_profile'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

export const Modal = ({showModal, setShowModal , info}) => {
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
                            <a style={{fontSize: "30px",}}>    
                                Your Lucky Drink !
                            </a>
                        </div>
                        <br></br>
                        <br></br>
                        {(info == [] ) ? <div><p>Ops your out of luck, try again later</p></div>  : 
                            <Link style={{ textDecoration: 'none' }} to={'/drinkprofile/'+ info[0]}>
                                <Result_profile drink={info[1]} img={require('../' + info[3]).default} price='???' rating='???'/> 
                            </Link>
                        }

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

Modal.propTypes = {
    info: PropTypes.array,
}