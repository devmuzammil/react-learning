import { useEffect, useState } from "react";

function MyComponent4() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    useEffect(() => {
        document.title = `Count ${count} ${color}`;
    }, [count, color]);

    function handleAddCount() {
        setCount(c => c + 1);
    }
    function handleSubtractCount() {
        setCount(c => c - 1);
    }
    function handleChangeColor() {
        setColor(c => c === "green" ? "red" : "green");
    }


    return (
        <>
            <p style={{ color: color }}>Count: {count}</p>
            <button onClick={handleAddCount}>Add</button>
            <button onClick={handleSubtractCount}>Subtract</button>
            <button onClick={handleChangeColor}>Change Color</button>
        </>
    );
}
export default MyComponent4;