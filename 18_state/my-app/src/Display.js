import React, { useState } from 'react'
export default function Display() {
    const [txt, setTxt] = useState('안녕하세요')
    const [btnTxt, setBtnTxt] = useState('사라져라');
    const [display, setDisplay] = useState('block');
    const setCss = () => {
        if (display == 'none') {
            setBtnTxt('사라져라')
            setDisplay('block')
        } else {
            setBtnTxt('보여라')
            setDisplay('none')
        }
    }
    return (
        <div >
            <h1 style={{ display: display }}>{txt}</h1>
            <button onClick={setCss}>{btnTxt}</button>
        </div>
    )
}