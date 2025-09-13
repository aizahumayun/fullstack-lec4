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
  )
  
}

export default App      
