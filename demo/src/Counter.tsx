import React from "react"
import { useState } from "react"
export default function Counter(){
    const [count,setCount]=useState(0)
    const handleIncrement=()=>{
        setCount(count+1)
    }
    const handleReset=()=>{
        setCount(0)
    }
    return <div>
       
        <h1>{count}</h1>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleReset}>Reset</button>
    </div>

}