import { useState } from "react";

function TODOList() {


    const [tasks, setTasks] = useState(["EAT", "Drink"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index) {
        const updatedTasks=tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    return (
        <>
            <div className="to-do-list">
                <h1>TODO LIST</h1>
                <div>
                    <input type="text" placeholder="Enter a Task..." value={newTask} onChange={handleInputChange} />
                    <button className="add-button" onClick={addTask}>ADD TODO</button>
                </div>
            </div>

            <ol>
                {tasks.map((task, index) =>
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                    </li>)}
            </ol>
        </>
    );
}
export default TODOList;