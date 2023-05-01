// action type정의
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

// 모듈이름/액션이름
// 컴포턴트에서 액션을 쉽게 발생시키기 위해
export const increase = () => ({ type: INCREMENT })
export const decrease = () => ({ type: DECREMENT })

const initialState = {
    number: 9,
};

// dispatch 실행시 호출되는 함수
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return { number: state.number + 1 };
        case DECREMENT:
            return { number: state.number - 1 };
        default:
            return state;
    }
}

export default counterReducer;