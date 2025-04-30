import React,{useState} from 'react';
function MyComponent(){
    const[name,setName]=useState('Muzammil');
    const [age,setAge]=useState(10);
    const [isEmployed,setIsEmployed]=useState(false);
    const updateName=()=>{
        setName("Hussain");
    }
    const updateAge=()=>setAge(age+1);
    const toggleEmployeStatus=()=>setIsEmployed(!isEmployed);
return(
    <>
    <div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>
        <p>Age: {age}</p>
        <button onClick={updateAge}>Update Age</button>
        <p>Is Employed: {isEmployed ?"Yes": "No"}</p>
        <button onClick={toggleEmployeStatus}>Toggle Status</button>
    </div>
    </>
);
}
export default MyComponent;