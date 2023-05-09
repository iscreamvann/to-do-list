import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [tasks, setTasks] = useState(["This is my first task."]);
  const [newTask, setNewTask] = useState('');

   function addNewTask(){
    const newList = [...tasks, newTask];
    // alert(newList.toString())
    setTasks(newList)
   }

  const listItems = tasks.map(task => <li>{task}</li>);

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
