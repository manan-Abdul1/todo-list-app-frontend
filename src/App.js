import React, { useEffect, useState, lazy, Suspense } from "react";
import AddTaskForm from "./components/AddTaskForm";
import Accordion from "./components/Accordion";
import TodoList from "./components/TodoList";
import axios from "axios";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { ScaleLoader } from "react-spinners";

function App() {
  const [tasks, setTasks] = useState([]);

  // Lazy loading the Images component
  const LazyAvatar = lazy(() => import("./components/Avatar"));
  const LazyBackgroundImage = lazy(() =>
    import("./components/BackgroundImage")
  );

  //Showing the data
  useEffect(() => {
    const getList = async () => {
      try {
        const response = await axios.get(
          "https://calm-teal-fossa-tam.cyclic.app/api/tasks"
        );
        const tasksData = response.data;
        setTasks(tasksData);
      } catch (error) {
        // Handle the error
        console.error("Error fetching tasks:", error);
      }
    };
    getList();
  }, [tasks]);

  return (
    <>
      <div className="relative">
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-screen">
              <ScaleLoader
                color="#a99478"
                loading={true}
                height={35}
                width={4}
                radius={2}
                margin={2}
              />
            </div>
          }
        >
          <LazyBackgroundImage />
          <div className="container mx-auto pt-12 absolute z-20">
            <LazyAvatar />
            <AddTaskForm />
            <Accordion>
              {tasks.length > 0 ? (
                <TodoList tasks={tasks} setTasks={setTasks} />
              ) : (
                <div className="text-center my-20">No tasks today.</div>
              )}
            </Accordion>
          </div>
        </Suspense>
      </div>
    </>
  );
}

export default App;
