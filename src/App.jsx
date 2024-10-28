import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './page/login'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route} from 'react-router-dom'
import Landing from './components/landing'
function App() {
  const [count, setCount] = useState(0)

  return (
      <BrowserRouter>
         <Routes>
      <Route path='/Login' element={<Login />}/>    
      <Route path='/' element={<Landing />}/>
    </Routes>
      </BrowserRouter>
  )
}

export default App
