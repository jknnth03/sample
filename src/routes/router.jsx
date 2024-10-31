import { createBrowserRouter } from "react-router-dom";
import Login from "../page/Login/Login";
import Landing from "../page/Landing/Landing";
export const router = createBrowserRouter([
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/landing",
    element: <Landing />,
  },
]);
