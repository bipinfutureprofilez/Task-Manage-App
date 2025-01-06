import React, { useState, useEffect } from 'react';

function TaskForm({ addTask, editTask, taskToEdit, setTaskToEdit }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('Pending');

    useEffect(() => {
        if (taskToEdit) {
            setTitle(taskToEdit.title);
            setDescription(taskToEdit.description);
            setStatus(taskToEdit.status);
        }
    }, [taskToEdit]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskToEdit) {
            editTask({ id: taskToEdit.id, title, description, status });
            setTaskToEdit(null);
        } else {
            addTask({ title, description, status });
        }
        setTitle('');
        setDescription('');
        setStatus('Pending');
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block text-sm font-medium">Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    className="w-full bg-[#f7f7f7] text-sm px-3 py-2 border border-gray-300 rounded-md !outline-none"
                />
            </div>
            <div>
                <label className="block text-sm font-medium">Description:</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    minLength="10"
                    className="w-full bg-[#f7f7f7] text-sm px-3 py-2 border border-gray-300 rounded-md !outline-none"
                />
            </div>
            <div>
                <label className="block text-sm font-medium">Status:</label>
                <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="w-full bg-[#f7f7f7] text-sm px-3 py-2 border border-gray-300 rounded-md !outline-none"
                >
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>
            </div>
            <button
                type="submit"
                className="px-4 py-2 bg-green-500 text-white text-sm rounded-md hover:bg-green-600"
            >
                {taskToEdit ? 'Update Task' : 'Add Task'}
            </button>
        </form>
    );
}

export default TaskForm;