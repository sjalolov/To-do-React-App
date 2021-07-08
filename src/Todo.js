import React from 'react'
import './App.css';
export default function Todo({ todo, toggleTodo }) {
  function handleTodoClick() {
    toggleTodo(todo.id)
  }
  
  return (
    <div className="Todotext">
      <label>
        <div > 
           <input type="checkbox" classchecked={todo.complete} onChange={handleTodoClick} />
           {todo.name}
        </div>
      </label>
    </div>
  )
}
