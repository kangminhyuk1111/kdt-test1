import React from 'react'
import { useState } from 'react'

export default function FunctionComponent() {
    const [ counter , setCounter ] = useState(0)
    const increase = () => {
        setCounter(counter+1)
    }
    const decrease = () => {
        setCounter(counter-2)
    }
  return (
    <div>
        <h2>{counter}</h2>
        <button onClick={increase}>u</button>
        <button onClick={decrease}>d</button>
        
    </div>
    
  )
}
