import React, { useState } from 'react';
import TaskList from '../Components/TaskList';
import TaskForm from '../components/TaskForm';
import { Link } from 'react-router-dom';

function TaskManager() {
    // const [tasks, setTasks] = useState([]);
    // const [taskToEdit, setTaskToEdit] = useState(null);

    // const addTask = (task) => {
    //     console.log('add fun');
    //     setTasks([...tasks, { ...task, id: Date.now() }]);
    // };

    // const editTask = (updatedTask) => {
    //     console.log('edit fun');        
    //     setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
    // };

    // const deleteTask = (id) => {
    //     console.log('delete fun');
    //     setTasks(tasks.filter((task) => task.id !== id));
    // };

    return (
        <>
        <div className="w-full p-6 bg-white shadow-lg rounded-md max-w-4xl mx-auto relative ">
            <Link to='/' className='text-sm absolute top-[10px] left-0 bg-black text-white py-[7px] px-[15px]' style={{borderRadius: '0 45px 45px 0'}}>Back</Link>
            <div className='flex flex-col md:flex-row items-end gap-[40px]'>
                <div className='w-full md:w-1/2 hidden md:flex justify-center items-center pl-[50px]'>
                    <img src="assets/img/task-img.png" alt="img" className='max-w-[100%] w-full object-contain' />
                </div>
                <div className='w-full md:w-1/2 pt-8 md:pt-0'>
                    <h2 className="text-xl font-semibold mb-4">Task Manager</h2>
                    <TaskForm />
                </div>
            </div>
            <TaskList />
        </div>
        </>
    );
}

export default TaskManager;