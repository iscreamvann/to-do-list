import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
 
const cookies = new Cookies();

function App() {

  const [tasks, setTasks] = useState(cookies.get("myTasks")||[]);
  const [newTask, setNewTask] = useState('');

  // useEffect(() => {

  //   const savedTasks = cookies.get("myTasks")
  //   console.log("saved cookies:", savedTasks);
  //   setTasks(savedTasks)

  // }, [])

   function addNewTask(){
    const newList = [...tasks, newTask];
    // alert(newList.toString())
    setTasks(newList) 
    setCookies(newList)
   }

   const setCookies=(newTasks)=>{
    cookies.set("myTasks",newTasks)

   }

   


  const listItems = tasks.map((task) => { 
    return (<li>
              {task}
              <button onClick={
                () => { 
              
                const deletedTaskList = tasks.filter(
                  (item) => task != item
                  )

                setTasks(deletedTaskList);
                setCookies(deletedTaskList)
                }
             }>Delete</button>
            </li>)
  }); // = [<li>This is my first task<button ></li>, <li>second task</li>]

  return (
    <div className="App">
      <h1>To Do App</h1>
      <input value={newTask} onChange={e => setNewTask(e.target.value)} placeholder="write your task here..." type="text"></input>
      <button onClick={addNewTask}>Add</button>
      <h2>List:</h2>
      <ul>{listItems}</ul>
    </div>
  );
}

export default App;
