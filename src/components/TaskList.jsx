import React from 'react';

const TaskList = ({ tasks, deleteTask }) => {
  return (
    <ul className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
      <h2 className="text-lg font-bold mb-4 text-gray-800">Task List</h2>
      {tasks.length > 0 ? (
        tasks.map((task, index) => (
          <li key={index} className="flex justify-between items-center py-2 border-b border-gray-200 text-gray-800">
            <span>{task}</span>
            <button
              onClick={() => deleteTask(index)}
              className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700 transition duration-200"
            >
              Delete
            </button>
          </li>
        ))
      ) : (
        <li className="py-2 text-gray-600">No tasks available.</li>
      )}
    </ul>
  );
};

export default TaskList;
