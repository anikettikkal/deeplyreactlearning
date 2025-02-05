import { useState } from 'react'

function App() {

  let [counter, setCounter] = useState(0)
  let addValue = () => {
    
    setCounter(counter+1)
    if(counter==20){
      setCounter(20)
      console.log("value not increases");
      
    }
  }

  let removeValue = () => {
    setCounter(counter-1)
    if(counter <= 0){
      setCounter(0)
      console.log('not decreasing below 0');
    }
  }

  return (
    <>
      <h1>aniket</h1>
      <h2>Counter Project by using Hooks</h2>
      <h2>counter value : {counter}</h2>
      <button onClick={addValue}>add value</button> 
      <br />
      <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
