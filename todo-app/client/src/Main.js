import React, { useEffect, useState } from 'react'
import './css/main.scss';
import axios from 'axios';

export default function Main() {
    const [todoInput, setTodoInput] = useState('');
    const [editInput, setEditInput] = useState('');
    const [todoList, setTodoList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editVal, setEditVal] = useState();
    const todoInputChange = (e) => {
        console.log(e.target.value)
        setTodoInput(e.target.value);
    }
    const editInputChange = (e) => {
        setEditInput(e.target.value)
    }
    const addTodoList = () => {
        axios({
            method: 'POST',
            url: '/todo',
            data: {
                title: todoInput
            }
        }).then((res) => setTodoList(todoList.concat(res.data)))
        setTodoInput('..');
    }

    const patchTodo = (data) => {
        setEditVal(data)
        setEditInput(data.title)
        setIsEditing(true)
    }

    const patchTodoData = () => {
        axios({
            method: 'PATCH',
            url: `/todo/:${editVal.id}`,
            data: {
                id: editVal.id,
                title: editInput,
                done: editVal.done,
            }
        }).then((res) => {
            setTodoList(
                todoList.map((data) => (data.id === res.data.id) ? { ...data, title: res.data.title } : data)
            )
        })
        setEditInput('');
        setIsEditing(false);
    }

    const deleteTodo = (data) => {
        axios({
            method: 'DELETE',
            url: `/todo/:${data}`,
            data: {
                id: data
            }
        }).then(setTodoList(todoList.filter(todo => data !== todo.id)))
    }

    useEffect(() => {
        setTimeout(() => {
            axios({
                method: 'GET',
                url: '/todos',
            }).then((res) => setTodoList(res.data)).finally(setIsLoading(true));
        }, 2000);
    }, [])

    return (
        <div className='main'>
            <div className='input-form'>
                {!isEditing ?
                    <>
                        <input type='text' onChange={todoInputChange} value={todoInput} />
                        <button type='button' onClick={addTodoList}>추가</button>
                    </>
                    :
                    <>
                        <input type='text' onChange={editInputChange} value={editInput} />
                        <button type='button' onClick={() => patchTodoData()}>수정</button>
                    </>
                }
            </div>

            {!isLoading ?
                <h3>Loading..</h3> :
                <ul>
                    {!todoList.length ? "빈값" : todoList.map((data, idx) => {
                        return (
                            <li key={idx}>
                                {/* <input className='check-box' type='checkbox' value={data.done} /> */}
                                <p className='li-p'>{data.title}</p>
                                <button onClick={() => patchTodo(data)}>수정</button>
                                <button onClick={() => deleteTodo(data.id)}>삭제</button>
                            </li>
                        )
                    })}
                </ul>
            }

        </div >
    )
}
