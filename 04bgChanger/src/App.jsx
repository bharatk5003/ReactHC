import {useState}from 'react'

function App() {
  
  const [color,setColor]= useState("olive");

  const handleClick = (color) => {
    setColor(color);
  }

  return (
    <>
    <div className='w-full h-screen  duration-200'
    style={{backgroundColor:color}}
    ></div>
    <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
      <button className='outline-none px-4' style={{backgroundColor:"Red"}} onClick={ ()=>handleClick('red')}>Red</button>
      <button className='outline-none px-4' style={{backgroundColor:"Green"}} onClick={() => handleClick('green')}>Green</button>
      <button className='outline-none px-4' style={{backgroundColor:"Blue"}} onClick={() => handleClick('blue')}>Blue</button>
      <button className='outline-none px-4' style={{backgroundColor:"White"}}>white</button>
      <button className='outline-none px-4' style={{backgroundColor:"Olive"}}>olive</button>
    </div>
    </>
  )
}

export default App
