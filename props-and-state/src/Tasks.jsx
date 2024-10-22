import React, { useState } from 'react';

function DynamicTaks() {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('');
    function addTask() {
        setTasks([...tasks, task]);
        setTask('');
    }
    return (
        <>
            <input type='text' value={task} onChange={(event) => setTask(event.target.value)} placeholder='Enter your Taks' />
            <button onClick={addTask} >Add Task</button>
            <h4>Taks List</h4>
            <ul>
                {
                    tasks.map((t, index) => (
                        <li key={index}>{t}</li>
                    ))
                }
            </ul>
        </>
    )
}

export default DynamicTaks;