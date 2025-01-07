import { createContext, useState } from "react";

export const taskContext = createContext();

const TaskContextProvider = ({ children }) => {

    const [tasks, setTasks] = useState([]);
    const [taskToEdit, setTaskToEdit] = useState(null);

    const addTask = (task) => {
        console.log('add fun');
        setTasks([...tasks, { ...task, id: Date.now() }]);
    };

    const editTask = (updatedTask) => {
        console.log('edit fun');
        setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
    };

    const deleteTask = (id) => {
        console.log('delete fun');
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return(
        <taskContext.Provider value={{ tasks, setTasks, taskToEdit, setTaskToEdit, addTask, editTask, deleteTask }}>
            {children}
        </taskContext.Provider>
    )
}

export default TaskContextProvider;