import {motion} from 'framer-motion';

const Result_profile = ({drink,img,price,rating}) => {

    return (
        
        <motion.div className='profile'
            initial = {{rotate: -20}}
            animate ={{ rotate: 0}}
            transistion = {{ duration : 1.5}}
            whileHover={{
                rotate: [5,-5,5,-5,0],
                duration: 3,
                yoyo: Infinity
            }}
        >
            <div className='profile_display_left'>
                <p style={{fontFamily:'Georgia', fontSize: "20px", color: "Black"}} >{drink}</p>
                <br></br>
                {(price == "0")?  <div></div> :  <p style={{fontFamily:'Georgia', fontSize: "20px", color: "Black"}}>Rating: {(rating == null ? "No ratings yet" : rating)}</p> }
                <br></br>
                {(price == "0")?  <div></div> :  <p style={{fontFamily:'Georgia', fontSize: "20px", color: "Black"}}>Price: {price}</p> }
                
            </div>

            <div className='profile_display_right'>
                <img src={img} style={{width:'130px', height:'150px'}}></img>
            </div>
    </motion.div>
    )

}

export default Result_profile