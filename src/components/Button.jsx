function Button() {
    const handleClick = (e) =>e.target.textContent="Muzammil Hussain";
    return (
        <>
            <button onClick={(e) => handleClick(e)}>Click ME</button>
        </>
    );
}
export default Button;