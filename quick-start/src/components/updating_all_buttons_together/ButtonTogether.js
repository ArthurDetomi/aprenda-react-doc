export default function ButtonTogether({count, onClick}) {
    return (
        <button onClick={onClick}>
            Clicked {count} times.
        </button>
    )
}