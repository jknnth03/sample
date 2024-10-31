
import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'


import Login from "./page/Login/Login";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";


function App() {
  const [count, setCount] = useState(0);
  return <RouterProvider router={router} />;

}

export default App;
