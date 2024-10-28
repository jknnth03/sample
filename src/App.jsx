<<<<<<< HEAD
import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './page/login'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route} from 'react-router-dom'
import Landing from './components/landing'
=======
import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./page/Login/Login";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";

>>>>>>> f44a7ba2691103bc9c3aba9a522d0022285f37d9
function App() {
  const [count, setCount] = useState(0);

<<<<<<< HEAD
  return (
      <BrowserRouter>
         <Routes>
      <Route path='/Login' element={<Login />}/>    
      <Route path='/' element={<Landing />}/>
    </Routes>
      </BrowserRouter>
  )
=======
  return <RouterProvider router={router} />;
>>>>>>> f44a7ba2691103bc9c3aba9a522d0022285f37d9
}

export default App;
