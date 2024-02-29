import { useEffect } from "react"

const UseEffectDemo=()=>{
    useEffect(()=>{
        console.log("Useeffect is running");
    },[]);
    return (
        <h1>UseEfect</h1>
    )
}

export default UseEffectDemo;