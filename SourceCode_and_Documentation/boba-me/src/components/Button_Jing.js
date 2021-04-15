import {motion} from 'framer-motion'

const Button = ({text,colour,event}) => {

    return (
        <motion.button className='btn'
            onClick={event}
            style={{backgroundColor: colour}}
            whileHover={{
                scale: 1.3,
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255)"
            }}
        >
            {text}
        </motion.button>
    )

}
Button.defaultProps = {
    color: 'black',
    text: 'change button text and color'
}


export default Button