import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AddTaskForm({ setTasks }) {
  const [taskTitle, setTaskTitle] = useState('');

  const handleTaskTitleChange = (e) => {
    setTaskTitle(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (taskTitle.trim() !== '') {
      const newTask = {
        title: taskTitle,
        completed: false,
      };
  
      try {
        await axios.post('/api/tasks', newTask);
        // console.log('Task added successfully!');
        setTaskTitle('');  
      } catch (error) {
        console.error('Error adding task:', error);
      }
    }
  };
  
  
  return (
    <form className="my-3 flex justify-center" onSubmit={handleSubmit}>
      <div className="relative ">
        <input
          type="text"
          value={taskTitle}
          onChange={handleTaskTitleChange}
          placeholder="Add new Task"
          className="md:w-[420px] w-full px-4 py-[0.7rem] rounded-md focus:outline-none focus:ring-0 focus:border-b-2 focus:border-orange-900"
        />
        <button
          type="submit"
          className="absolute right-0 top-0 my-2 mr-2 px-2 py-1 rounded-md"
          style={{ backgroundColor: '#bbb18c' }}
        >
          <i className="fa-solid fa-plus" style={{ color: '#8a7d65' }}></i>
        </button>
      </div>
    </form>
  );
}

export default AddTaskForm;