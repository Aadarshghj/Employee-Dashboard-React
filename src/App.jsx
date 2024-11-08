import { useState } from 'react'

import './App.css'
import EmForm from './Components/EmForm'
import EmpDashboard from './Components/EmpDashboard'
import { Route, Routes } from 'react-router-dom'
import Main from './Components/Main'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
       <Route path='/' element={<Main child={<EmpDashboard/>}/>}></Route>
       <Route path='/form' element={<Main child={<EmForm/>}/>}></Route>
      
      </Routes>
    </>
  )
}

export default App
