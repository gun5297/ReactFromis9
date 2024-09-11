import './FriendInfo.scss';
const FriendInfo = ({ id, name, age, body, src }) => {
    return (
        <div className='Friend-Info'>
            <div className='big-img-wrap'>
                <img src={src} />
            </div>
            <div className='title-wrap'>
                <p>이름 : {name}</p>
                <p>나이 : {age}</p>
            </div>
            <div className='body-wrap'>
                <p>
                    정보 : {body} {name} {age}살
                </p>
            </div>
        </div>
    );
};

export default FriendInfo;
