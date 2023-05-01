import { useSelector, useDispatch } from 'react-redux';
import './styles/Box.css';

function App2() {
    // useSelector() hook
    // : redux store의 state를 조회
    // 인자로 콜백함수
    // 콜백함수의 매개변수로 state를 받을 수 있음
    const number = useSelector((state) => state.counter.number)
    return (
        <div className="App">
            number : {number}

            <Box1 />
        </div>
    );
}

const Box1 = ({ }) => {
    return (
        <div className="Box">
            <h2>Box1: </h2>
            <Box2 />
        </div>
    );
};

const Box2 = ({ }) => {
    return (
        <div className="Box">
            <h2>Box2: </h2>
            <Box3 />
        </div>
    );
};

const Box3 = () => {
    const number = useSelector((state) => state.counter.number)
    const isData = useSelector((state) => state.isData)
    const dispatch = useDispatch();

    return (
        <div className="Box">
            <h2>Box3: {number}</h2>
            isData : {isData ? '1' : "0"}
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
            <button onClick={() => dispatch({ type: 'CHANGE' })}>change state</button>
        </div>
    );
};

export default App2;
