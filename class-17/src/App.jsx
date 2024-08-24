import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from './screens/Signup'
import Login from './screens/Login'
import Dashboard from './screens/Dashboard'

const App = () => {
  return (
    <div>
        <Routes>
          <Route index element={<Signup/>}/>
          <Route path='/Dashboard' element={<Dashboard/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
    </div>
  )
}

export default App