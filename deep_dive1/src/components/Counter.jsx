import { useState } from "react"

export default function Counter() {

    const [count, setCount] = useState(0)
    const [incrementBy, setIncrementBy] = useState(1)

    function incre (){
        setCount(count + incrementBy)
    }
    function decre(){
        setCount(count-1)
    }

    function increaseIncre(){
        setIncrementBy(incrementBy+10)
    }

    return <div>
        <h1>Count Value: {count}</h1>
        <button onClick={incre}>Incre</button>
        <button onClick={decre}>Decre</button>

        <h1>We are incrementing the val by: {incrementBy}</h1>
        <button onClick={increaseIncre}>increment</button>
    </div>
} 