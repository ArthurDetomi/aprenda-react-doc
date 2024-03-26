import { useState } from 'react'

export default function ButtonUpdate() {

    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }


    return (
        <button onClick={handleClick}>
            Clicked {count} times.
        </button>
    );
}