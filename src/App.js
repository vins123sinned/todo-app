import React from 'react'

import './App.css';

const ToDoList = ({ todos }) => {
  return (
    <ul>
    {todos.map((todo) => <li>{todo}</li>)}
    </ul>
  )
}

function App() {
  const [value, setValue] = React.useState();
  const [todos, setTodos] = React.useState([])

  function addTodo(todo) {
    setTodos((oldTodos) => [...oldTodos, todo])
    setValue("")
  }
  return (
    <div>
      <h1>To do list</h1>
      <input type="text" placeholder="Add something to do" value={value} onChange={(e) => setValue(e.target.value)}></input>
      <button onClick={() => addTodo(value)}>Add</button>
      <ToDoList todos={todos}/>
    </div>
  )

}

export default App;
