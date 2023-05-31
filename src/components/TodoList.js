import React from 'react';
import axios from 'axios';
import TaskItem from './TaskItem';

function TodoList({ tasks, setTasks }) {

  const handleTaskDelete = async (taskId) => {
    try {
      await axios.delete(`https://weak-rose-cormorant-toga.cyclic.app//api/tasks/${taskId}`);
      setTasks(prevTasks => prevTasks.filter(task => task._id !== taskId));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleTaskStatusChange = async (taskId, completed) => {
    try {
      await axios.put(`https://weak-rose-cormorant-toga.cyclic.app//api/tasks/${taskId}`, { completed });

      setTasks(prevTasks =>
        prevTasks.map(task => (task._id === taskId ? { ...task, completed } : task))
      );

    } catch (error) {
      console.error('Error updating task status:', error);
    }
  };

  const handleEditTask = async (editedTask) => {
    try {
      await axios.put(`https://weak-rose-cormorant-toga.cyclic.app//api/tasks/${editedTask._id}`, editedTask);

      setTasks(prevTasks =>
        prevTasks.map(task => (task._id === editedTask._id ? editedTask : task))
      );

    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  return (
    <div style={{ zIndex: 999 }}>
      {tasks.map(task => (
        <TaskItem
          key={task._id}
          task={task}
          setTasks={setTasks}
          onTaskStatusChange={handleTaskStatusChange}
          onTaskDelete={handleTaskDelete}
          onEditTask={handleEditTask}
        />
      ))}
    </div>
  );
}

export default TodoList;
