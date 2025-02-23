import React from 'react'
import { Todos } from './components/Todos'
import './App.css'
import { AddTodo } from './components/AddTodo'

function App() {

  return (
    <>
      <h2>Learn About Redux toolkit</h2>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
