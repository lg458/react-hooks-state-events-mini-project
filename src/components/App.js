import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() { 
  const [taskList, setTaskList] = useState(TASKS);
  const [categorySelected, setCategorySelected] = useState("All"); 
  
  function handleDelete(taskToDelete) { 
    setTaskList((taskList) => 
    taskList.filter((task) => task.text !== taskToDelete.text))
  }

  function handleCategoryClick(categoryClicked) {
    setCategorySelected(categoryClicked);
  }

  function onTaskFormSubmit(newTask) {
    setTaskList([...taskList, newTask]);
  }

  const tasksToDisplay = taskList.filter((task) => {
    if (categorySelected === "All") { 
      return true;
    } 
    return (task.category === categorySelected);
  });


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES}
        handleCategoryClick={handleCategoryClick}  
        categorySelected={categorySelected}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList 
        tasks={tasksToDisplay} 
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
