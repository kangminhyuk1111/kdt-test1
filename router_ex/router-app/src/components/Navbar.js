import React from 'react'
import { Link } from 'react-router-dom'

const style = { margin: '4px' }

export default function Navbar() {
    return (
        <>
            <h2>React Router 실습 !</h2>
            <nav>
                <ul>
                    <li style={style}>
                        <Link to={'/'}>학생</Link>
                    </li>
                    <li style={style}>
                        <Link to={'/'}>코딩온</Link>
                    </li>
                    <li style={style}>
                        <Link to={'/'}>SearchParams</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}
