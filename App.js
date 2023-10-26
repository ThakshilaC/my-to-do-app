import './App.css';

 // src/TodoList.js

 

 import React, { useState } from "react";

 

 const TodoList = () => {
 
   const [tasks, setTasks] = useState([]);
   const [newTask, setNewTask] = useState("");
 
  const addTask = () => {
    if (newTask) {
       setTasks([...tasks, newTask]);
       setNewTask("");
      }
    };
 
  
 
   const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };
 
  
 
   const editTask = (index, updatedTask) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = updatedTask;
    setTasks(updatedTasks);
  };
 
  
 
   return (
 
    
 
       <div className="container">
 
  
 
 <h1>Todo App</h1>
 
  
 
 <div className="header text-center">
  <div className="container">
    <form className="inputs">
      </form></div>
      <input
      type="text"
      value={newTask}
      onChange={(e) => setNewTask(e.target.value)}
      placeholder="Add a new task"
 
         />
 
         <button onClick={addTask}>Add</button>
 
       </div>
 
       <ul>
 
         {tasks.map((task, index) => (
 
           <li key={index}>
 
             {task}
 
             <button onClick={() => deleteTask(index)}>Delete</button>
 
             <button
 
               onClick={() => {
 
                 const updatedTask = prompt("Edit task", task);
 
                 if (updatedTask) editTask(index, updatedTask);
 
               }}
 
             >
 
               Edit
 
             </button>
 
           </li>
 
         ))}
 
       </ul>
 
     </div>
 
   );
 
 ;
 
             }
 
 export default TodoList;
 
  


 

 

