const FriendsItem = ({ id, name, age, body, src, isDone, onActiveData }) => {
    return (
        <li className='Friend-Item'>
            <div className='img-wrap'>
                <img src={src} alt='사진' />
            </div>
            <div className='text-wrap'>
                <p className='name-txt'>
                    이름 : <span>{name}</span>
                </p>
                <p className='age-txt'>
                    나이 : <span>{age}</span>
                </p>
            </div>
            <div className='btn-wrap' onClick={() => onActiveData(id)}>
                <img src={isDone ? './images/FullInfoActive.svg' : './images/FullInfo.svg'} />
            </div>
        </li>
    );
};

export default FriendsItem;
