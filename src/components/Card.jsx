import profilePic from '../assets/guy.jpg'
function Card() {
    return (
        <div className="card">
            <img className='card-image' src={profilePic} alt="Muzammil Hussain" />
            <h2>Muzammil Hussain</h2>
            <p>FullStack Engineer</p>
        </div>
    );
}
export default Card;