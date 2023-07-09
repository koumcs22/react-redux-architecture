import { BrowserRouter as Router, Route, Routes, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Web/View/Home';
import UserDetails from './Components/Web/View/UserDetails';

const router = createBrowserRouter([
  { path: "/", element: <Home/>},
  {path: "/user-details",element: <UserDetails/>}
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}
export default App;
