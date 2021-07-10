import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList'
import './App.css';
import { nanoid } from "nanoid";


const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, { id: nanoid(), name: name, complete: false}]
    })
    todoNameRef.current.value = null
  }

  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  return (
    <>
    <section>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input className="Text" maxlength="22" ref={todoNameRef} type="text" />
      <button className="Add" onClick={handleAddTodo}>Add Todo</button>
      <button className="Clear" onClick={handleClearTodos}>Clear Complete</button>
      <button className="Left"> Completed Tasks</button> 
      <button className="Leftbox">{todos.filter(todo => todo.complete).length}</button>
      </section>
    </>
  )
}





export default App;
