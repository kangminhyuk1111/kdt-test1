import React, { useReducer } from 'react'

const reducer = (prevNumber, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { value: prevNumber.value + 1 };
        case "DECREMENT":
            return { value: prevNumber.value - 1 };
        case "MULTI":
            return { value: prevNumber.value * 2 };
        default:
            return { value: prevNumber.value };
    }
}

export default function UseReducerT() {
    const [state, dispatch] = useReducer(reducer, { value: 7 });
    return (
        <div>
            <h1>useReducer</h1>
            {state.value}
            <button onClick={() => { dispatch({ type: "INCREMENT" }) }}>++</button>
            <button onClick={() => { dispatch({ type: "DECREMENT" }) }}>--</button>
            <button onClick={() => { dispatch({ type: "MULTI" }) }}>*2</button>

        </div>
    )
}
