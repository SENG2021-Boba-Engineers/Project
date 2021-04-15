import {motion} from 'framer-motion';

const Result_profile = ({drink,img,price,rating}) => {

    return (
        <motion.div className='profile'
            initial = {{rotate: -20}}
            animate ={{ rotate: 0}}
            transistion = {{ duration : 1.5}}
            whileHover={{
                scale: 1.2,
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255)"
            }}
        >
            <div className='profile_display_left'>
                <p>{drink}</p>
                <p>Rating: {rating}</p>
                <p>Price: {price}</p>
            </div>

            <div className='profile_display_right'>
                <img src={img} style={{width:'130px', height:'150px'}}></img>
            </div>
    </motion.div>
    )

}

export default Result_profile