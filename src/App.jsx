import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './page/login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Login/>
  )
}

export default App
