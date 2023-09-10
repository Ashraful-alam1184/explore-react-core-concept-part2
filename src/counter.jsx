import { useState } from "react"

export default function Counter() {
    const counterStyle = {
        border: '2px solid red',
        borderRadius: '5px'
    }
    const [count, setCount] = useState(0);
    const handleAdd = ()=>{
        const newCount= count + 1;
        setCount(newCount);
    }
    const handleReduce = ()=>{
        const reduceCount=count - 1;
        setCount(reduceCount)
    }
    // console.log(Counter)
    return (
        <div style={counterStyle}>
            <h2>Counter: {count}</h2>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}