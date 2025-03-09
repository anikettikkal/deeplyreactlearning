import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  console.log("app rendered", Math.random());
  
  // const [value, setValue]= useState(1)
  const [value, setValue]= useState({
    value:0,
  })

  // const [multiplyValue, setMultiplyValue] = useState(1)

  // let multiplyValue= value*5

  // const multiplybyfive = ()=>{
  //   // setMultiplyValue(value *5)
  //   setValue(value+1)
  // }
  
  const clickMe =()=>{
    setValue({
      value:0,
    })    
  }
  

  return (
    <>
      <h1>Main Value:{value.value}</h1>
      <button onClick={clickMe}> click to multiply by 5</button>
      {/* <h2>Multiplied Value: {multiplyValue}</h2> */}
    </>
  )
}

export default App
