import React, { useState } from "react";
import axios from "axios";
import TaskItem from "./TaskItem";

function TodoList({ tasks, setTasks }) {
  const [editTask, setEditTask] = useState(null);

  const handleTaskDelete = async (taskId) => {
    try {
      // Make a DELETE request to delete the task
      await axios.delete(
        `https://calm-teal-fossa-tam.cyclic.app/api/tasks/${taskId}`
      );
      const updatedTasks = tasks.filter((task) => task._id !== taskId);
      setTasks(updatedTasks);
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const handleTaskStatusChange = async (taskId, completed) => {
    try {
      // Make a PUT request to update the task status
      await axios.put(`https://calm-teal-fossa-tam.cyclic.app/api/tasks/${taskId}`,{ completed });
      const updatedTasks = tasks.map((task) =>
        task._id === taskId ? { ...task, completed } : task
      );
      setTasks(updatedTasks);

    } catch (error) {
      console.error("Error updating task status:", error);
    }
  };

  const handleEditTask = async (editedTask) => {
    try {
      // Make a PUT request to update the task
      await axios.put(`https://calm-teal-fossa-tam.cyclic.app/api/tasks/${editedTask._id}`, editedTask);
      const updatedTasks = tasks.map((task) =>
        task._id === editedTask._id ? editedTask : task
      );
      setTasks(updatedTasks);
      setEditTask(null);
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  return (
    <div className="" style={{ zIndex: 999 }}>
      {tasks.map((task) => (
        <TaskItem
          key={task._id}
          title={task.title}
          completed={task.completed}
          task={task}
          setEditTask={setEditTask}
          onTaskStatusChange={handleTaskStatusChange}
          onTaskDelete={handleTaskDelete}
          handleEditTask={handleEditTask}
        />
      ))}
    </div>
  );
}

export default TodoList;
