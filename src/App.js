import React, { useEffect, useState } from 'react';
import AddTaskForm from './components/AddTaskForm';
import Avatar from './components/Avatar';
import BackgroundImage from './components/BackgroundImage';
import Accordion from './components/Accordion';
import TodoList from './components/TodoList';
import axios from 'axios';
import '@fortawesome/fontawesome-free/css/all.min.css';



function App() {
  const [tasks, setTasks] = useState([]);

  //Showing the data
  useEffect(() => {
    const getList = async () => {
      try {
        const response = await axios.get('http://localhost:5500/api/tasks');
        const tasksData = response.data;
        setTasks(tasksData);
      } catch (error) {
        // Handle the error
        console.error('Error fetching tasks:', error);
      }
    };
    getList();
  }, [tasks]);

  return (
    <div className="relative">
      <BackgroundImage />
      <div className="container mx-auto pt-12 absolute z-20">
        <Avatar />
        <AddTaskForm />
        <Accordion>
          {tasks.length > 0 ? (
            <TodoList tasks={tasks} setTasks={setTasks} />
          ) : (
            <div className="text-center my-20">
              No tasks today.
            </div>
          )}
        </Accordion>
      </div>
    </div>
  );
}

export default App;
