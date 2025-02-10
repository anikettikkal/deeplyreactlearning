import { useState } from 'react'
import React from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 rounded-xl p-5 text-white'>Tailwind Test</h1>
      <Card username='Aniket' />
      <Card username="Sharayu"/>

    </>
  )
}

export default App
