import history from '../history'

const Button = ({text,colour,event}) => {

    return (
        <button 
        onClick={event}
            style={{backgroundColor: colour}}>
            {text}
        </button>
    )

}
Button.defaultProps = {
    color: 'black',
    text: 'change button text and color'
}


export default Button