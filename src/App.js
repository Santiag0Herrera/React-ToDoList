import React, { useState } from "react";
import Todo from "./components/Todo/Todo";

function App() {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [tasks, setTasks] = useState([
    {
      id: '0',
      title:'Test', 
      text: 'Test description example to use as model for the toDo´s array'
    },
    {
      id: '1',
      title:'Test', 
      text: 'Test description example to use as model for the toDo´s array'
    },
    {
      id: '2',
      title:'Test', 
      text: 'Test description example to use as model for the toDo´s array'
    }
]);
  //functions
  const handleSubmit = () => {
    setTasks( tasks =>[...tasks,{title : taskName, text : taskDescription}])
    setTaskName('');
    setTaskDescription('');
  }
  //JSX's
  return(
    <div className="main-container">
    <h1>To Do List</h1>
    <form className="container-form">
      <label htmlFor="name">Task Name:</label>
      <input id="name" type="text" value={taskName} onChange={e=>setTaskName(e.target.value)}/>
      <br></br>
      <label htmlFor="description">Description:</label>
      <textarea id="description" rows="10" cols="10" value={taskDescription} onChange={e=>setTaskDescription(e.target.value)}/>
      <br></br>
      <button type="reset" className="btn btn-primary button" onClick={handleSubmit}>Submit</button>
    </form>
    <div className="todoContainer">
      {tasks.map((data)=> <Todo title={data.title} text={data.text} id={tasks.length+1} key={data.id}/>)}
    </div>
    </div>
  )
}

export default App;
