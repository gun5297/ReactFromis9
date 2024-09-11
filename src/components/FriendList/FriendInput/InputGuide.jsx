const InputGuide = ({ onSetIsData }) => {
    const 이채영 = () => {
        onSetIsData('이채영', 25, './images/img6.jpeg');
    };
    const 이나경 = () => {
        onSetIsData('이나경', 25, './images/img7.jpeg');
    };
    const 백지헌 = () => {
        onSetIsData('백지헌', 22, './images/img8.jpeg');
    };
    return (
        <>
            <div className='Input-Guide'>
                <h2>입력 가이드</h2>
                <ul>
                    <li>
                        <p>이름 : 이채영</p>
                        <p>나이 : 25세</p>
                        <p>이미지 : ./images/img6.jpeg</p>
                        <div className='btn-wrap'>
                            <button onClick={이채영}>선택</button>
                        </div>
                    </li>
                    <li>
                        <p>이름 : 이나경</p>
                        <p>나이 : 25세</p>
                        <p>이미지 : ./images/img7.jpeg</p>
                        <div className='btn-wrap'>
                            <button onClick={이나경}>선택</button>
                        </div>
                    </li>
                    <li>
                        <p>이름 : 백지헌</p>
                        <p>나이 : 22세</p>
                        <p>이미지 : ./images/img8.jpeg</p>
                        <div className='btn-wrap'>
                            <button onClick={백지헌}>선택</button>
                        </div>
                    </li>
                </ul>
            </div>
            <div className='bg-color'></div>
        </>
    );
};

export default InputGuide;
