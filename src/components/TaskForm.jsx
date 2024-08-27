import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6 mb-4 max-w-md mx-auto">
      <h2 className="text-lg font-bold mb-4 text-gray-800">Add a New Task</h2>
      <div className="flex flex-col">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
          placeholder="Enter task here..."
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white p-3 rounded-md mt-4 hover:bg-indigo-700 transition duration-200"
        >
          Add Task
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
