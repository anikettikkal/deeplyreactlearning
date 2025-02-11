import { useState } from 'react'
import React from 'react';
import './App.css'


function App() {

  const [color, setColor] = useState("Black")

  return (
    <>
      <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'
        ><div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full  '>
            <button onClick={() => { setColor("red") }}
              className='outline-none px-4 py-1 rounded-xl font-bold text-white font-stretch-semi-expanded'
              style={{ backgroundColor: 'red', fontSize: "20px" }}>Red
            </button>

            <button onClick={() => { setColor("red") }}
              className='outline-none px-4 py-1 rounded-xl font-bold text-white font-stretch-semi-expanded'
              style={{ backgroundColor: 'red', fontSize: "20px" }}>Orange
            </button>

            <button onClick={() => { setColor("red") }}
              className='outline-none px-4 py-1 rounded-xl font-bold text-white font-stretch-semi-expanded'
              style={{ backgroundColor: 'red', fontSize: "20px" }}>Yellow
            </button>

            <button onClick={() => { setColor("red") }}
              className='outline-none px-4 py-1 rounded-xl font-bold text-white font-stretch-semi-expanded'
              style={{ backgroundColor: 'red', fontSize: "20px" }}>Blue
            </button>

            <button onClick={() => { setColor("red") }}
              className='outline-none px-4 py-1 rounded-xl font-bold text-white font-stretch-semi-expanded'
              style={{ backgroundColor: 'red', fontSize: "20px" }}>Violet
            </button>

            <button onClick={() => { setColor("red") }}
              className='outline-none px-4 py-1 rounded-xl font-bold text-white font-stretch-semi-expanded'
              style={{ backgroundColor: 'red', fontSize: "20px" }}>Pink
            </button>

            <button onClick={() => { setColor("red") }}
              className='outline-none px-4 py-1 rounded-xl font-bold text-white font-stretch-semi-expanded'
              style={{ backgroundColor: 'red', fontSize: "20px" }}>Green
            </button>

            <button onClick={() => { setColor("red") }}
              className='outline-none px-4 py-1 rounded-xl font-bold text-white font-stretch-semi-expanded'
              style={{ backgroundColor: 'red', fontSize: "20px" }}>Grey
            </button>

            <button onClick={() => { setColor("red") }}
              className='outline-none px-4 py-1 rounded-xl font-bold text-white font-stretch-semi-expanded'
              style={{ backgroundColor: 'red', fontSize: "20px" }}>Chocolate
            </button>

            <button onClick={() => { setColor("red") }}
              className='outline-none px-4 py-1 rounded-xl font-bold text-white font-stretch-semi-expanded'
              style={{ backgroundColor: 'red', fontSize: "20px" }}>Golden
            </button>

            <button onClick={() => { setColor("red") }}
              className='outline-none px-4 py-1 rounded-xl font-bold text-white font-stretch-semi-expanded'
              style={{ backgroundColor: 'red', fontSize: "20px" }}>purple
            </button>

            <button onClick={() => { setColor("red") }}
              className='outline-none px-4 py-1 rounded-xl font-bold text-white font-stretch-semi-expanded'
              style={{ backgroundColor: 'red', fontSize: "20px" }}>Red
            </button>

            <button onClick={() => { setColor("red") }}
              className='outline-none px-4 py-1 rounded-xl font-bold text-white font-stretch-semi-expanded'
              style={{ backgroundColor: 'red', fontSize: "20px" }}>Red
            </button>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
