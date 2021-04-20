const Profile = ({drink,img}) => {

    return (
        <div className='grid-item'>
            <img src={img.default} width='140px' height='140px'></img>
            <p>{drink}</p>
        </div>
    )

}

export default Profile