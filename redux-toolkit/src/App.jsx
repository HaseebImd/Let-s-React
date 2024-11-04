import { useState } from 'react'
import './App.css'
import Counter from './Counter'
import { useDispatch } from 'react-redux'
import { fetchTodos } from './features/todosSlice'
function App() {
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(fetchTodos())}>Fetch Todos</button>
      <Counter />
    </>
  )
}

export default App
