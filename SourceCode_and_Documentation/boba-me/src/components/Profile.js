const Profile = ({drink,img}) => {

    return (
        <div className='grid-item'>
            <img src={img.default} width='140' height='140'></img>
            <p>{drink}</p>
        </div>
    )

}

export default Profile