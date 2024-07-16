import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  const myObj={
    username: "Bharat",
    age:24
  }

  return (
    <>
     <h1 className='bg-green-400 mb-2'>Tailwind Test</h1>
      < Card channel="chai aur code" someObject={myObj}/>
      < Card />
    </>
  )
}

export default App
