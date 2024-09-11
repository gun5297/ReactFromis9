import { useId, useRef, useState } from 'react';
import InputGuide from './InputGuide';

const FriendInput = ({ onAdd }) => {
    const [isData, setIsData] = useState({
        name: '',
        age: '',
        src: '',
    });
    const [isGuide, setisGuide] = useState(false);
    const id = useId();
    const pluseData = (e) => {
        e.preventDefault();
        isData.name, isData.age, isData.src ? onAdd(isData) : alert('누락된 정보가 있습니다.');
        setIsData({
            name: '',
            age: '',
            src: '',
        });
    };
    const onSetIsData = (name, age, src) => {
        setIsData({
            name,
            age,
            src,
        });
        setisGuide(false);
    };
    return (
        <>
            <form className='Friend-Input' onSubmit={pluseData}>
                <div>
                    <label htmlFor={`${id}-name`}>이름</label>
                    <input
                        type='text'
                        id={`${id}-name`}
                        value={isData.name}
                        onChange={(e) =>
                            setIsData({
                                ...isData,
                                name: e.target.value,
                            })
                        }
                    />
                </div>
                <div>
                    <label htmlFor={`${id}-age`}>나이</label>
                    <input
                        type='text'
                        id={`${id}-age`}
                        value={isData.age}
                        onChange={(e) =>
                            setIsData({
                                ...isData,
                                age: e.target.value,
                            })
                        }
                    />
                </div>
                <div>
                    <label htmlFor={`${id}-src`}>이미지</label>
                    <input
                        type='text'
                        id={`${id}-src`}
                        value={isData.src}
                        onChange={(e) =>
                            setIsData({
                                ...isData,
                                src: e.target.value,
                            })
                        }
                    />
                </div>
                <div className='btn-wrap'>
                    <button>추가</button>
                </div>
                <p className='pluse-con' onClick={() => setisGuide(true)}>
                    💡
                </p>
            </form>
            {isGuide && <InputGuide onSetIsData={onSetIsData} />}
        </>
    );
};

export default FriendInput;
