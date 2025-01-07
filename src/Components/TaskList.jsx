import React, { useContext } from 'react';
import { taskContext } from '../Context/TasksContext';

function TaskList() {

    const { tasks, setTaskToEdit, deleteTask } = useContext(taskContext);

    return (
        <div className="mt-6">
            {tasks.length === 0 ? (
                <>
                    <div className='p-6 bg-[#f7f7f7] rounded-[20px]'>
                        <p className="text-center text-gray-500">No tasks available</p>
                    </div>
                </>
            ) : (
                <div className="overflow-x-auto">
                        <table className="w-full min-w-[600px] text-sm table-auto border-collapse border border-gray-300">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="border border-gray-300 px-4 py-2">Title</th>
                                    <th className="border border-gray-300 px-4 py-2">Description</th>
                                    <th className="border border-gray-300 px-4 py-2">Status</th>
                                    <th className="border border-gray-300 px-4 py-2">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tasks.map((task) => (
                                    <tr key={task.id} className="text-center">
                                        <td className="border border-gray-300 px-4 py-2">{task.title}</td>
                                        <td className="border border-gray-300 px-4 py-2">{task.description}</td>
                                        <td className="border border-gray-300 px-4 py-2">{task.status}</td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            <button
                                                className="w-[30px] h-[30px] inline-flex items-center justify-center rounded-[100%] bg-yellow-400 text-white mr-2 hover:bg-yellow-500"
                                                onClick={() => setTaskToEdit(task)}
                                            >
                                                <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8 2L10 4M6.66667 11.3333H12M1.33333 8.66667L0.666667 11.3333L3.33333 10.6667L11.0573 2.94267C11.3073 2.69263 11.4477 2.35355 11.4477 2C11.4477 1.64645 11.3073 1.30737 11.0573 1.05733L10.9427 0.942666C10.6926 0.692705 10.3536 0.552284 10 0.552284C9.64645 0.552284 9.30737 0.692705 9.05733 0.942666L1.33333 8.66667Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </button>
                                            <button
                                                className="w-[30px] h-[30px] inline-flex items-center justify-center rounded-[100%] bg-red-500 text-white hover:bg-red-600"
                                                onClick={() => deleteTask(task.id)}
                                            >
                                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M2.66667 12C2.3 12 1.98622 11.8696 1.72533 11.6087C1.46444 11.3478 1.33378 11.0338 1.33333 10.6667V2H0.666667V0.666667H4V0H8V0.666667H11.3333V2H10.6667V10.6667C10.6667 11.0333 10.5362 11.3473 10.2753 11.6087C10.0144 11.87 9.70044 12.0004 9.33333 12H2.66667ZM4 9.33333H5.33333V3.33333H4V9.33333ZM6.66667 9.33333H8V3.33333H6.66667V9.33333Z" fill="white" />
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                </div>
            )}
        </div>
    );
}

export default TaskList;