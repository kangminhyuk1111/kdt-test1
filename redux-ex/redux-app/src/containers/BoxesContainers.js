// container의 역할
// redux store와 components 매개체
// => 컴포넌트를 container로 감싸서 컴포넌트는 오직 ui만 신경 쓸 수 있도록
import { useSelector, useDispatch } from 'react-redux';
import { Box1, Box2, Box3 } from '../App4';
import { increase, decrease } from '../store/counterReducer';

export const Box1Container = () => {
    return <Box1 />
}

export const Box2Container = () => {
    return <Box2 />
}

export const Box3Container = () => {
    const number = useSelector(state => state.counter.number)
    const dispatch = useDispatch();
    return <Box3 number={number}
        onIncrease={() => dispatch(increase())}
        onDecrease={() => dispatch(decrease())} />
}