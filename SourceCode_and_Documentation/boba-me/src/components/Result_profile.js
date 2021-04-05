const Result_profile = ({drink,img,price,rating}) => {

    return (
        <div className='profile'>
            <div className='profile_display_left'>
                <p>{drink}</p>
                <p>Rating: {rating}</p>
                <p>Price: {price}</p>
            </div>

            <div className='profile_display_right'>
                <img src={img} style={{width:'130px', height:'150px'}}></img>
            </div>
    </div>
    )

}

export default Result_profile