import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [testing, setTesting] = useState(0);
  useEffect(() => {
    console.log("everytime");
  }, []);
  useEffect(() => {
    console.log("1");
  }, []);
  useEffect(() => {
    console.log("on every count")
  }, [count])
  function updateCounter() {
    setCount(count => count + 1);

  }
  useEffect(() => {
    console.log("On Testing");
  }, [testing]);
  return (
    <>
      {count} <br></br>
      <h3>Testing {testing}</h3>
      <button onClick={updateCounter} >Update Counter</button>
      <button onClick={() => setTesting(testing + 1)} >Update Testing</button>
    </>
  )
}

export default App
