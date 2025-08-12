
import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'


function App() {
  // const [count, setCount] = useState(0)
   const [Color, setColor] = useState("#ffcc00")

  return (
    <>
     {/* <h1 className='bg-green-400 rounded-xl text-black'>Tailwind test</h1> */}
      <div className="w-full h-screen duration-400" style={{ backgroundColor: Color }}>
       {/* <h1 className='bg-green-400 rounded-xl text-black'>Tailwind test</h1> */}
    <Card/>
     </div>
    
    <Card/>
    <Card/>
    
    </>
  )
}

export default App
