
import './App.css'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'

import MainLayout from './Layout/MainLayout'
import HomePage from './pages/HomePage/HomePage'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path = '/' element = {<MainLayout/>}>
        <Route index element = {<HomePage/>} />
      </Route>
    )
  )
  return (<RouterProvider router = {router}/>)
}

export default App
