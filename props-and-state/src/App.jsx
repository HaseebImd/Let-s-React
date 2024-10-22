import './App.css'
import Greeting from './Greetings'
import { useState } from 'react'
import DynamicTaks from './Tasks';
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
const items = ['Apple', 'Banana', 'Cherry'];
const users = [
  { id: 1, name: 'John Doe', age: 28 },
  { id: 2, name: 'Jane Smith', age: 34 },
  { id: 3, name: 'Michael Johnson', age: 42 },
];

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
      {
        items.map((item, index) =>
          <li key={index}>
            {item}
          </li>
        )
      }

      <ul>
        {
          users.map(user => (
            <li key={user.id}>User {user.name} is of {user.age} years old.</li>
          ))
        }
      </ul>
      <h3>Dynamic List Rendering</h3>
      <DynamicTaks/>
    </>
  )
}

export default App
