import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="bg-yellow-500 w-90 h-58 flex">
      <div className="bg-blue-800 w-1/3"></div>
      <div className="bg-white w-1/3"></div>
      <div className="bg-red-500 w-1/3"></div>    
    </div>

    <div class="bg-green-700 w-90 h-58 size-72 justify-center flex">
      <div className="bg-red-700 rounded-full m-8 -ml-12 mt-5 size-12 w-1/2 h-45"></div>
        
    </div>

    <div class="bg-red-700 w-90 h-58 flex">
      <div class="h-58 bg-white w-70 ml-22">
        <div class="bg-green-700 h-1/3"></div>
        <div class="bg-white h-1/3"></div>
        <div class="bg-black h-1/3"></div>{" "}
      </div>
    </div>
  )
  
}

export default App      
