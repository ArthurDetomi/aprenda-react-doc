export default function Button() {
    const handleClick = () => {
        alert('You clicked me!');
    }

    return (
        <button onClick={handleClick}>
            Click me
        </button>
    )
};