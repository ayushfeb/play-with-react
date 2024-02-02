import Chai from "./Chai"
import { useState, useEffect } from "react"

function App() {

  const [counter, setCounter ]= useState(15)

  const addValue = () => {
    if (counter < 20){
      setCounter(counter + 1)
    }
    
  }

  const removeValue = () => {
    if (counter > 0){
      setCounter(counter - 1)
    }
  }

  useEffect(() => {
    console.log("add or remove value", counter);
  }, [counter]);

  return (
    <>
      <h1>Chai par Charcha with Ayush</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>
    </>
  )
}

export default App
