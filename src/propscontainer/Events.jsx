import React from 'react'
import { useState } from 'react'
const Events = () => {
    const [count, setcount] = useState(0)


    const increament = () => {
        setcount(count + 1)
    }
    const decrement = () => {
        if (count > 0) {
            setcount(count - 1)

        }
    }
    const reset = () => {
        setcount(0)
    }
    return (
        <div><h1>{count}</h1>
            <button onClick={increament}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>

        </div>
    )
}

export default Events
