import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 15;
  let [counter, setCounter] = useState(15);
  //15 is the default value which will be stored in the counter.

  const addValue = () => {
    // counter = counter + 1;
    // console.log( counter)
    if(counter < 20) {
    setCounter(counter + 1)

    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    setCounter( prevCounter => prevCounter + 1)
    setCounter( prevCounter => prevCounter + 1)
    setCounter( prevCounter => prevCounter + 1)
    setCounter( prevCounter => prevCounter + 1)

  }
} 

  const removeValue = () => {
    // counter = counter + 1;
    // console.log( counter)
    if(counter > 0) {
    setCounter(counter - 1)
  }
}

  return (
    <>
      <h1>Chai aur code</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <p>Now the value is: {counter}</p>
      <br />
      <button onClick={removeValue }>Remove value</button> 
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
