import { FaStar } from 'react-icons/fa'
import './StarRating.css'
import {useState} from 'react'

const StarRating = (initial) => {
    const [rating,setRating] = useState(initial);
    const [hover, setHover] = useState(null);


    return (
        <div>
            {[...Array(5)].map( (star,i) => {
                const ratingValue = i + 1;
                return (
                    <label>
                        <input 
                            type='radio' 
                            name='rating' 
                            value={ratingValue} 
                            style={{display: 'none'}}
                            onClick={ () => {setRating(ratingValue)}} 
                        />
                        <FaStar 
                            className='star' 
                            onMouseEnter={ () =>setHover(ratingValue)}
                            onHouseLeave={ () =>setHover(null)}
                            color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
                            size={30} 
                        />
                    </label>
                )
            } )}


        </div>
    )
}

export default StarRating;