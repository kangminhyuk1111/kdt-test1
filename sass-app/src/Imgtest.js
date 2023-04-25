import React, { useState } from 'react'
import './styles/imgtest.scss';

export default function Imgtest() {
    const [postingImg, setPostingImg] = useState([1, 2, 3, 4, 5])
    return (
        <div className='img-test'>
            {postingImg.map((src) => {
                return (
                    <div className='imgs'>
                        <img src={process.env.PUBLIC_URL + `/images/${src}.jpg`} />
                    </div>
                )
            })}
        </div>
    )
}
