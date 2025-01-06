import React, { useState } from 'react';
import TaskList from '../Components/TaskList';
import TaskForm from '../components/TaskForm';

function TaskManager() {
    const [tasks, setTasks] = useState([]);
    const [taskToEdit, setTaskToEdit] = useState(null);

    const addTask = (task) => {
        setTasks([...tasks, { ...task, id: Date.now() }]);
    };

    const editTask = (updatedTask) => {
        setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <div className="w-full p-6 bg-white shadow-lg rounded-md max-w-4xl mx-auto mt-10 ">
            <div className='flex flex-col md:flex-row gap-[40px]'>
                <div className='w-full md:w-1/2 flex justify-center items-center p-4 pr-0'>
                    <img src="assets/img/task-img.png" alt="img" className='max-w-[100%] w-full object-contain' />
                </div>
                <div className='w-full md:w-1/2'>
                    <h2 className="text-2xl font-semibold mb-8">Task Manager</h2>
                    <TaskForm addTask={addTask} editTask={editTask} taskToEdit={taskToEdit} setTaskToEdit={setTaskToEdit} />
                </div>
            </div>
            <TaskList tasks={tasks} setTaskToEdit={setTaskToEdit} deleteTask={deleteTask} />
        </div>
    );
}

export default TaskManager;