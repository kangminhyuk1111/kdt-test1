import React, { useRef } from 'react'

export default function Ref() {
    const h1Ref = useRef(1);
    console.log(h1Ref.current);
    const up = () => {
        h1Ref.current += 1;
        console.log(h1Ref.current);
    }
    const down = () => {
        h1Ref.current -= 1;
        console.log(h1Ref.current);
    }
    return (
        <div>
            <h1>{h1Ref.current}</h1>
            <button onClick={up}>+</button>
            <button onClick={down}>-</button>
        </div>
    )
}
