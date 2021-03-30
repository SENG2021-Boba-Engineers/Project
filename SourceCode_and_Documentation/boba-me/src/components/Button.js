const Button = ({text,colour}) => {

    return (
        <button style={{backgroundColor: colour}}>
            {text}
        </button>
    )

}
Button.defaultProps = {
    color: 'black',
    text: 'change button text and color'
}


export default Button