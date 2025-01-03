import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import LayoutOne from './Layout/LayoutOne'

function App() {
  const myRoute =createBrowserRouter(createRoutesFromElements(
    
      <Route path='/' element={<LayoutOne/>} >
          <Route index element={<Home/>}/>
      </Route>
    
  ))
  return (
    <>
      <RouterProvider router={myRoute}/>
    </>
  )
}

export default App
