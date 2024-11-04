import { useState } from 'react'

export default function States() {
    const [count, setCount] = useState(0);
    const counterIncrement = () => {
        setCount(count + 1);
        setCount(count + 1);
    }
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={counterIncrement}>Increment Count</button>
        </div>
    )
}
