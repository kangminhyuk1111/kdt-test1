import React, { useState } from 'react'

export default function Color() {
    const [text, setText] = useState('검은색글씨');
    const [color, setColor] = useState('black');
    return (
        <div style={{ color: color }}>
            <h2>{text}</h2>
            <button onClick={() => {
                setColor('red')
                setText('빨간색글씨')
            }}>빨간색</button>
            <button onClick={() => {
                setColor('blue')
                setText('파란색글씨')
            }}>파란색</button>
        </div>
    )
}
