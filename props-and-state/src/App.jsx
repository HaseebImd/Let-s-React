import './App.css'
import Greeting from './Greetings'
import { useState } from 'react'
const data = {
  info: {
    name: "Haseeb Imdad",
    age: 25
  },
  education: {
    MSCS: {
      university: "National Textile University",
      award: "Gold Medal"
    },
    BSCS: {
      university: "National Textile University",
      award: "Silver Medal"
    },

  }
}

function App() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState('');
  function handleNameChange(e) {
    setName(e.target.value);
  }
  return (
    <>
      <h1>Basic Props and State</h1>
      <Greeting data={data} />
      <button onClick={() => setCounter(counter + 1)} >Increase Counter</button>
      <h2>Counter Value: {counter}</h2>
      <input value={name} type='text' onChange={handleNameChange} />
      <h3>Your name is : {name}</h3>
    </>
  )
}

export default App
