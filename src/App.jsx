import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <p className='text-red-900 text-center text-4xl hover:text-blue-700 underline'>Shashank Podcast</p>
       </div>
    </>
  )
}

export default App
