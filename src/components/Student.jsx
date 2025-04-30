import PropTypes from 'prop-types';

function Student(props) {
    return (
        <div className="student-data">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}


Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
};

console.log(Student.defaultProps = {
    name: "Guest",
    age: 22,
    isStudent: false,
})

export default Student;
