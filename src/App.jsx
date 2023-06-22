import User from './components/user'
import Map from './components/map'
import './App.css'
import { useState } from 'react';

function App() {

  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  // const [count, setCount] = useState(0);
//   const [showText, setShowText] = useState("red");

//  const color = () => {
//     setShowText(showText === "red" ? "green" : "red")
//  }

const handleChange = (event) => {
  setNewTask(event.target.value)
}

const addTask = () => {
  setTodoList([...todoList,newTask]);
}

const deleteTask = (taskItem) => {
  const newTodoList = todoList.filter((item) => {
    return item !== taskItem;
  })

   setTodoList(newTodoList)
}

  return (
    <>
      {/* <h1>User</h1>
      <User name="Raffy Taactaac" age={26} email="raffytaactaac88@gmail.com" /> */}
      {/* <h1>List</h1>
      <Map /> */}

      {/* <button onClick={color}>Show/Hide</button>
      <h1 style={{color: showText}}>Hi my name is RAFFY</h1> */}

      {/* <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <h1>{count}</h1> */}

      <div className='App'>
        <div className='addTask'>
          <input type="text" onChange={handleChange} />
          <button onClick={addTask}>Add Task</button>
        </div>
        <div className='list'>
          {todoList.map((task) => {
            return (
              <div style={{display: 'flex', alignItems: 'center'}}>
                <h1>{task}</h1>
                <button onClick={() => deleteTask(task)}>Delete</button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  )
}

export default App
