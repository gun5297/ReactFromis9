import FriendList from '../FriendList/FriendList';
import FriendInfo from '../Information/FriendInfo';
import './Friend.scss';
import { useRef, useState } from 'react';

const dataList = [
    {
        id: 1,
        name: '이새롬',
        age: 27,
        body: '프로미스나인 멤버',
        src: './images/img1.jpeg',
        isDone: true,
    },
    {
        id: 2,
        name: '송하영',
        age: 27,
        body: '프로미스나인 멤버',
        src: './images/img2.jpg',
        isDone: false,
    },
    {
        id: 3,
        name: '박지원',
        age: 26,
        body: '프로미스나인 멤버',
        src: './images/img3.jpeg',
        isDone: false,
    },
    {
        id: 4,
        name: '노지선',
        age: 26,
        body: '프로미스나인 멤버',
        src: './images/img4.jpeg',
        isDone: false,
    },
    {
        id: 5,
        name: '이서연',
        age: 25,
        body: '프로미스나인 멤버',
        src: './images/img5.jpeg',
        isDone: false,
    },
];
const Friend = () => {
    const [friendData, setFriendData] = useState(dataList);
    const [activeData, setActiveData] = useState(friendData[0]);
    const no = useRef(friendData.length + 1);
    const onAdd = (isData) => {
        isData.id = no.current++;
        isData.body = '프로미스나인 멤버';
        isData.isDone = false;
        setFriendData([
            ...friendData,
            {
                ...isData,
            },
        ]);
    };
    const onActiveData = (id) => {
        setActiveData(friendData.find((item) => item.id == id));
        setFriendData(
            friendData.map((item) =>
                item.id == id ? { ...item, isDone: true } : { ...item, isDone: false }
            )
        );
    };
    return (
        <div className='wrap'>
            <FriendList friendData={friendData} onActiveData={onActiveData} onAdd={onAdd} />
            <FriendInfo {...activeData} />
        </div>
    );
};

export default Friend;
