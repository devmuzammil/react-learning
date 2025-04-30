import PropTypes from 'prop-types';
function UserGreeting(props) {

    const welcomeMessage = <h2>Welcome {props.username}</h2>;
    const loginPrompt = <h2>Login</h2>
    return (props.isloggedIn ? welcomeMessage : loginPrompt)
}


export default UserGreeting;
