import { useState } from 'react'
import React from 'react';
import './App.css'


function App() {

  const [color, setColor] = useState("Black")

  return (
    <>
      <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'
        ><div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full border-2 '>
            <button onClick={() => { setColor("red") }}
              className='outline-none px-4 py-1 rounded-xl font-bold text-white font-stretch-semi-expanded'
              style={{ backgroundColor: 'red', fontSize: "20px" }}>Red
            </button>

            <button onClick={() => { setColor("orange") }}
              className='outline-none px-4 py-1 rounded-xl font-bold text-white font-stretch-semi-expanded'
              style={{ backgroundColor: 'orange', fontSize: "20px" }}>Orange
            </button>

            <button onClick={() => { setColor("yellow") }}
              className='outline-none px-4 py-1 rounded-xl font-bold text-white font-stretch-semi-expanded'
              style={{ backgroundColor: 'yellow', fontSize: "20px" }}>Yellow
            </button>

            <button onClick={() => { setColor("blue") }}
              className='outline-none px-4 py-1 rounded-xl font-bold text-white font-stretch-semi-expanded'
              style={{ backgroundColor: 'red', fontSize: "20px" }}>Blue
            </button>

            <button onClick={() => { setColor("violet") }}
              className='outline-none px-4 py-1 rounded-xl font-bold text-white font-stretch-semi-expanded'
              style={{ backgroundColor: 'violet', fontSize: "20px" }}>Violet
            </button>

            <button onClick={() => { setColor("pink") }}
              className='outline-none px-4 py-1 rounded-xl font-bold text-white font-stretch-semi-expanded'
              style={{ backgroundColor: 'pink', fontSize: "20px" }}>Pink
            </button>

            <button onClick={() => { setColor("green") }}
              className='outline-none px-4 py-1 rounded-xl font-bold text-white font-stretch-semi-expanded'
              style={{ backgroundColor: 'green', fontSize: "20px" }}>Green
            </button>

            <button onClick={() => { setColor("grey") }}
              className='outline-none px-4 py-1 rounded-xl font-bold text-white font-stretch-semi-expanded'
              style={{ backgroundColor: 'grey', fontSize: "20px" }}>Grey
            </button>

            <button onClick={() => { setColor("chocolate") }}
              className='outline-none px-4 py-1 rounded-xl font-bold text-white font-stretch-semi-expanded'
              style={{ backgroundColor: 'chocolate', fontSize: "20px" }}>Chocolate
            </button>

            <button onClick={() => { setColor("indigo") }}
              className='outline-none px-4 py-1 rounded-xl font-bold text-white font-stretch-semi-expanded'
              style={{ backgroundColor: 'indigo', fontSize: "20px" }}>indigo
            </button>

            <button onClick={() => { setColor("purple") }}
              className='outline-none px-4 py-1 rounded-xl font-bold text-white font-stretch-semi-expanded'
              style={{ backgroundColor: 'purple', fontSize: "20px" }}>Purple
            </button>

            <button onClick={() => { setColor("aqua") }}
              className='outline-none px-4 py-1 rounded-xl font-bold text-white font-stretch-semi-expanded'
              style={{ backgroundColor: 'aqua', fontSize: "20px" }}>Aqua
            </button>

            <button onClick={() => { setColor("olive") }}
              className='outline-none px-4 py-1 rounded-xl font-bold text-white font-stretch-semi-expanded'
              style={{ backgroundColor: 'olive', fontSize: "20px" }}>Olive
            </button>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
