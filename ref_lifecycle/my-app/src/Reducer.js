import React, { useReducer } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case "INCREMENT":
            return { value: state.value + 1 };
        case "DECREMENT":
            return { value: state.value - 1 };
        case "x3Value":
            return { value: state.value * 3 };
        default:
            return state;
    }
}

const Reducer = () => {
    const [state, dispatch] = useReducer(reducer, { value: 0 });

    return (
        <div>
            <h1>{state.value}</h1>

            <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
            <button onClick={() => dispatch({ type: "x3Value" })}>*3</button>
        </div>
    );
}

export default Reducer;