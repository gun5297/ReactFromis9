import FriendItem from './FriendsItem';
import FriendInput from './FriendInput/FriendInput';
import './FriendsList.scss';
import { useState } from 'react';
const FriendList = ({ friendData, onActiveData, onAdd }) => {
    const [plusBtn, setPlusBtn] = useState(false);
    return (
        <div className='List-wrap'>
            <div className='top-wrap'>
                <h2>친구들 총 인원 : {friendData.length}명</h2>
                <button className='plus-btn' onClick={() => setPlusBtn(!plusBtn)}>
                    {!plusBtn ? '+' : <span>close</span>}
                </button>
            </div>
            <ul className='Friend-List'>
                {friendData.map((item) => (
                    <FriendItem key={item.id} {...item} onActiveData={onActiveData} />
                ))}
                {plusBtn && <FriendInput onAdd={onAdd} />}
            </ul>
        </div>
    );
};

export default FriendList;
