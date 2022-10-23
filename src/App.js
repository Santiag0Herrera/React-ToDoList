import React, { useState } from "react";
import Todo from "./components/Todo/Todo";
import TodoCompleted from "./components/TodoCompleted/TodoCompleted";

function App() {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [tasks, setTasks] = useState([{id:0, title:"Example", text:"This is a test of a pending task" }]);
  const [completedTasks, setCompletedTasks] = useState([]);
  //functions

  const handleSubmit = () => {
    setTasks( tasks =>[...tasks,{id: tasks.length, title : taskName, text : taskDescription}])
    setTaskName('');
    setTaskDescription('');
  }

  const handleDeleteTasks = (id) => {
    setTasks(tasks.splice(0, id))
  }

  const handleDeleteCompleted = (id) => {
    setCompletedTasks(completedTasks.splice(0, id))
  }

  const handleCompleted = (id, title, text) => {
    setCompletedTasks( completedTasks => [...completedTasks, {id:id, title:title, text:text}])
    handleDeleteTasks(id);
  }

  const handleUncompleted = (id,title, text) => {
    setCompletedTasks(completedTasks.splice(0, id));
    setTasks( tasks =>[...tasks,{id: tasks.length, title : title, text : text}])
  }

  //JSX's
  return(
    <>
    <h1>To Do List</h1>
    <div className="main-container">
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
      <h2>Pending...</h2>
      <br></br>
        {tasks.map((data)=> <Todo 
          title={data.title} 
          text={data.text} 
          id={data.id} 
          key={data.title+data.id} 
          handleDelete={handleDeleteTasks}
          handleCompleted={handleCompleted}
          handleUncompleted={handleUncompleted}/>)}
      </div>
      <div className="todoContainer">
      <h2>Completed!</h2>
      <br></br>
        {completedTasks.map((data)=> <TodoCompleted 
          title={data.title} 
          text={data.text} 
          id={data.id} 
          key={data.title+data.id} 
          handleDelete={handleDeleteCompleted}
          handleCompleted={handleCompleted}
          handleUncompleted={handleUncompleted}/>)}
      </div>
    </div>
    </>
  )
}

export default App;
