import React from 'react'
import './App.css';
export default function Todo({ todo, toggleTodo }) {
  function handleTodoClick() {
    toggleTodo(todo.id)
  }
  
  return (
    <div>
      <label>
        <div className="Todotext"> 
           <input type="checkbox" classchecked={todo.complete} onChange={handleTodoClick} />
           {todo.name}
           <span class="w3docs"></span>
        </div>
      </label>
    </div>
  )
}
