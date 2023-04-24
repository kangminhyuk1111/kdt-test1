import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loading from './Loading';

export default function UseEffect() {
    const [postList, setPostList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            axios({
                method: 'get',
                url: 'https://jsonplaceholder.typicode.com/users',
            }).then((res) => {
                setPostList(res.data);
            }).finally(setIsLoading(true))
        }, 2000);
    }, [])
    return (
        <div className='main'>
            <h1>👶USER LIST👩</h1>
            {isLoading ?
                postList.map((data, idx) => (
                    <div key={idx} className='main-div'>
                        <p>{data.name}</p>
                        <p>{data.username}</p>
                        <p>{data.email}</p>
                        <p>{data.phone}</p>
                    </div>
                )) : <h2><Loading /></h2>}
        </div>
    )
}
